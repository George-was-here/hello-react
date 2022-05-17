import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.reset}>
    Reset
    </button>
  );
};

const Application = (props) => {
  const [name, setName] = useState("")

  const reset = (props) => {
    setName(name => name = "");
  };

  return (
    <>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
      />
      <main>
        {/* your code here -- this entire line including the curly braces can be removed */}
        <Button name={name} setName={setName} reset={reset}/>
        <h1>Hello {name}</h1>
      </main>
    </>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
