"use client";
import Link from "next/link";

export default function Navbar({ children, className }) {
  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex hover:text-red-500">
            Astro
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li>
            <Link href="/about">
              <text className="">About</text>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <text className="">Test</text>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <text className="">Login</text>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
