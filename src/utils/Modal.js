import React from "react";
import "./styles/modal-styles.scss";

export default function Modal(props) {
  const { visibility, onClose } = props;

  if (!!!visibility) return null;

  /**
   * STAGE: UNSUCCESS
   * usage:
   * import Modal from "./utils/Modal";
   * <Modal onClose={()=>{setModalVisibility(false)}} visibility={modalVisibility}/>
   * */

  return (
    <div className="modal">
      <div className="modal-overlay"></div>
      <div className="modal-container"></div>
      <button onClick={onClose}>close</button>
    </div>
  );
}
