import { useState } from "react"

const App = () => {
    const [show, setShow] = useState(false);

    return(
        <div>
            <p>This is a paragraph.</p>
            <button onClick = {() => setShow(!show)}>{show ? "Read Less": "Read more"}</button>
            {/*show=false, false && something=false*/}
            {show && <p>This is more about the paragraph.</p>} 
        </div>
    );
}

export default App;