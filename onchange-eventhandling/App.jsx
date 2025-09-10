import { useState } from "react";

const App =() => {
  const [input, setInput] = useState("");

  
  return(
    <div>
      <button onClick={() => alert("Hello")}>Click Me</button>
      {/*<input onChange={(e) => console.log(e.target.value)} type="text"></input>  {/*e = event object , if there is any change then it is stored in e, target = where did it happen, value= gives value of input*/}
      <input onChange={(e) => setInput(e.target.value)}></input>
      <p>you typed: {input}</p>

      
    </div>
  );
}

export default App;