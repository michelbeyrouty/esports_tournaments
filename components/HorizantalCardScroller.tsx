const x = [1, 2, 3, 4, 5];
import TournamentCard from "./TournamentCard";
import { Tournament } from "./TournamentCard";

const tournaments: Tournament[] = [
  {
    name: "MORTAL COMBAT III",
    imageName: "tournament_mortalcombat",
    prizePool: "$52",
    entryFee: "$4",
    enrolledPlayers: 2,
    capacity: 16,
  },
  {
    name: "NBA2K23 TOURNAMENT",
    imageName: "tournament_nba",
    prizePool: "$52",
    entryFee: "$4",
    enrolledPlayers: 2,
    capacity: 16,
  },
  {
    name: "MORTAL COMBAT III",
    imageName: "tournament_mortalcombat",
    prizePool: "$52",
    entryFee: "$4",
    enrolledPlayers: 2,
    capacity: 16,
  },
  {
    name: "NBA2K23 TOURNAMENT",
    imageName: "tournament_nba",
    prizePool: "$52",
    entryFee: "$4",
    enrolledPlayers: 8,
    capacity: 8,
  },
  {
    name: "MORTAL COMBAT III",
    imageName: "tournament_mortalcombat",
    prizePool: "$52",
    entryFee: "$4",
    enrolledPlayers: 4,
    capacity: 16,
  },
  {
    name: "NBA2K23 TOURNAMENT",
    imageName: "tournament_nba",
    prizePool: "$52",
    entryFee: "$4",
    enrolledPlayers: 6,
    capacity: 6,
  },
  //   {
  //     name: "EA FIFA 23 TOURNAMENT",
  //     imageName: "tournament_fifa",
  //     prizePool: "$52",
  //     entryFee: "$4",
  //     enrolledPlayers: 2,
  //     capacity: 16,
  //   },
];

export default function HorizantalCardScroller() {
  return (
    <div className="h-screen w-screen bg-red-800 pl-[6%]">
      <h1 className="text-whity font-bold sm:text-4xl text-6xl sm:w-36 w-auto italic">
        Tournaments
      </h1>
      <div className="flex overflow-auto">
        {tournaments.map((tournament) => (
          <div
            key=""
            style={{ height: "2300px", width: "514px", margin: "16px" }}
          >
            <TournamentCard tournament={tournament}></TournamentCard>
          </div>
        ))}
      </div>
    </div>
  );
}
