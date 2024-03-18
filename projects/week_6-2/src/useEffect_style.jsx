// so this is pretty ugly way to do things like and we can t use global variables in react since even if they change they dont 
// rerender the component so what we can do is probably useMemo to solve this 
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [finalValue, setFinalValue] = useState(0);

  useEffect(() => {
    let count = 0;
    for (let i = 0; i < inputValue; i++)
    {
      count = count + i; 
      console.log(count);
    }

    setFinalValue(count);
  }, [inputValue])

  return <div>
    <input onChange={function (e) {
      setInputValue(e.target.value);
    }} placeholder={"find sum from 1 to n"} />
    <br />
    sum from 1 to {inputValue} is {finalValue}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>counter ({counter})</button>
  </div>
}



export default App;