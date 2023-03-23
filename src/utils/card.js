import React from "react";
// import { Colors } from "../styles";
import "./styles/card-styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateModalData } from "../redux/ducks";

export default function Card(props) {
  const { author, code, desc, id, url } = props;

  const dispatch = useDispatch();

  function updateState() {
    dispatch(updateModalData({ state: true, props }));
  }
  return (
    <button className="card-container" onClick={updateState}>
      <div className="card-wrapper">
        <div className="top-row">
          <p className="fs-m gray"> {author} </p>
        </div>
        <div className="middle-row">
          <p className="fs-l bold black">{desc}</p>
        </div>
        <div className="bottom-row">
          <p className="fs-m gray"> {id} </p>
        </div>
      </div>
    </button>
  );
}
