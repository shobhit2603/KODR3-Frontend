import { useState } from "react";

const VisibilityCard = () => {
  let [show, setShow] = useState(true);

  return (
    <div className="border h-1/2 w-1/2 rounded-2xl px-5 pt-10 pb-30">
      <h1 className="text-2xl text-violet-500">Visibility Card</h1>

      <button
        onClick={() => setShow(!show)}
        className="border rounded-lg hover:bg-white hover:text-black px-3 py-2 my-3 cursor-pointer"
      >
        {show ? "Hide Message" : "Show Message"}
      </button>

      {show && (
        <p className="border w-fit px-5 py-3 rounded-2xl text-cyan-500 mt-1">
          🚀 This message is controlled by useState boolean value.
        </p>
      )}
    </div>
  );
};

export default VisibilityCard;
