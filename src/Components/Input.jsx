import React, { useState } from "react";
import { useTodo } from "../Context";

function Input() {
  const [text, setText] = useState("");
  let { addTodo } = useTodo();
  return (
    <div className="flex justify-center">
      <input
        placeholder="Write here..."
        className="text-black w-3/4 p-3 rounded-l-md outline-none"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-red-500 rounded-r-md px-4 py-1 hover:bg-red-600 focus:outline-none font-extrabold text-3xl"
        onClick={() => {
          addTodo(text);
          setText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default Input;
