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
  {
    name: "NBA2K23 TOURNAMENT",
    imageName: "tournament_nba",
    prizePool: "$52",
    entryFee: "$4",
    enrolledPlayers: 6,
    capacity: 6,
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
    <div
      id="tournaments"
      className="h-screen w-screen pl-[6%] sm:mt-[10%] mt-[85%] scroll-smooth"
    >
      <h1 className="text-whity font-bold sm:text-4xl text-6xl sm:w-36 w-auto italic">
        Tournaments
      </h1>
      <div className="flex overflow-auto mt-10">
        {tournaments.map((tournament) => (
          <div key="" className="m-3">
            <TournamentCard tournament={tournament}></TournamentCard>
          </div>
        ))}
      </div>
    </div>
  );
}
