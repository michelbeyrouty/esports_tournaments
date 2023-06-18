import prizePoolIcon from "@/assets/images/prize_pool.png";
import entryFeeIcon from "@/assets/images/entry_fee.png";
import Image from "next/image";
import Card from "./Card";

const x = [1, 2, 3];

export interface Tournament {
  name: string;
  imageName: string;
  prizePool: string;
  entryFee: string;
  enrolledPlayers: number;
  capacity: number;
}

export default function TournamentCard({ tournament }: any) {
  return (
    <Card className="bg-grayy h-64 w-60 flex flex-col">
      <Image
        className="mx-2 mt-2 w-auto"
        src={require(`@/assets/images/${tournament.imageName}.png`)}
        alt="Your Company"
      />
      <h1 className="text-whity font-bold text-md italic mx-2">
        {tournament.name}
      </h1>
      <br />
      <TournamentCardInfo
        prizePool={tournament.prizePool}
        entryFee={tournament.entryFee}
        enrolledPlayers={tournament.enrolledPlayers}
        capacity={tournament.capacity}
      />
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
        <Image className="h-auto" src={image} alt="Your Company" />
        <text className="text-whity text-[12px] h-auto">{data}</text>
      </div>
    </div>
  );
}
