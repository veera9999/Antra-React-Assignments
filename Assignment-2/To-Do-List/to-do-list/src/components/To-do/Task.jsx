import React from "react";

export default function Task({ title, deleteHandler }) {
  return (
    <div>
      <span>{title}</span>
      <button onClick={deleteHandler}>delete</button>
    </div>
  );
}
