import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/slice/countSlice";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <main className='min-h-screen flex flex-col gap-5 items-center justify-center'>
      <h1 className='text-7xl text-center'>{count}</h1>
      <div className="flex gap-2">
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white text-xl cursor-pointer py-2 px-4 rounded'
          onClick={() => dispatch(increment())}
        >
          Increase
        </button>
        <button
          className='bg-red-500 hover:bg-red-700 text-white text-xl cursor-pointer py-2 px-4 rounded'
          onClick={() => dispatch(decrement())}
        >
          Decrease
        </button>
        <button
          className='bg-green-500 hover:bg-green-700 text-white text-xl cursor-pointer py-2 px-4 rounded'
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increase by 10
        </button>

      </div>
    </main>
  )
}

export default App