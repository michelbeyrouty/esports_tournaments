import { Image, Tournament } from "./types"

import gameCod from "@/assets/images/games/game_cod.png";
import gameFifa from "@/assets/images/games/game_fifa.png";
import gameGrantourismo from "@/assets/images/games/game_grantourismo.png";
import gameMadden from "@/assets/images/games/game_madden.png";
import gameMortalcombat from "@/assets/images/games/game_mortalcombat.png";
import gameNba from "@/assets/images/games/game_nba.png";
import gameRocketleague from "@/assets/images/games/game_rocketleague.png";

export const GAME_IMAGES: Image[] = [
  {
    img: gameCod,
    alt: "Call of Duty",
    available: false,
  },
  {
    img: gameFifa,
    alt: "FIFA",
    available: true,
  },
  {
    img: gameGrantourismo,
    alt: "Grantourismo",
    available: false,
  },
  {
    img: gameMadden,
    alt: "Madden",
    available: false,
  },
  {
    img: gameMortalcombat,
    alt: "Mortal Combat",
    available: false,
  },
  {
    img: gameNba,
    alt: "NBA",
    available: false,
  },
  {
    img: gameRocketleague,
    alt: "Rocket League",
    available: false,
  },
];

export const TOURNAMENTS: Tournament[] = [
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




