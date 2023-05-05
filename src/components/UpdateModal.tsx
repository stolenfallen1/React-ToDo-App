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
    <>
      <div className="modal-overlay fixed top-0 left-0 bottom-0 right-0 bg-black opacity-50 z-50 pointer-events-none"></div>
      <form
        className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-auto"
        onSubmit={handleUpdate}
      >
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
    </>
  );
};

export default UpdateModal;
