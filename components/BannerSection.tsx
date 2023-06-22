import Button from "./Button";
import Card from "./Card";

export default function BannerSection() {
  return (
    <div className="w-screen h-96">
      <Card className="m-[10%] h-[60%] w-[80%]  bg-greeny flex flex-row items-center justify-between">
        <div className="w-[38%]">
          <h1 className="ml-[10%] text-4xl font-bold tracking-tight sm:text-3xl italic">
            Play your favorite games & win real money
          </h1>
        </div>

        <Button intent="secondary" size="large" className="mr-[5%]">
          Find a tournament
        </Button>
      </Card>
    </div>
  );
}
