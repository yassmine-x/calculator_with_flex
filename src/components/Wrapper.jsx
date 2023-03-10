import Display from "./Display";
import { useState } from "react";
import Buttons from "./Buttons";

export default function Wrapper() {
  const [value, setValue] = useState([]);

  //value is the value of each button press displayed on the screen, resulting in a expression

  return (
    <div className="container">
      <Display value={value} />
      <Buttons value={value} setValue={setValue} />
    </div>
  );
}
