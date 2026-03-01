import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./features/counter/couterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Redux Toolkit Counter</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;