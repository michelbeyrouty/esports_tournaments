export default function Home() {
  return (
    <main>
      <div className="flex flex-row">
        <div className="basis-full bg-primary">Navbar</div>
      </div>
      <div className="flex flex-row relative w-full h-screen mx-auto">
        <div className="basis-1/2 flex flex-col justify-center bg-tertiary items-center">
          <button className="ml-200">TEST</button>
        </div>
        <div className="basis-1/2 bg-quinary">Picture here</div>
      </div>
      <div className="flex flex-row">
        <div className="basis-full bg-primary">YOW</div>
      </div>
    </main>
  );
}
