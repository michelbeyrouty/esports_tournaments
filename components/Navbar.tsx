"use client";
import { useState } from "react";
import Profile from "./Profile";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import menu from "@/assets/images/menu.svg";
import closedMenu from "@/assets/images/closed_menu.svg";
import Link from "next/link";

const navigation = [
  { name: "Games", href: "#games" },
  { name: "Tournaments", href: "#tournaments" },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 bg-blacky z-10">
      <div className="w-full flex justify-between items-center mx-[6%]">
        <Logo />
        <BigScreenNav />
        <SmallScreenNav toggle={toggle} setToggle={setToggle} />
      </div>
    </nav>
  );
}

function SmallScreenNav({ toggle, setToggle }: any) {
  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <Image
        src={toggle ? closedMenu : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle(!toggle)}
      />
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } justify-end absolute top-16 left-0 bg-blacky bg-opacity-90 w-screen h-screen bg-pattern-dark bg-no-repeat bg-bottom`}
      >
        <NavItems2 />
      </div>
    </div>
  );
}

function BigScreenNav() {
  return (
    <>
      <div className="sm:justify-end sm:flex-grow sm:flex hidden">
        <NavItems />
      </div>
      <Profile className="hidden sm:flex" />
    </>
  );
}

function NavItems2() {
  return (
    <div className="flex flex-col pt-10">
      {navigation.map((nav) => (
        <Link
          href={nav.href}
          key={nav.name}
          className="text-whity text-5xl font-bold italic pt-5 pr-4 text-right"
        >
          {nav.name}
        </Link>
      ))}
    </div>
  );
}

function NavItems() {
  return (
    <div className="mr-5 space-x-4">
      {navigation.map((nav) => (
        <Link
          href={nav.href}
          key={nav.name}
          className="text-whity rounded-md px-3 py-2 text-md font-medium"
        >
          {nav.name}
        </Link>
      ))}
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="Your Company" width={80} height={80} />
    </Link>
  );
}
