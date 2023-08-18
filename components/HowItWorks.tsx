"use client";
import WorkCard from "./WorkCard";
import hiwProfile from "@/assets/images/hiw_profile.png";
import hiwController from "@/assets/images/hiw_controller.png";
import hiwTrophy from "@/assets/images/hiw_trophy.png";

export default function HowItWorks() {
  return (
    <div className="sm:pt-[10%] pt-0 flex flex-col sm:items-center items-start sm:bg-pattern-dark-full sm:bg-no-repeat sm:bg-contain">
      <div className="flex sm:flex-row flex-col justify-between w-auto sm:w-screen pl-[6%] gap-12">
        <h1 className="text-whity font-bold sm:text-5xl text-4xl sm:w-48 w-auto">
          How It Works
        </h1>
        <WorkCard
          title="Create Profile"
          content="Elevate your game nights by joining or creating a league, where friends become fierce competitors"
          imgSrc={hiwProfile}
        />
        <h1 className="text-whity invisible">How It</h1>
      </div>
      <div className="sm:pl-[35%] pl-[6%] sm:pt-24 pt-[50%]">
        <WorkCard
          title="Enroll in a tournament"
          content="Elevate your game nights by joining or creating a league, where friends become fierce competitors"
          imgSrc={hiwController}
        />
      </div>
      <div className="sm:pl-[55%] pl-[6%] sm:pt-24 pt-[80%]">
        <WorkCard
          title="Play & win real money"
          content="Elevate your game nights by joining or creating a league, where friends become fierce competitors"
          imgSrc={hiwTrophy}
        />
      </div>
    </div>
  );
}
