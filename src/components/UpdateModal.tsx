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
    <form className="modal" onSubmit={handleUpdate}>
      <div className="modal-content">
        <input
          type="text"
          value={updatedValue}
          onChange={(event) => setUpdatedValue(event.target.value)}
        />
        <button>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default UpdateModal;
