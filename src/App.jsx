import React from "react";
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"


function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-center text-4xl font-bold">
        Learn about Redux Toolkit
      </h1>

      <AddTodo />
      <Todos />
    </div>
    </>
  );
}

export default App;
