import { useState } from "react";
import TodoList from "./View/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-0 p-0 box-border">
      <h1 className="text-center text-4xl font-bold tracking-tighter p-5">
        TO DO LIST
      </h1>
      <TodoList />
    </div>
  );
}

export default App;
