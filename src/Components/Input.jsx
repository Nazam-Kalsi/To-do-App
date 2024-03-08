import React, { useState } from 'react'
import { useTodo } from '../Context'

function Input() {
  const [text, setText] = useState("")
  let {addTodo}=useTodo();
  return (
    <div>
        <input
         className='text-black'
          type="text"
          value={text}
          onChange={(e)=>setText(e.target.value)}          
          />
        <button onClick={()=>{addTodo(text);setText("")}}>➕</button>

    </div>
  )
}

export default Input