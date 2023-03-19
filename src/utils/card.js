import React from "react";
// import { Colors } from "../styles";
import "./styles/card-styles.scss";

export default function card() {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <div className="top-row">
          <p className="fs-m gray"> Author </p>
        </div>
        <div className="middle-row">
          <p className="fs-l bold black">
            {" "}
            Hello World Hello World Hello World Hello World Hello World{" "}
          </p>
        </div>
        <div className="bottom-row">
          <p className="fs-m gray"> Author </p>
        </div>
      </div>
    </div>
  );
}
