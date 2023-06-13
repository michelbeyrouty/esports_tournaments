import Profile from "./Profile";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Link from "next/link";

const navigation = [{ name: "Tournaments", href: "/tournaments" }];

export default function Navbar() {
  return (
    <nav>
      <div className="mx-5 md:mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <NavItems />
          <Profile />
        </div>
      </div>
    </nav>
  );
}

function NavItems() {
  return (
    <div className="flex items-center">
      <Logo />
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map((nav) => (
          <Link
            href={nav.href}
            key={nav.name}
            className="text-gray-300 rounded-md px-3 py-2 text-md font-medium"
            aria-current="page"
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="Your Company" width={40} height={40} />
    </Link>
  );
}
