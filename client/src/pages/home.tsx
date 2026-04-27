import Hero, { CustomCursor } from "@/components/sections/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div
      className="bg-[#09080A] text-[#EDE8DF] overflow-hidden"
      style={{ height: "100dvh", maxHeight: "100dvh", cursor: "none" }}
    >
      <CustomCursor />
      <Navbar />
      <Hero />
    </div>
  );
}
