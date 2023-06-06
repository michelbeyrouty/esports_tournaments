import "styles/globals.css";
import clsx from "clsx";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Esports Tournament",
  description: "Esports Tournament platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("rainbow-gaming px-20", inter.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
