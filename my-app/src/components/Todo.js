import { useState } from "react";k

import Modal from "./Modal";
import BackDrop from "./BackDrop";

function Todos(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandle() {
    setModalIsOpen(true);
  }

  function cancelButton() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <h1> {props.text}</h1>
      <div className="card">
        <p>Hello!</p>
        <div className="btn-section">
          <button className="btn btn-primary" onClick={deleteHandle}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen ? <Modal closeFunction={cancelButton} /> : null}
      {modalIsOpen && <BackDrop closeFunction={cancelButton} />}
    </div>
  );
}

export default Todos;
