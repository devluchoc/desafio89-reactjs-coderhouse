import React, { useState, useRef } from "react";
import "./style.css";

const Form = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    nombre: ""
  });

  const [error, setError] = useState(false);

  const { email, nombre } = inputValues;

  const emailInput = useRef(null);
  const nameInput = useRef(null);

  const handleInput = e => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if ([email, nombre].includes("")) {
      setError(true);
      email.trim() === ""
        ? (emailInput.current.style.border = "1px solid red")
        : (emailInput.current.style.border = "");
      name.trim() === ""
        ? (nameInput.current.style.border = "1px solid red")
        : (nameInput.current.style.border = "");
      return;
    }
    emailInput.current.style.border = "";
    nameInput.current.style.border = "";
    setError(false);
  };

  const handleBlur = () => {
    if (email.trim() === "" || nombre.trim() === "") {
      setError(true);
      email.trim() === ""
        ? (emailInput.current.style.border = "1px solid red")
        : (emailInput.current.style.border = "");
      name.trim() === ""
        ? (nameInput.current.style.border = "1px solid red")
        : (nameInput.current.style.border = "");
      return;
    }
    emailInput.current.style.border = "";
    nameInput.current.style.border = "";
    setError(false);
  };

  return (
    <form className="container" onSubmit={handleSubmit} onBlur={handleBlur}>
      {error ? (
        <h1 style={{ background: "red", color: "white" }}>Hay un error</h1>
      ) : null}
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
          ref={emailInput}
          onInput={handleInput}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          name="nombre"
          ref={nameInput}
          onInput={handleInput}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
