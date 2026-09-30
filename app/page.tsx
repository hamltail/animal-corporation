import { newsFetcher } from "@/lib/news/dependencies";
import { getNews } from "@/lib/news/news";

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

const NEWS_LIMIT = 3;

export default async function Home() {
  const response = await getNews(newsFetcher, {
    limit: NEWS_LIMIT,
    offset: 0,
  });

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
        <News newsList={response.contents} />
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
