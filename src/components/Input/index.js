import React from "react";
import css from "./Input.modules.css";

function Input() {
  return (
    <>
      <label>
        Name: <input type="text" id="username-input" name="name" />{" "}
      </label>
      <button id="submit">Let's Go!</button>

      <h2 id={css.playerName}></h2>
    </>
  );
}

export default Input;
