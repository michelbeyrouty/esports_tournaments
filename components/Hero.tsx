import Button from "./Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={` bg-blacky h-screen `}>
      <div className="h-full flex flex-col sm:flex-row">
        <Introduction />
        <div className="sm:flex-grow bg-hero-pattern bg-right-bottom bg-no-repeat bg-130%"></div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <div className="sm:w-1/3 sm:pt-[15%] pl-[6%] pt-[35%]">
      <div>
        <h1 className="text-6xl font-extrabold text-whity">Join.</h1>
        <h1 className="text-6xl font-extrabold text-whity">Compete.</h1>
        <h1 className="text-6xl font-extrabold text-whity">Win cash.</h1>
        <p className="mt-6 text-lg leading-8 text-whity">
          Elevate your game nights by joining or creating a league, where
          friends become fierce competitors
        </p>
        <br />
        <Link href="https://discord.gg/ZEd78mgM" target="_blank">
          <Button intent="primary">Get started</Button>
        </Link>
      </div>
    </div>
  );
}
