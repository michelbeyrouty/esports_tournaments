import Button from "./Button";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className={`bg-hero-pattern bg-black h-screen bg-right-top bg-no-repeat bg-85%`}
    >
      <Introduction />
    </div>
  );
}

function Introduction() {
  return (
    <div className="w-1/3 pt-32 pl-20">
      <div>
        <h1 className="text-6xl font-extrabold text-whity">Join.</h1>
        <h1 className="text-6xl font-extrabold text-whity">Compete.</h1>
        <h1 className="text-6xl font-extrabold text-whity">Win cash.</h1>
        <p className="mt-6 text-lg leading-8 text-whity">
          Elevate your game nights by joining or creating a league, where
          friends become fierce competitors
        </p>
        <br />
        <br />
        <div className="w-12">
          <Link href="/" passHref>
            <Button className="rounded-md py-1.5 text-sm font-semibold text-black">
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
