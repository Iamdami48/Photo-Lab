import React from "react";

export function Header({ event }) {
  return (
    <header>
      <h1>Photo-Lab</h1>
      <button onClick={event}>Add new image</button>
    </header>
  );
}
