import { useState } from 'react'

const NameCard = () => {
    let [name, setName] = useState("Shobhit");

    return (
        <div className="border h-1/2 w-1/2 rounded-2xl px-5 pt-10 pb-30">
            <h1 className="text-2xl text-violet-500">Name Card</h1>
            <h2 className="text-3xl py-5">{name}</h2>
            <button onClick={() => setName("Developer 🚀")} className="border rounded-lg hover:bg-white hover:text-black px-3 py-2 cursor-pointer">Change Name</button>
        </div>
    )
}

export default NameCard