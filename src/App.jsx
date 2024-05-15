import { useState } from "react";
import Buttons from "./Buttons";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  const [changeColor, setChangeColor] = useState();
  return (
    <div className="bg-gray-900 flex flex-col items-center text-center h-screen justify-center">
      <div className=" bg-gray-800 p-20 rounded-lg ">
        <h1 className="mb-10 text-5xl text-purple-400 font-bold uppercase">
          Counter
        </h1>
        <Counter count={count} setCount={setCount} changeColor={changeColor} />
        <Buttons
          count={count}
          setCount={setCount}
          setChangeColor={setChangeColor}
        />
      </div>
    </div>
  );
}

export default App;
