import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import HorizontalTournamentScroller from "@/components/HorizontalTournamentScroller";
import HorizontalGameScroller from "@/components/HorizontalGameScroller";
import BannerSection from "@/components/BannerSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <HorizontalTournamentScroller />
      <HorizontalGameScroller />
      <BannerSection />
    </main>
  );
}
