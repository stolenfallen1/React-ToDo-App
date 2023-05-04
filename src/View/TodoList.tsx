import { useState } from "react";
import InputForm from "../components/InputForm";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import UpdateModal from "../components/UpdateModal";

const TodoList = () => {
  const [items, setItems] = useState<string[]>([]);
  const [editItem, setEditItem] = useState<{
    index: number;
    value: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItem = (item: any) => {
    setItems([...items, item]);
  };

  const handleEditItem = (index: number, value: string) => {
    setEditItem({ index, value });
    setIsModalOpen(true);
  };

  const handleSaveItem = (newValue: string) => {
    if (editItem) {
      const newItems = [...items];
      newItems[editItem.index] = newValue;
      setItems(newItems);
      setEditItem(null);
      setIsModalOpen(false);
    }
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
              <button
                className="mx-1 bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleEditItem(index, item)}
              >
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
        {isModalOpen && (
          <UpdateModal
            initialValue={editItem?.value || ""}
            onUpdate={handleSaveItem}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default TodoList;
