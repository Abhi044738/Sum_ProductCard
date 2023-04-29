import "./styles.css";
import { SumCard } from "./SumCard";
import { AirConditioner } from "./AirConditioner";
import { product } from "./product";

export default function App() {
  return (
    <div className="App">
      {/* <SumCard/> */}
      <SumCard firstNumber={5} secondNumber={9} />
      <AirConditioner product={product} />
    </div>
  );
}
