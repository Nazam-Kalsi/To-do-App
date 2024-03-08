import React, { useState } from "react";
import { useTodo } from "../Context";

function Todo({ todo }) {
  let { removeTodo, edit, toggleComplete } = useTodo();
  let [editable, setEditable] = useState(false);
  let [val, setVal] = useState(todo.text);
  let fxn=()=>{
    edit(todo.id,val);
    setEditable(false)
  }
  return (
    <>
      <div className=" p-4 flex justify-center">
        <input type="checkbox" onChange={() => toggleComplete(todo.id)} />
        <input
          type="text"
          className={
           `${(todo.completed)
              ? "bg-green-300 text-black line-through"
              : "bg-transparent" } min-w-3.5  w-3/4 p-2 text-xl rounded-md ${(!editable)?'outline-none':""} `
          }
          value={val}
          onChange={(e) => setVal(e.target.value)}
          readOnly={!editable}
        />
        <button
          className=" disabled:cursor-not-allowed"
          onClick={() => {
            if (todo.completed) return;
            if(editable){fxn()}
           else setEditable(!editable);
            // edit(todo.id,{...todo,text:val});
          }}
          disabled={todo.completed}
        >
          {!editable ? "✏️" : "📰"}
        </button>
        <button onClick={() => removeTodo(todo.id)}>❌</button>
      </div>
    </>
  );
}

export default Todo;
