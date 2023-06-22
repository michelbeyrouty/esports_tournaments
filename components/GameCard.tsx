import Image from "next/image";
import Card from "./Card";

export default function GameCard({ img, alt }: any) {
  return (
    <Card className="">
      <Image src={img} alt={alt}></Image>
    </Card>
  );
}
