import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex items-center justify-center text-center">
      <div>
        <p className="text-xl">Click to Increase the Counter - {count}</p>
        <button onClick={() => setCount(count + 1)} className="border rounded-lg px-5 py-2 mt-5 hover:bg-white hover:text-black hover:border-black transition-all duration-300 ease-in-out cursor-pointer">Click Me</button>
      </div>
    </main>
  )
}
