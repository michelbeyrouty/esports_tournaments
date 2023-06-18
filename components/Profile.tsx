"use client";
import Image from "next/image";
import { useState } from "react";
import defaultProfile from "@/assets/images/default_profile.png";
import Link from "next/link";

export default function Profile({ className }: any) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      href: "/profile",
      name: "Your profile",
    },
    {
      href: "/auth/login",
      name: "log in",
    },
  ];

  return (
    <div className={className}>
      <div className="relative ml-3">
        <div>
          <button
            type="button"
            className="flex max-w-xs items-center rounded-full bg-blacky text-sm"
          >
            <Image
              className="h-10 w-10 rounded-full"
              src={defaultProfile}
              alt="default profile"
              width={50}
              height={50}
              onClick={() => setMenuOpen(!isMenuOpen)}
            />
          </button>
        </div>
        {isMenuOpen ? (
          <div
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-300 py-1 shadow-lg ring-1 ring-blacky ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
          >
            {menuItems.map((menuItem) => (
              <Link
                href={menuItem.href}
                key={menuItem.name}
                className="block px-4 py-2 text-sm text-gray-700"
              >
                {menuItem.name}
              </Link>
            ))}
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
