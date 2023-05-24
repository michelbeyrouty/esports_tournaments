"use client";
import { useState } from "react";

export default function Profile() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      href: "/login",
      name: "Your profile",
    },
    {
      href: "/login",
      name: "Settings",
    },
    {
      href: "/login",
      name: "log in",
    },
  ];

  return (
    <div>
      <div className="relative ml-3">
        <div>
          <button
            type="button"
            className="flex max-w-xs items-center rounded-full bg-blacky text-sm"
          >
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              onClick={() => setMenuOpen(!isMenuOpen)}
            />
          </button>
        </div>
        {isMenuOpen ? (
          <div
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
          >
            {menuItems.map((menuItem) => (
              <a
                href={menuItem.href}
                key={menuItem.name}
                className="block px-4 py-2 text-sm text-gray-700"
              >
                {menuItem.name}
              </a>
            ))}
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
