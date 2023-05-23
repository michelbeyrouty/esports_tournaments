import "styles/globals.css";
import { Inter, Black_Ops_One } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const blackOpsOne = Black_Ops_One({
  subsets: ["cyrillic-ext"],
  weight: "400",
});

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
      <body className={blackOpsOne.className}>{children}</body>
    </html>
  );
}
