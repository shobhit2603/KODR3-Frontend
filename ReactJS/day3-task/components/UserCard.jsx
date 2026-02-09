import { useState } from 'react'

const UserCard = () => {
    let [role, setRole] = useState("Developer");

    return (
        <div className="border h-1/2 w-1/2 rounded-2xl px-5 pt-10 pb-30">
            <h1 className="text-2xl text-violet-500">User Card</h1>
            <p className="py-2">Name: Shobhit</p>
            <p className="pb-3">Role: {role}</p>
            <button onClick={() => setRole("Admin")} className="border rounded-lg hover:bg-white hover:text-black  px-3 py-2 cursor-pointer">Promote to Admin</button>
        </div>
    )
}

export default UserCard