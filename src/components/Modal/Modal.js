import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
