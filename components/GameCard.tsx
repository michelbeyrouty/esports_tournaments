import Image from "next/image";
import Card from "./Card";

export default function GameCard({ img, alt }: any) {
  return (
    <Card>
      <Image src={img} alt={alt}></Image>
    </Card>
  );
}
