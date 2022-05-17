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
  const [name, setName] = useState("");

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
        <Button name={name} setName={setName} reset={reset}/>
        {name ? <h1>Hello {name}</h1> : null}
      </main>
    </>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
