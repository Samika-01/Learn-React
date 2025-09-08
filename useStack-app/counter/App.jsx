import { useState } from "react";

const App = () => {

  const[count, setCount] = useState(0); //count=variable, setCount=function, useState(0)=>count=0 initial value of count is 0
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;