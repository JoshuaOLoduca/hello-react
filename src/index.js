import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = (props) => {
  const { reset } = props;

  return (
    <button onClick={ reset }>{ props.text }</button>
  );
};

const InputName = (props) => {
  const { onInput, name } = props;

  return (
    <input onChange={ onInput } placeholder={ props.text } value={ name } />
  );
};

const Application = () => {
  // your code here
  const [name, setName] = useState("");

  const onInput = (e) => setName(e.target.value === '' ? "" : e.target.value);

  const reset = () => setName("");

  return (
    <main>
      <InputName name={name} text={"Type Your Name"} onInput={onInput} />
      <Button text={"Reset"} reset={reset} />
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
