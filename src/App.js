import "./App.scss";
import { Card } from "./utils";

export default function App() {
  return (
    <div className="App">
      {[...Array(3).keys()].map((e) => {
        return <Card {...e}/>;
      })}
    </div>
  );
}
