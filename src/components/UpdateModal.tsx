import { useState } from "react";

interface Props {
  initialValue: string;
  onUpdate: (item: string) => void;
  onClose: () => void;
}

const UpdateModal = ({ initialValue, onUpdate, onClose }: Props) => {
  const [updatedValue, setUpdatedValue] = useState(initialValue);

  const handleUpdate = () => {
    onUpdate(updatedValue);
    onClose();
  };

  return (
    <form className="modal relative" onSubmit={handleUpdate}>
      <div className="modal-content z-10">
        <input
          type="text"
          value={updatedValue}
          onChange={(event) => setUpdatedValue(event.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
        />
        <div className="flex justify-end">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
            type="submit"
          >
            Update
          </button>
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateModal;
