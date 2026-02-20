import { useState } from "react";

const CounterCard = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="border h-1/2 w-1/2 rounded-2xl px-5 pt-10 pb-30">
      <h1 className="text-2xl text-violet-500">Counter Card</h1>
      <h2 className="text-3xl py-5">{count}</h2>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-400 hover:bg-green-600 rounded-lg w-10 text-black cursor-pointer"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-400 hover:bg-red-600 rounded-lg w-10 text-black cursor-pointer"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="border rounded-lg hover:bg-white hover:text-black px-3 py-2 cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterCard;
