"use client";
import React, { useState } from "react";

export default function Page() {
  let [arr, setArr] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  function prevent(e) {
    e.preventDefault();
    let newArr = [...arr];
    newArr.push(data);
    setArr(newArr);
    console.log(newArr);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl">Enter your Details</h1>
      <form className="flex flex-col gap-4" onSubmit={(e) => prevent(e)}>
        <input
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
          value={data.name}
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 rounded p-2"
        />
        <h1 className="text-4xl">
          Name - <span className="text-violet-500">{data.name}</span>
        </h1>
        <input
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          value={data.email}
          type="text"
          placeholder="Enter your email"
          className="border border-gray-300 rounded p-2"
        />
        <h1 className="text-4xl">
          Email - <span className="text-violet-500">{data.email}</span>
        </h1>
        <input
          onChange={(e) => {
            setData({ ...data, mobile: e.target.value });
          }}
          value={data.mobile}
          type="text"
          placeholder="Enter your mobile"
          className="border border-gray-300 rounded p-2"
        />
        <h1 className="text-4xl">
          Mobile - <span className="text-violet-500">{data.mobile}</span>
        </h1>
        <button
          type="submit"
          className="border border-gray-300 rounded p-2 bg-violet-500 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
