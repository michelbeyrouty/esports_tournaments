import Button from "./Button";
import Card from "./Card";

export default function BannerSection() {
  return (
    <div className="w-screen h-96">
      <Card className="m-[10%] h-[60%] w-[80%] bg-greeny flex sm:flex-row flex-col items-center justify-between">
        <div className="w-[100%]">
          <h2 className="ml-[10%] text-4xl font-bold tracking-tight sm:text-3xl italic">
            Play your favorite games
          </h2>
          <h2 className="ml-[10%] text-4xl font-bold tracking-tight sm:text-3xl italic">
            & win real money
          </h2>
        </div>
        <Button intent="secondary" size="medium" className="mr-[5%]">
          Find a tournament
        </Button>
      </Card>
    </div>
  );
}
