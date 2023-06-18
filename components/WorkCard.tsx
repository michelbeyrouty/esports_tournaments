import Image from "next/image";

export default function WorkCard({ title, content, imgSrc }: any) {
  return (
    <div className="flex flex-col w-96 h-28 sm:flex-row">
      <Image
        src={imgSrc}
        alt="hiwProfile"
        className="sm:flex-grow-0 flex-grow"
        width={188}
        height={188}
      />
      <div className="pl-5">
        <h1 className="sm:text-xl text-4xl font-extrabold text-whity text-left">
          {title}
        </h1>
        <p className="mt-0.5 sm:text-sm text-xl text-whity text-left mr-10">
          {content}
        </p>
      </div>
    </div>
  );
}
