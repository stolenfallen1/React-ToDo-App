import { useState } from "react";

interface Type {
  onAdd: (item: string) => void;
}

const InputForm = ({ onAdd }: Type) => {
  const [todo, setTodo] = useState("");

  const handleAdd = (event: any) => {
    event.preventDefault();
    onAdd(todo);
    setTodo("");
  };

  return (
    <form className="p-5 text-center" onSubmit={handleAdd}>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        className="px-5 py-4 rounded border-2 border-black"
        placeholder="Enter To Do Items here"
        required
      />
      <button className="px-10 py-4 mx-3 my-2 bg-sky-500 rounded font-bold hover:bg-sky-400">
        Add
      </button>
    </form>
  );
};

export default InputForm;
