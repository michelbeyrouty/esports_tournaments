import "styles/globals.css";
import clsx from "clsx";
import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "WOLF",
  description: "World Online League Factions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("bg-blacky", inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
