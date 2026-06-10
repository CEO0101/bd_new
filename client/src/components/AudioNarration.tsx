import { useState, useRef, useEffect, useMemo } from "react";

type Lang = { code: "en" | "hi" | "ml"; label: string; native: string; bcp47: string[] };

const LANGS: Lang[] = [
  { code: "en", label: "English",   native: "English",     bcp47: ["en-IN", "en-GB", "en-US", "en-AU"] },
  { code: "hi", label: "Hindi",     native: "हिन्दी",        bcp47: ["hi-IN", "hi"] },
  { code: "ml", label: "Malayalam", native: "മലയാളം",     bcp47: ["ml-IN", "ml"] },
];

const SPEEDS = [0.75, 1, 1.25, 1.5, 1.75, 2];

// Preferred voices in order: premium neural > native warm > generic
const PREMIUM = [/neural/i, /premium/i, /enhanced/i, /natural/i];
const WARM = [/samantha/i, /serena/i, /karen/i, /moira/i, /tessa/i, /fiona/i, /lekha/i, /veena/i, /rishi/i, /isha/i, /kanya/i];

const CREAM = "20,19,15";
const SAGE = "46,111,87";

export default function AudioNarration({ text }: { text: string }) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [lang, setLang] = useState<Lang>(LANGS[0]);
  const [speed, setSpeed] = useState<number>(1);
  const [state, setState] = useState<"idle" | "playing" | "paused">("idle");
  const [progress, setProgress] = useState(0);
  const [supported, setSupported] = useState(true);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) { setSupported(false); return; }
    const load = () => setVoices(window.speechSynthesis.getVoices());
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load);
      window.speechSynthesis.cancel();
    };
  }, []);

  // Find best voice for selected language. Returns voice + whether it's a true match.
  const { voice, matched } = useMemo(() => {
    if (!voices.length) return { voice: undefined as SpeechSynthesisVoice | undefined, matched: false };
    for (const code of lang.bcp47) {
      const exact = voices.filter(v => v.lang === code);
      const prefix = voices.filter(v => v.lang.startsWith(code.split("-")[0]));
      const pool = exact.length ? exact : prefix;
      if (!pool.length) continue;
      const premium = pool.find(v => PREMIUM.some(re => re.test(v.name)));
      if (premium) return { voice: premium, matched: true };
      const warm = pool.find(v => WARM.some(re => re.test(v.name)));
      if (warm) return { voice: warm, matched: true };
      return { voice: pool[0], matched: true };
    }
    // Fallback: English
    const fallback = voices.find(v => PREMIUM.some(re => re.test(v.name)) && v.lang.startsWith("en"))
                 || voices.find(v => WARM.some(re => re.test(v.name)) && v.lang.startsWith("en"))
                 || voices.find(v => v.lang.startsWith("en"));
    return { voice: fallback, matched: false };
  }, [voices, lang]);

  // Update speed live during playback
  useEffect(() => {
    if (utterRef.current && state === "playing") {
      utterRef.current.rate = speed * 0.9; // 1x in UI = 0.9 internal (calm reading pace)
    }
  }, [speed, state]);

  function speak() {
    if (!window.speechSynthesis) return;
    if (state === "paused") { window.speechSynthesis.resume(); setState("playing"); return; }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.lang = voice?.lang || lang.bcp47[0];
    u.rate = speed * 0.9;
    u.pitch = 0.95;
    u.volume = 1.0;
    u.onstart = () => setState("playing");
    u.onend = () => { setState("idle"); setProgress(0); };
    u.onerror = () => setState("idle");
    u.onboundary = (e) => { if (e.name === "word") setProgress(Math.min(100, (e.charIndex / text.length) * 100)); };
    utterRef.current = u;
    window.speechSynthesis.speak(u);
  }

  function pause() { if (window.speechSynthesis) { window.speechSynthesis.pause(); setState("paused"); } }
  function stop()  { if (window.speechSynthesis) { window.speechSynthesis.cancel(); setState("idle"); setProgress(0); } }

  if (!supported) return null;
  const active = state === "playing" || state === "paused";

  // Status line below the controls
  let statusLine = "";
  if (state === "playing") statusLine = `Playing in ${voice?.name || lang.label} · ${speed}×`;
  else if (state === "paused") statusLine = "Paused. Tap play to resume.";
  else if (!matched && lang.code !== "en") statusLine = `No ${lang.label} voice installed on this device. Narration will use English with the best available voice.`;
  else statusLine = `Tap play. ${voice?.name ? `Narrated by ${voice.name}.` : ""} Take it on a walk.`;

  return (
    <div style={{
      border: `1px solid rgba(${SAGE},0.16)`,
      background: `linear-gradient(180deg, rgba(${SAGE},0.04) 0%, rgba(${SAGE},0.015) 100%)`,
      padding: "20px 22px",
      borderRadius: "14px",
      marginBottom: "36px",
    }}>
      {/* ── Top row: play / label / language ─────────────────────── */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
        <button
          onClick={state === "playing" ? pause : speak}
          aria-label={state === "playing" ? "Pause" : "Play"}
          style={{
            width: "48px", height: "48px", borderRadius: "50%",
            background: `rgba(${SAGE},0.95)`, border: "none", color: "#FFFFFF",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, boxShadow: `0 4px 14px rgba(${SAGE},0.22)`,
          }}
        >
          {state === "playing" ? (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
              <rect width="4" height="16" rx="1"/><rect x="10" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
              <path d="M2 1 L2 15 L13 8 Z"/>
            </svg>
          )}
        </button>

        <div style={{ flex: 1, minWidth: "160px" }}>
          <div style={{
            fontFamily: "'DM Mono',monospace", fontSize: "9px", letterSpacing: "0.24em",
            textTransform: "uppercase", color: `rgba(${SAGE},0.85)`, marginBottom: "5px",
          }}>
            {state === "playing" ? "Now playing" : state === "paused" ? "Paused" : "Listen to this dispatch"}
          </div>
          <div style={{
            fontFamily: "'DM Serif Display',serif", fontSize: "15px",
            color: `rgba(${CREAM},0.85)`, lineHeight: 1.35,
          }}>
            {lang.native}{lang.code !== "en" ? ` · ${lang.label}` : ""}
          </div>
        </div>

        {/* Language switcher */}
        <select
          value={lang.code}
          onChange={(e) => {
            const next = LANGS.find(l => l.code === e.target.value);
            if (next) { stop(); setLang(next); }
          }}
          aria-label="Narration language"
          style={{
            fontFamily: "'DM Mono',monospace", fontSize: "10px", letterSpacing: "0.08em",
            textTransform: "uppercase", padding: "9px 14px",
            border: `1px solid rgba(${SAGE},0.25)`, background: "rgba(255,255,255,0.75)",
            color: `rgba(${CREAM},0.78)`, borderRadius: "8px", cursor: "pointer", flexShrink: 0,
          }}
        >
          {LANGS.map((l) => (
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>

        {active && (
          <button
            onClick={stop}
            aria-label="Stop"
            style={{
              fontFamily: "'DM Mono',monospace", fontSize: "9px", letterSpacing: "0.22em",
              textTransform: "uppercase", padding: "9px 14px",
              border: `1px solid rgba(${CREAM},0.18)`, background: "transparent",
              color: `rgba(${CREAM},0.6)`, borderRadius: "8px", cursor: "pointer",
            }}
          >
            Stop
          </button>
        )}
      </div>

      {/* ── Speed pills ──────────────────────────────────────────── */}
      <div style={{
        display: "flex", alignItems: "center", gap: "8px",
        marginTop: "16px", flexWrap: "wrap",
      }}>
        <span style={{
          fontFamily: "'DM Mono',monospace", fontSize: "9px", letterSpacing: "0.2em",
          textTransform: "uppercase", color: `rgba(${CREAM},0.45)`, marginRight: "4px",
        }}>Speed</span>
        {SPEEDS.map((s) => {
          const isOn = speed === s;
          return (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              style={{
                fontFamily: "'DM Mono',monospace", fontSize: "10px",
                padding: "5px 10px", borderRadius: "999px", cursor: "pointer",
                border: isOn ? `1px solid rgba(${SAGE},0.6)` : `1px solid rgba(${CREAM},0.12)`,
                background: isOn ? `rgba(${SAGE},0.92)` : "rgba(255,255,255,0.6)",
                color: isOn ? "#FFFFFF" : `rgba(${CREAM},0.6)`,
                transition: "all 0.15s",
              }}
              aria-pressed={isOn}
              aria-label={`Playback speed ${s} times`}
            >
              {s}×
            </button>
          );
        })}
      </div>

      {/* ── Progress bar ────────────────────────────────────────── */}
      {active && (
        <div style={{
          marginTop: "16px", height: "3px", background: `rgba(${SAGE},0.1)`,
          borderRadius: "2px", overflow: "hidden",
        }}>
          <div style={{
            width: `${progress}%`, height: "100%", background: `rgba(${SAGE},0.85)`,
            transition: "width 0.3s ease", borderRadius: "2px",
          }} />
        </div>
      )}

      {/* ── Status line ─────────────────────────────────────────── */}
      <div style={{
        marginTop: "14px", fontFamily: "'DM Sans',sans-serif", fontSize: "12px",
        fontStyle: !matched && lang.code !== "en" ? "italic" : "normal",
        color: !matched && lang.code !== "en" ? `rgba(${CREAM},0.55)` : `rgba(${CREAM},0.62)`,
        lineHeight: 1.5,
      }}>
        {statusLine}
      </div>

      {/* ── Voice-install help when no native voice ─────────────── */}
      {!matched && lang.code !== "en" && (
        <div style={{
          marginTop: "8px", fontFamily: "'DM Sans',sans-serif", fontSize: "11px",
          color: `rgba(${CREAM},0.45)`, lineHeight: 1.5,
        }}>
          To enable a true {lang.label} narrator, install the voice on your device:
          <br />
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "10px" }}>
            macOS / iOS: System Settings → Accessibility → Spoken Content → System Voice → Add {lang.label}.
            <br />
            Android: Settings → System → Languages → Text-to-speech → Install {lang.label} voice data.
          </span>
        </div>
      )}
    </div>
  );
}
