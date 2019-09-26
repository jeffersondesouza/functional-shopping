import React from "react";

const Modal = props => {
  const { modalId, children } = props;

  /* the id is used to trigger the modal open */
  return (
    <>
      <div id={modalId || "modal1"} className="modal">
        <div className="modal-content">{children}</div>
      </div>
    </>
  );
};

export default Modal;
