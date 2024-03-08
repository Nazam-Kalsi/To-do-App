import { Input, Todo } from "./Components";
import { TodoContextProvider, useTodo } from "./Context";
import "./App.css";
import { useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);
  todos.forEach((i)=>{console.log(i.text);})

  let addTodo = (text) => {
    setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
  };

  let removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  let edit = (id, t) => {
    setTodos(prev => prev.map(item => item.id == id ? { ...item, text: t } : item));
  };

  let toggleComplete = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : { ...item }
      )
    );
  };

  return (
    <TodoContextProvider
      value={{ todos, addTodo, removeTodo, edit, toggleComplete }}
    >
      <Input />
      {
      todos.map((item) => {
        return <Todo key={item.id} todo={item} />;
      }
      )}
    </TodoContextProvider>
  );
}

export default App;
