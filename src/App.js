import React, { useState, useEffect, useMemo } from "react";
import "./App.scss";
import { Card } from "./utils";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { updateModalData } from "./redux/ducks";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("body");

export default function App() {
  const dispatch = useDispatch();

  const { modalState } = useSelector((state) => state.main);

  const collectionData = "js";
  const [fireData, setFireData] = useState([]);
  const [filteredFire, setFilteredFire] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const oneCollection = collection(db, collectionData);
  let subtitle;

  useEffect(() => {
    getHelp();
  }, []);

  function clearState() {
    dispatch(updateModalData({ state: false }));
  }

  async function getHelp() {
    const data = await getDocs(oneCollection);
    const structed = data.docs.map((d) => ({ ...d.data(), id: d.id }));
    setFireData(structed);
    setFilteredFire(structed);
  }

  const renderCardSet = useMemo(() => {
    return filteredFire.map((e) => {
      return <Card {...e} key={e} />;
    });
  }, [filteredFire]);

  const renderModal = useMemo(() => {
    if (!!!modalState?.state) return null;
    return (
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="close-btn-wrapper">
            <button className="close-btn" onClick={clearState}>
              close
            </button>
          </div>
          <div className="main-content">
            <p>{modalState?.props?.author}</p>
            <div className="code-env">
              <p>{modalState?.props?.code}</p>
            </div>
            <div className="code-desc">
              <p>{modalState?.props?.desc}</p>
            </div>
            <p>{modalState?.props?.anchor}</p>
            <p>{modalState?.props?.url}</p>
            <p>{modalState?.props?.id}</p>
          </div>
        </div>
      </Modal>
    );
  }, [modalState]);

  const filterContent = (e) => {
    setFilteredFire(
      fireData.filter((itm) =>
        itm.anchor.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="App">
      {renderModal}
      <div className="logo">
        <p>h</p>
      </div>
      <div className="search-container">
        <input
          type={"text"}
          placeholder="Search ... "
          className="search"
          onChange={filterContent}
        />
      </div>
      <div className="container">{renderCardSet}</div>
      <div className="pag-container">
        <input type={"button"} value={1} className="number-container" key={1} />
      </div>
    </div>
  );
}
