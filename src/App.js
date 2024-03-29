import React, { useState, useEffect, useMemo } from "react";
import "./App.scss";
import { Card, Modal } from "./utils";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { updateModalData } from "./redux/ducks";

export default function App() {
  const dispatch = useDispatch();

  const collectionData = "js";
  const [fireData, setFireData] = useState([]);
  const [filteredFire, setFilteredFire] = useState([]);

  const oneCollection = collection(db, collectionData);

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
      return <Card {...e} key={e.id} />;
    });
  }, [filteredFire]);

  const filterContent = (e) => {
    setFilteredFire(
      fireData.filter((itm) =>
        itm.anchor.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <Modal />
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
        <button className="number-container" onClick={clearState}>
          1
        </button>
      </div>
    </div>
  );
}
