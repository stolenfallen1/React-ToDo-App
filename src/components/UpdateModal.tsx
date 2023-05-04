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
    <div className="modal">
      <div className="modal-content">
        <input
          type="text"
          value={updatedValue}
          onChange={(event) => setUpdatedValue(event.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default UpdateModal;
