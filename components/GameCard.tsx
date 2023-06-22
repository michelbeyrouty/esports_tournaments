import Image from "next/image";

export default function GameCard({ img, alt }: any) {
  return (
    <div className="">
      <Image src={img} alt={alt}></Image>
    </div>
  );
}
