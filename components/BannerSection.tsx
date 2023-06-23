import Button from "./Button";
import Card from "./Card";

export default function BannerSection() {
  return (
    <div className="w-screen h-96">
      <Card className="m-[10%] h-[60%] w-[80%] bg-greeny flex sm:flex-row flex-col items-center justify-between">
        <div className="ml-0 sm:ml-[5%] mt-[5%] sm:mt-0 sm:w-auto w-72">
          <h2 className="text-3xl font-semibold tracking-tight italic text-center">
            Play your favorite games
          </h2>
          <h2 className="text-3xl font-semibold tracking-tight italic text-center">
            & win real money
          </h2>
        </div>
        <Button
          intent="secondary"
          size="medium"
          className="mr-0 mb-[10%] sm:mb-0 sm:mr-[5%]"
        >
          Find a tournament
        </Button>
      </Card>
    </div>
  );
}
