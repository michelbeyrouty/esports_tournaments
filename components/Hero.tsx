import EarthCanvas from "./3D/Earth";

export default function Hero() {
  return (
    <section className={`h-screen grid grid-cols-2 place-items-center`}>
      <Introduction />
      <EarthCanvas />
    </section>
  );
}

function Introduction() {
  return (
    <div className="px-6 top-2/3">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-greeny sm:text-6xl">
          Unleash Your Gaming Greatness
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Ignite your competitive fire in the electrifying realm of esports
          tournaments, where heroes are born, legends are forged, and glory
          awaits your command. Join the global gaming community and unleash your
          untapped potential as you rise to the top, leaving an indelible mark
          on the world of esports.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-greeny px-3.5 py-2.5 text-sm font-semibold text-gray-300 shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}
