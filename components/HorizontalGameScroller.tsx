import Image from "next/image";
import gameCod from "@/assets/images/games/game_cod.png";
import gameFifa from "@/assets/images/games/game_fifa.png";
import gameGrantourismo from "@/assets/images/games/game_grantourismo.png";
import gameMadden from "@/assets/images/games/game_madden.png";
import gameMortalcombat from "@/assets/images/games/game_mortalcombat.png";
import gameNba from "@/assets/images/games/game_nba.png";
import gameRocketleague from "@/assets/images/games/game_rocketleague.png";

const images = [
  {
    img: gameCod,
    alt: "Call of Duty",
  },
  {
    img: gameFifa,
    alt: "FIFA",
  },
  {
    img: gameGrantourismo,
    alt: "Grantourismo",
  },
  {
    img: gameMadden,
    alt: "Madden",
  },
  {
    img: gameMortalcombat,
    alt: "Mortal Combat",
  },
  {
    img: gameNba,
    alt: "NBA",
  },
  {
    img: gameRocketleague,
    alt: "Rocket League",
  },
];

export default function HorizontalTournamentScroller() {
  return (
    <div className="h-screen w-screen sm:mt-[10%] mt-[85%] scroll-smooth">
      <h1 className="text-whity font-bold sm:text-5xl text-4xl sm:w-36 w-auto italic pl-[6%]">
        Games
      </h1>
      <div className="flex overflow-auto mt-10 gap-5">
        {images.map(({ img, alt }) => (
          <div key={alt} className="">
            <Image src={img} alt={alt}></Image>
          </div>
        ))}
      </div>
    </div>
  );
}
