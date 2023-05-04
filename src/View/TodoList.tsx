import { useState } from "react";
import InputForm from "../components/InputForm";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const TodoList = () => {
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = (item: any) => {
    setItems([...items, item]);
  };

  const deleteToDo = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <InputForm onAdd={handleAddItem} />
        <ul className="mx-5">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center py-3 px-3 my-2 text-lg max-w-5xl rounded cursor-pointer border-2 border-violet-300 hover:border-violet-700"
            >
              <span className="flex-grow">{item}</span>
              <button className="mx-1 bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                <AiFillEdit />
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => deleteToDo(index)}
              >
                <AiFillDelete />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
