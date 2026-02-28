import { useCallback, useState } from "react"
import Child1 from "./components/Child1"
import Child2 from "./components/Child2"

const App = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(true);

  const handleSubmit = useCallback(() => {
    console.log("Form submitted")
  }, []);

  return (
    <main className="p-4 bg-neutral-950 min-h-screen text-neutral-100">

      <Child1 content="This is the content for Child1 component" />
      <Child2 content="This is the content for Child2 component" />

      <button
        onClick={() => setCount(count + 1)}
        className="border p-2 rounded-lg cursor-pointer"
      >Increase Count</button>

      <p>Count: {count}</p>

      <button onClick={() => setTheme(!theme)} className="border p-2 rounded-lg cursor-pointer mt-2">Toggle Theme</button>

      <p>Theme: {theme ? "Dark" : "Light"}</p>

      <button onClick={handleSubmit} className="border p-2 rounded-lg cursor-pointer mt-2">Submit Form</button>

    </main>
  )
}

export default App