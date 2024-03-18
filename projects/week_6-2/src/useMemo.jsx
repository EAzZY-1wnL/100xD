import { useMemo, useState } from "react";
import { useEffect } from "react";
// use memo is used for heavy computation type operations 

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
//   const [finalValue, setFinalValue] = useState(0);

 let count = useMemo(() => {
    let fcount = 0;
    for (let i = 0; i < inputValue; i++)
    {
      fcount = fcount + i; 
      console.log(fcount);
    }
     return fcount;
    // setFinalValue(count);
  }, [inputValue])

  return <div>
    <input onChange={function (e) {
      setInputValue(e.target.value);
    }} placeholder={"find sum from 1 to n"} />
    <br />
    sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>counter ({counter})</button>
  </div>
}



export default App;