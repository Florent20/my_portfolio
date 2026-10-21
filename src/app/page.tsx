import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/animations/Marquee";
import { LineDraw } from "@/components/animations/LineDraw";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        items={["TypeScript", "React", "Next.js", "Node", "Postgres", "AWS", "WebGL", "GSAP"]}
        speed={35}
      />
      <LineDraw />
      <Work />
      <LineDraw />
      <About />
      <Contact />
    </>
  );
}