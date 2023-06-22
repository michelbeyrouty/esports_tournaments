import Image from "next/image";
import gameCod from "@/assets/images/games/game_cod.png";

export default function HorizontalTournamentScroller() {
  return (
    <div className="h-screen w-screen pl-[6%] sm:mt-[10%] mt-[85%] scroll-smooth">
      <h1 className="text-whity font-bold sm:text-5xl text-4xl sm:w-36 w-auto italic">
        Games
      </h1>
      <div className="flex overflow-auto mt-10">
        <Image
          src={gameCod}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          // onClick={() => setToggle(!toggle)}
        />
      </div>
    </div>
  );
}
