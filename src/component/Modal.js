import React, { useState } from "react";
import "./Modal.scss";

const ModalBox = ({ displayOn, handleModal, children }) => {
  const modalClass = displayOn ? " react-show" : "";
  console.log(displayOn, modalClass);
  return (
    <div className={`react-modal${modalClass}`}>
      <div className="react-modal-dialog">
        <button className={"react-modal-close"} onClick={handleModal}>
          x
        </button>
        {children}
      </div>
      <div className="react-modal-overlay" onClick={handleModal}></div>
    </div>
  );
};

const Modal = () => {
  const [displayOn, setDisplayOn] = useState(false);
  const handleModal = (e) => {
    console.log("clicked!", displayOn);
    e.preventDefault();
    setDisplayOn(!displayOn);
  };
  return (
    <div className="container text-center">
      <h1>Modal</h1>
      <button className="btn btn-info" onClick={handleModal}>
        Open Modal
      </button>

      <ModalBox displayOn={displayOn} handleModal={handleModal}>
        <h2>Modal title</h2>
        <p>Modal content</p>
      </ModalBox>
    </div>
  );
};
export default Modal;
