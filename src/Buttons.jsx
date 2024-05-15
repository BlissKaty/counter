import { useState } from "react";

export default function Buttons({ setCount, count, setChangeColor }) {
  return (
    <div className="text-white flex flex-col items-center text-2xl gap-y-4 ">
      <div className="mb-7">
        <button
          className={`bg-zinc-600 w-14 h-14 rounded-full `}
          disabled={count > 4}
          onClick={() => {
            setCount((prev) => prev + 1);
            setChangeColor(true);
          }}
        >
          +
        </button>
        <button
          className="bg-zinc-600 w-14 h-14  ml-10 rounded-full"
          disabled={count < 1}
          onClick={() => {
            setCount((prev) => prev - 1);
            setChangeColor(false);
          }}
        >
          -
        </button>
      </div>

      <button
        className="bg-zinc-600 pl-5 pr-5 pt-1 pb-1 rounded-md "
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
