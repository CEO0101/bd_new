import { useState, useRef, useEffect, useMemo } from "react";

type Lang = { code: "en" | "hi" | "ml"; label: string; bcp47: string[]; beta?: boolean };

const LANGS: Lang[] = [
  { code: "en", label: "English", bcp47: ["en-IN", "en-GB", "en-US", "en-AU"] },
  { code: "hi", label: "हिन्दी · Hindi", bcp47: ["hi-IN", "hi"], beta: true },
  { code: "ml", label: "മലയാളം · Malayalam", bcp47: ["ml-IN", "ml"], beta: true },
];

const WARM = [/samantha/i, /karen/i, /moira/i, /tessa/i, /fiona/i, /serena/i, /lekha/i, /veena/i, /rishi/i, /natural/i, /neural/i, /enhanced/i, /premium/i];

export default function AudioNarration({ text }: { text: string }) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [lang, setLang] = useState<Lang>(LANGS[0]);
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

  const voice = useMemo(() => {
    if (!voices.length) return undefined;
    for (const code of lang.bcp47) {
      const matches = voices.filter(v => v.lang === code || v.lang.startsWith(code.split("-")[0]));
      const warm = matches.find(v => WARM.some(re => re.test(v.name)));
      if (warm) return warm;
      if (matches.length) return matches[0];
    }
    return undefined;
  }, [voices, lang]);

  function speak() {
    if (!window.speechSynthesis) return;
    if (state === "paused") { window.speechSynthesis.resume(); setState("playing"); return; }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.lang = voice?.lang || lang.bcp47[0];
    u.rate = 0.88;
    u.pitch = 0.92;
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

  return (
    <div style={{
      border: "1px solid rgba(46,111,87,0.18)",
      background: "rgba(46,111,87,0.04)",
      padding: "18px 20px",
      borderRadius: "12px",
      marginBottom: "32px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
        <button
          onClick={state === "playing" ? pause : speak}
          aria-label={state === "playing" ? "Pause narration" : "Play narration"}
          style={{
            width: "44px", height: "44px", borderRadius: "50%",
            background: "rgba(46,111,87,0.92)", border: "none", color: "#FFFFFF",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
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

        <div style={{ flex: 1, minWidth: "180px" }}>
          <div style={{
            fontFamily: "'DM Mono',monospace", fontSize: "9px", letterSpacing: "0.22em",
            textTransform: "uppercase", color: "rgba(46,111,87,0.85)", marginBottom: "4px",
          }}>
            {state === "playing" ? "Listening" : state === "paused" ? "Paused" : "Listen instead of read"}
          </div>
          <div style={{
            fontFamily: "'DM Sans',sans-serif", fontSize: "13px",
            color: "rgba(20,19,15,0.72)", lineHeight: 1.45,
          }}>
            Tap play. Narrated in your selected language at a calm reading pace. Take it on a walk.
          </div>
        </div>

        <select
          value={lang.code}
          onChange={(e) => {
            const next = LANGS.find(l => l.code === e.target.value);
            if (next) { stop(); setLang(next); }
          }}
          style={{
            fontFamily: "'DM Mono',monospace", fontSize: "11px", padding: "8px 12px",
            border: "1px solid rgba(46,111,87,0.25)", background: "rgba(255,255,255,0.7)",
            color: "rgba(20,19,15,0.8)", borderRadius: "6px", cursor: "pointer", flexShrink: 0,
          }}
        >
          {LANGS.map((l) => (
            <option key={l.code} value={l.code}>{l.label}{l.beta ? " · beta" : ""}</option>
          ))}
        </select>

        {active && (
          <button
            onClick={stop}
            aria-label="Stop narration"
            style={{
              fontFamily: "'DM Mono',monospace", fontSize: "9px", letterSpacing: "0.18em",
              textTransform: "uppercase", padding: "8px 12px",
              border: "1px solid rgba(20,19,15,0.2)", background: "transparent",
              color: "rgba(20,19,15,0.6)", borderRadius: "6px", cursor: "pointer",
            }}
          >
            Stop
          </button>
        )}
      </div>

      {active && (
        <div style={{
          marginTop: "14px", height: "3px", background: "rgba(46,111,87,0.1)",
          borderRadius: "2px", overflow: "hidden",
        }}>
          <div style={{
            width: `${progress}%`, height: "100%", background: "rgba(46,111,87,0.85)",
            transition: "width 0.3s ease", borderRadius: "2px",
          }} />
        </div>
      )}

      {lang.beta && (
        <div style={{
          marginTop: "12px", fontFamily: "'DM Sans',sans-serif", fontSize: "11px",
          fontStyle: "italic", color: "rgba(20,19,15,0.5)", lineHeight: 1.45,
        }}>
          {lang.code === "hi"
            ? "Hindi narration uses the Hindi voice installed on your device. Full Hindi translation is rolling out shortly."
            : "Malayalam narration uses the Malayalam voice installed on your device. Full Malayalam translation is rolling out shortly."}
        </div>
      )}
    </div>
  );
}
