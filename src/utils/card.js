import React from "react";
// import { Colors } from "../styles";
import "./styles/card-styles.scss";

export default function card(props) {
  const {author, code, desc, id, url} = props
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <div className="top-row">
          <p className="fs-m gray"> {author} </p>
        </div>
        <div className="middle-row">
          <p className="fs-l bold black">
          {desc}
          </p>
        </div>
        <div className="bottom-row">
          <p className="fs-m gray"> {id} </p>
        </div>
      </div>
    </div>
  );
}
