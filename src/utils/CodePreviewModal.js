import React, { useState, useEffect, useMemo } from "react";
import "./styles/code-preview-modal.scss";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import { js_beautify } from "js-beautify";
import { updateModalData } from "../redux/ducks";
import { useSelector, useDispatch } from "react-redux";
export default function CodePreviewModal(props) {
  const {} = props;
  const dispatch = useDispatch();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "70vw",
    },
  };

  Modal.setAppElement("body");

  const [copyState, setCopyState] = useState("copy");

  const { modalState } = useSelector((state) => state.main);

  function clearState() {
    dispatch(updateModalData({ state: false }));
  }

  const renderModal = useMemo(() => {
    if (!!!modalState?.state) return null;
    return (
      <Modal
        isOpen={!!modalState?.state}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="close-btn-wrapper">
            <button className="close-btn" onClick={clearState}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div className="main-content">
            <p>{modalState?.props?.author}</p>
            {/* <div className="code-env">
              <p>{modalState?.props?.code}</p>
            </div> */}
            <div>
              <CodeBlock
                text={js_beautify(modalState?.props?.code)}
                language={"javascript"}
                showLineNumbers
                theme={atomOneDark}
              />
            </div>
            <div className="code-desc">
              <p>{modalState?.props?.desc}</p>
            </div>
            <p>{modalState?.props?.anchor}</p>
            <p>{modalState?.props?.url}</p>
            <div className="code-last-row">
              <p>{modalState?.props?.id}</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    js_beautify(modalState?.props?.code)
                  );
                  setCopyState("copied");
                  setTimeout(() => {
                    setCopyState("copy");
                  }, 1000);
                }}
              >
                {copyState}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }, [modalState, copyState]);

  return <div>{renderModal}</div>;
}
