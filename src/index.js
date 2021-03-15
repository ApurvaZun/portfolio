import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
    const [state, setState] = useState("CLICK ME");

    return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

ReactDOM.render(<App />, document.getElementById("root"));
