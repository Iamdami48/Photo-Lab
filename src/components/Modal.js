import React from "react";
export function Modal({ children, closeModalEvent }) {
  return (
    <div className="modal-container">
      <div className="modal">
        {children}
        <p className="close-modal" onClick={closeModalEvent}>
          Close Modal
        </p>
      </div>
    </div>
  );
}
