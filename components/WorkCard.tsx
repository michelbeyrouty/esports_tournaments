import Image from "next/image";

export default function WorkCard({ title, content, imgSrc }: any) {
  return (
    <div className="flex flex-col w-96 h-28 sm:flex-row">
      <Image
        src={imgSrc}
        alt="hiwProfile"
        className="sm:flex-grow-0 flex-grow"
      />
      <div className="sm:pl-5 pl-0">
        <h1 className="sm:text-xl text-2xl font-extrabold text-whity text-left">
          {title}
        </h1>
        <p className="mt-0.5 sm:text-sm text-l text-whity text-left mr-10 pt-[5%] sm:pt-0">
          {content}
        </p>
      </div>
    </div>
  );
}
