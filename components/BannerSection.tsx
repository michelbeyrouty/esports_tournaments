import Button from "./Button";
import Link from "next/link";
import Card from "./Card";

export default function BannerSection() {
  return (
    <div className="w-screen flex flex-col justify-center">
      <Card className="m-[10%] w-[80%] h-44 bg-greeny flex sm:flex-row flex-col items-center justify-between">
        <div className="ml-0 sm:ml-[5%] sm:mt-0 mt-3 sm:w-auto w-72">
          <h2 className="sm:text-3xl text-xl font-semibold tracking-tight italic text-center">
            Play your favorite games
          </h2>
          <h2 className="sm:text-3xl text-xl font-semibold tracking-tight italic text-center">
            & win real money
          </h2>
        </div>
        <Link href="#tournaments" passHref className="sm:h-10 h-15">
          <Button intent="secondary" className="sm:mr-5 mb-5">
            {"Find a tournament"}
          </Button>
        </Link>
      </Card>
    </div>
  );
}
