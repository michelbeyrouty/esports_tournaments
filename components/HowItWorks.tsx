"use client";
import WorkCard from "./WorkCard";
import hiwProfile from "@/assets/images/hiw_profile.svg";
import hiwController from "@/assets/images/hiw_controller.svg";
import hiwTrophy from "@/assets/images/hiw_trophy.svg";

export default function HowItWorks() {
  return (
    <div className="pt-[10%] flex flex-col sm:items-center items-start">
      <div className="flex sm:flex-row flex-col justify-between w-auto sm:w-screen pl-[6%] gap-12">
        <h1 className="text-whity font-bold sm:text-4xl text-6xl sm:w-36 w-auto">
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
      <div className="sm:pl-[55%] pl-[6%] sm:pt-24 pt-[70%]">
        <WorkCard
          title="Play & win real money"
          content="Elevate your game nights by joining or creating a league, where friends become fierce competitors"
          imgSrc={hiwTrophy}
        />
      </div>
    </div>
  );
}
