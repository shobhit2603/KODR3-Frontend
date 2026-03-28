import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/slice/countSlice";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(10);

  return (
    <main className='min-h-screen bg-neutral-950 flex flex-col items-center justify-center font-sans tracking-tight text-neutral-200'>
      <div className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-8 w-full max-w-sm">
        
        {/* Header / Counter Display */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-neutral-400 text-sm uppercase tracking-widest font-semibold">Counter</span>
          <h1 className='text-8xl font-light text-white tracking-tighter'>{count}</h1>
        </div>

        {/* Basic Controls */}
        <div className="flex gap-4 w-full">
          <button
            className='flex-1 bg-neutral-800 hover:bg-neutral-700 hover:text-white transition-all duration-200 text-neutral-300 py-3 rounded-xl shadow-inner font-medium active:scale-95'
            onClick={() => dispatch(decrement())}
          >
            Decrease
          </button>
          <button
            className='flex-1 bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 text-white py-3 rounded-xl shadow-lg ring-1 ring-indigo-500/50 font-medium active:scale-95'
            onClick={() => dispatch(increment())}
          >
            Increase
          </button>
        </div>

        <div className="w-full h-px bg-neutral-800" />

        {/* Custom Increment Controls */}
        <div className="flex flex-col gap-3 w-full">
          <label className="text-sm text-neutral-400 pl-1">Custom Increment</label>
          <div className="flex gap-2">
            <input
              type="number"
              className="w-24 bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-center text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-neutral-700"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <button
              className='flex-1 bg-neutral-800 hover:bg-neutral-700 transition-all duration-200 text-white py-3 rounded-xl shadow-inner font-medium active:scale-95'
              onClick={() => dispatch(incrementByAmount(amount))}
            >
              Add Amount
            </button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default App;