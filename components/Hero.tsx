import Button from "./Button";

export default function Hero() {
  return (
    <div
      className={`bg-black bg-hero-pattern h-screen bg-right-top bg-no-repeat bg-85%`}
    ></div>
  );
}

// function Introduction() {
//   return (
//     <div className="pl-24 mb-60 hidden md:block">
//       <div>
//         <h1 className="text-6xl font-bold tracking-tight text-greeny">
//           World Online League Factions.
//         </h1>
//         <p className="mt-6 text-lg leading-8 text-gray-300">
//           Join the global gaming community and unleash your untapped potential
//           as you rise to the top, leaving an indelible mark on the world of
//           esports.
//         </p>
//         <Button className="mt-10 w-2/6">
//           <a
//             href="#"
//             className="rounded-md py-1.5 text-sm font-semibold text-gray-300"
//           >
//             Get started
//           </a>
//         </Button>
//       </div>
//     </div>
//   );
// }
