import Carousel from "./Carousel";

function App() {
  return (
    <div className="h-screen grid grid-rows-3 grid-flow-col gap-4">
      <div className="w-full"></div>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div></div>
          <div className="h-full">
            <Carousel/>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-full"></div>
    </div>
  );
}

export default App;
