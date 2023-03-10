export default function Buttons({ value, setValue }) {
  function add(number) {
    setValue((oldArray) => [...oldArray, number]);
    console.log(value);
  }
  function clear() {
    setValue([]);
  }

  function handleEquals(value) {
    const result = value
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "*":
            return (acc = acc * array[index + 1]);
          case "/":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
    setValue(result);
    console.log(result, "this is the result");
  }

  return (
    <div className="buttons-container">
      <div className="box1">
        <div>
          <button className="button1 button " onClick={() => add(1)}>
            1
          </button>
          <button className="button2 button" onClick={() => add(2)}>
            2
          </button>
          <button
            className="button3 button"
            onClick={() => {
              add(3);
            }}
          >
            3
          </button>
        </div>
        <div>
          <button className="button4 button" onClick={() => add(4)}>
            4
          </button>
          <button className="button5 button" onClick={() => add(5)}>
            5
          </button>
          <button className="button6 button" onClick={() => add(6)}>
            6
          </button>
        </div>
        <div>
          <button className="button7 button" onClick={() => add(7)}>
            7
          </button>
          <button className="button8 button" onClick={() => add(8)}>
            8
          </button>
          <button className="button9 button" onClick={() => add(9)}>
            9
          </button>
        </div>
      </div>
      <div className="box5">
        <div className="operations box2">
          <div>
            <button className="buttonAdd" onClick={() => add("+")}>
              +
            </button>
            <button className="buttonSubtract" onClick={() => add("-")}>
              -
            </button>
          </div>
          <div>
            <button className="buttonMultiply" onClick={() => add("*")}>
              *
            </button>
            <button className="buttonDivide" onClick={() => add("/")}>
              /
            </button>
          </div>
        </div>
        <div className="box3">
          <button className="buttonac" onClick={() => clear()}>
            ac
          </button>
        </div>
        <div className="box4">
          <button className="button0 button" onClick={() => add(0)}>
            0
          </button>
          <button className="buttonEquals" onClick={() => handleEquals(value)}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
