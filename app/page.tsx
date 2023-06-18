import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <div className=" w-screen h-screen bg-blacky"></div>
    </main>
  );
}
