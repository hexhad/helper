import "./App.scss";
import { Card } from "./utils";
import { useEffect } from "react";

export default function App() {
  // function handleOrientation(event) {
  //   const absolute = event.absolute;
  //   const alpha = event.alpha;
  //   const beta = event.beta;
  //   const gamma = event.gamma;

  //   // Do stuff with the new orientation data
  //   console.log("here");
  //   console.log(beta);
  // }
  // useEffect(() => {
  //   const unsubs = window.addEventListener("deviceorientation", handleOrientation, true);
  // }, []);

  return (
    <div className="App">
      <div className="logo">
    <p>h</p>
      </div>
      <div className="search-container">
        <input type={"text"} placeholder="Search ... " className="search" />
      </div>
      <div className="container">
        {[...Array(9).keys()].map((e) => {
          return <Card {...e} key={e} />;
        })}
      </div>
      <div className="pag-container">
        {[...Array(3).keys()].map((e) => {
          return (
            <div className="number-container">
              <p>{e}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
