import Profile from "./profile";
const navigation = [{ name: "Tournaments", href: "/tournaments" }];

export default function Navbar() {
  return (
    <nav className="bg-blacky">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between mx-4">
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
          <a
            href={nav.href}
            key={nav.name}
            className="text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            {nav.name}
          </a>
        ))}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <a href="/">
      <img
        className="h-8 w-8"
        src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=500"
        alt="Your Company"
      />
    </a>
  );
}
