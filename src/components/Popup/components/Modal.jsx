import { useContext } from "react";
import PopupBody from "./PopupBody";
import { PopupContext } from "../contexts/PopupContext";

const Modal = () => {
  const { onClose, autoclose } = useContext(PopupContext);

  const handleOnClickLayout = () => {
    if (autoclose) {
      onClose();
    }
  }

  const handleOnClickContainer = (event) => {
    if (autoclose) {
      event.stopPropagation()
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOnClickLayout}>
      <div className="modal-container popup" onClick={handleOnClickContainer}>
        <PopupBody />
      </div>
    </div>
  );
}

export default Modal;