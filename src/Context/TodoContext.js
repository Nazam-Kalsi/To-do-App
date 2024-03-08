import React, { createContext, useContext } from "react";

let TodoContext = createContext({
  todos: [
    {
      id: 1,
      text: "Default Todo",
      completed: false,
    },
  ],
  addTodo: (text) => {},
  removeTodo: (id) => {},
  edit: (id, text) => {},
  toggleComplete: (id) => {},
});

export let useTodo = () => {
  let data = useContext(TodoContext);
  return data;
};

export let TodoContextProvider = TodoContext.Provider;
