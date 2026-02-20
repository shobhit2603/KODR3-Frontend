import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  const incCount = () => {
    setCount(count + 1);
  }

  let [user, setUser] = useState({
    name: "Shobhit",
    role: "Developer"
  });
  console.log(user);
  const changeRole = () => {
    // user.role = "Designer";
    // setUser(user);
    setUser({
      ...user,
      role: "Designer"
    })
  }

  return (
    <main className="min-h-screen flex flex-col gap-5 items-center justify-center">
      <p className="text-3xl">{count}</p>
      <button onClick={incCount} className="text-xl border p-3 rounded-xl">
        Click Here!
      </button>
      <p className="text-3xl">Name: {user.name}</p>
      <p className="text-3xl">Role: {user.role}</p>
      <button onClick={changeRole} className="text-xl border p-3 rounded-xl">Change Role</button>
    </main>
  )
}
