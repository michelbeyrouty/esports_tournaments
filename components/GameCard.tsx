import Image from "next/image";
import clsx from "clsx";
import Card from "./Card";

export default function GameCard({ img, alt, className }: any) {
  return (
    <Card>
      <Image className={clsx(className)} src={img} alt={alt}></Image>
    </Card>
  );
}
