function Modal(props) {
  return (
    <div className="Modal">
      <p>Are you sure?</p>
      <div>
        <button className="btn btn-secondary" onClick={props.closeFunction}>
          cancel
        </button>
        <button className="btn btn-primary"> confirm</button>
      </div>
    </div>
  );
}

export default Modal;
