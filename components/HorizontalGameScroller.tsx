import shuffle from "@/lib/utils/shuffle";
import { GAME_IMAGES } from "@/lib/constants/constants";
import { Image } from "@/lib/constants/types";
import GameCard from "./GameCard";

export default function HorizontalGameScroller() {
  return (
    <div
      id="games"
      className="h-screen mt-[10%] scroll-smooth bg-darkgray pt-5 overflow-hidden"
    >
      <h1 className="text-whity font-bold sm:text-5xl text-4xl sm:w-36 w-auto italic pl-[6%]">
        Games
      </h1>
      <div className="flex mt-10 gap-5 animate-moveLeft sm:w-[200%] w-[450%]">
        {shuffle<Image[]>(GAME_IMAGES.concat(GAME_IMAGES)).map(
          ({ img, alt, available }) => (
            <GameCard
              key={alt}
              img={img}
              alt={alt}
              className={!available ? "grayscale" : ""}
            />
          )
        )}
      </div>
      <div className="flex mt-10 gap-5 pr-10 animate-moveRight sm:w-[200%] w-[450%]">
        {shuffle<Image[]>(GAME_IMAGES.concat(GAME_IMAGES)).map(
          ({ img, alt, available }) => (
            <GameCard
              key={alt}
              img={img}
              alt={alt}
              className={!available ? "grayscale" : ""}
            />
          )
        )}
      </div>
    </div>
  );
}
