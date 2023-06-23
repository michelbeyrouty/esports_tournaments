import { TournamentCard } from "./TournamentCard";
import { TOURNAMENTS } from "@/lib/constants/constants";

// TODO: Fetch TOURNAMENTS from DB

export default function HorizontalTournamentScroller() {
  return (
    <div
      id="tournaments"
      className="pl-[6%] sm:mt-[10%] mt-[85%] scroll-smooth"
    >
      <h1 className="text-whity font-bold sm:text-5xl text-4xl sm:w-36 w-auto italic">
        Tournaments
      </h1>
      <div className="flex overflow-auto mt-10">
        {TOURNAMENTS.map((tournament) => (
          <div key="" className="m-3">
            <TournamentCard tournament={tournament}></TournamentCard>
          </div>
        ))}
      </div>
    </div>
  );
}
