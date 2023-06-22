import shuffle from "@/lib/utils/shuffle";
import gameCod from "@/assets/images/games/game_cod.png";
import gameFifa from "@/assets/images/games/game_fifa.png";
import gameGrantourismo from "@/assets/images/games/game_grantourismo.png";
import gameMadden from "@/assets/images/games/game_madden.png";
import gameMortalcombat from "@/assets/images/games/game_mortalcombat.png";
import gameNba from "@/assets/images/games/game_nba.png";
import gameRocketleague from "@/assets/images/games/game_rocketleague.png";
import GameCard from "./GameCard";

export interface Images {
  img: any;
  alt: string;
}

const images: Images[] = [
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

export default function HorizontalGameScroller() {
  return (
    <div
      id="games"
      className="h-screen w-screen mt-[10%] scroll-smooth bg-darkgray pt-5 overflow-hidden"
    >
      <h1 className="text-whity font-bold sm:text-5xl text-4xl sm:w-36 w-auto italic pl-[6%]">
        Games
      </h1>
      <div className="flex mt-10 gap-5 animate-moveLeft sm:w-[200%] w-[450%]">
        {shuffle<Images[]>(images).map(({ img, alt }) => (
          <GameCard key={alt} img={img} alt={alt} />
        ))}
        {shuffle<Images[]>(images).map(({ img, alt }) => (
          <GameCard key={alt} img={img} alt={alt} />
        ))}
      </div>
      <div className="flex mt-10 gap-5 pr-10 animate-moveRight sm:w-[200%] w-[450%]">
        {shuffle<Images[]>(images).map(({ img, alt }) => (
          <GameCard key={alt} img={img} alt={alt} />
        ))}
        {shuffle<Images[]>(images).map(({ img, alt }) => (
          <GameCard key={alt} img={img} alt={alt} />
        ))}
      </div>
    </div>
  );
}
