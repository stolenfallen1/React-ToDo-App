import { useState } from "react";
import InputForm from "../components/InputForm";

const TodoList = () => {
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = (item: any) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <InputForm onAdd={handleAddItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
