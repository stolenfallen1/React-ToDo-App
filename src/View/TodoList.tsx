import { useState } from "react";
import InputForm from "../components/InputForm";

const TodoList = () => {
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = (item: any) => {
    setItems([...items, item]);
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <InputForm onAdd={handleAddItem} />
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className="py-3 px-3 my-2 text-lg bg-teal-800 text-white max-w-lg rounded cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
