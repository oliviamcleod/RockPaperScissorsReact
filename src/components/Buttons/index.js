import React from "react";

function Button({ playerChooses, id, value }) {
  return (
    <>
      {" "}
      <button onClick={() => playerChooses(id)} id={id}>
        {id}
      </button>
    </>
  );
}

export default Button;
