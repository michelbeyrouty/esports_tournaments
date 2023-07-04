import logo from "@/assets/images/full_logo.png";
import discordIcon from "@/assets/images/discord_icon.png";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Tournaments", href: "#games" },
  { name: "Games", href: "#tournaments" },
  { name: "About us", href: "/" },
];

export default function Footer() {
  return (
    <div className="w-full bg-blacky flex gap-10 flex-col">
      <div className="mx-[10%] h-0.5 bg-lightgray"></div>
      <div className="flex sm:flex-row flex-col justify-between mx-[10%] gap-10">
        <Logo />
        <VerticalNav />
        <Links />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="Your Company" width={210} height={210} />
    </Link>
  );
}

function VerticalNav() {
  return (
    <div className="flex flex-col justify-between flex-wrap h-auto">
      {navigation.map((nav) => (
        <Link href={nav.href} key={nav.name} className="text-whity">
          {nav.name}
        </Link>
      ))}
    </div>
  );
}

function Links() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex flex-row sm:justify-end justify-start">
          <Link href="https://discord.gg/ZEd78mgM" target="_blank">
            <Image src={discordIcon} alt="Discord" />
          </Link>
        </div>
        <br />
        <div className="text-whity text-sm">
          © 2023 WOLF. All rights reserved
        </div>
      </div>
      <br className="sm:hidden flex" />
    </>
  );
}
