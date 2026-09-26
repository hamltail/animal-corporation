import About from "@/components/About";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Projects from "@/components/Projects";
import Recruit from "@/components/Recruit";
import Service from "@/components/Service";
import Team from "@/components/Team";
import TeamSelectionProvider from "@/components/TeamSelectionProvider";

export default function Home() {
  return (
    <TeamSelectionProvider>
      <Hero />

      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn>
        <Service />
      </FadeIn>

      <FadeIn>
        <Projects />
      </FadeIn>

      <FadeIn>
        <Team />
      </FadeIn>

      <FadeIn>
        <News />
      </FadeIn>

      <FadeIn>
        <Contact />
      </FadeIn>

      <FadeIn>
        <Recruit />
      </FadeIn>
    </TeamSelectionProvider>
  );
}
