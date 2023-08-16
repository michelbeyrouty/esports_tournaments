import prizePoolIcon from "@/assets/images/prize_pool.png";
import entryFeeIcon from "@/assets/images/entry_fee.png";
import Image from "next/image";
import Card from "./Card";
import Button from "./Button";
import CountdownTimer from "./CountdownTimer";
import { Tournament } from "@/lib/constants/types";

export function TournamentCard({ tournament }: { tournament: Tournament }) {
  return (
    <Card className="bg-grayy sm:h-[425px] sm:w-[450px] h-80 w-64 flex flex-col">
      <Image
        className="mx-2 mt-2 w-auto"
        src={require(`@/assets/images/${tournament.imageName}.png`)}
        alt="Your Company"
      />
      <div className="h-1" />
      <h1 className="text-whity font-bold text-lg italic mx-2">
        {tournament.name}
      </h1>
      <div className="h-1" />
      <div>
        <TournamentCardInfo
          prizePool={tournament.prizePool}
          entryFee={tournament.entryFee}
          enrolledPlayers={tournament.enrolledPlayers}
          capacity={tournament.capacity}
        />
      </div>
      <div className="h-2" />
      <div className="bg-greeny h-0.5" />
      <div className="flex-grow flex flex-row justify-between items-center">
        <div className="flex flex-col ml-3">
          <text className="text-[12px] text-whity">Starting in</text>
          <CountdownTimer targetDate={16874041211000} />
        </div>
        <Button intent="primary" size="small" className="mr-3">
          Enroll now
        </Button>
      </div>
    </Card>
  );
}

function TournamentCardInfo({
  prizePool,
  entryFee,
  enrolledPlayers,
  capacity,
}: any) {
  return (
    <div className="flex flex-row mx-2 gap-5">
      <TournamentCardInfo2
        title={"Prize Pool"}
        image={prizePoolIcon}
        data={prizePool}
      />
      <TournamentCardInfo2
        title={"Entry Fee"}
        image={entryFeeIcon}
        data={entryFee}
      />
      <TournamentCardInfo2
        title={"Players"}
        image={entryFeeIcon}
        data={enrolledPlayers + "/" + capacity}
      />
    </div>
  );
}

function TournamentCardInfo2({ title, image, data }: any) {
  return (
    <div className="flex flex-col">
      <text className="text-lightgray text-[12px]">{title}</text>
      <div className="flex flex-row justify-start gap-2">
        <Image src={image} alt="Your Company" />
        <text className="text-whity text-[14px] h-auto">{data}</text>
      </div>
    </div>
  );
}
