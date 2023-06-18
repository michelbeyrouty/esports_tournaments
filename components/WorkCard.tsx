import Image from "next/image";

export default function WorkCard({ title, content, imgSrc }: any) {
  return (
    <div className="flex w-96 h-28">
      <Image
        className=""
        src={imgSrc}
        alt="hiwProfile"
        width={188}
        height={188}
      />
      <div className="pl-5">
        <h1 className="text-xl font-extrabold text-whity text-left">{title}</h1>
        <p className="mt-0.5 text-sm text-whity text-left mr-10">{content}</p>
      </div>
    </div>
  );
}
