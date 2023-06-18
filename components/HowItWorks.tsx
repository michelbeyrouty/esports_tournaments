"use client";
import WorkCard from "./WorkCard";
import hiwProfile from "@/assets/images/hiw_profile.svg";
import hiwController from "@/assets/images/hiw_controller.svg";
import hiwTrophy from "@/assets/images/hiw_trophy.svg";

export default function HowItWorks() {
  return (
    <div className="pt-48 flex flex-col items-center">
      <div className="flex flex-row justify-between w-screen pl-[6%]">
        <h1 className="text-whity font-bold text-4xl w-36">How It Works</h1>
        <WorkCard
          title="Create Profile"
          content="Elevate your game nights by joining or creating a league, where friends become fierce competitors"
          imgSrc={hiwProfile}
        />
        <h1 className="text-whity invisible">How It</h1>
      </div>
      <div className="pl-[35%] pt-24">
        <WorkCard
          title="Enroll in a tournament"
          content="Elevate your game nights by joining or creating a league, where friends become fierce competitors"
          imgSrc={hiwController}
        />
      </div>
      <div className="pl-[55%] pt-24">
        <WorkCard
          title="Play & win real money"
          content="Elevate your game nights by joining or creating a league, where friends become fierce competitors"
          imgSrc={hiwTrophy}
        />
      </div>
    </div>
  );
}
