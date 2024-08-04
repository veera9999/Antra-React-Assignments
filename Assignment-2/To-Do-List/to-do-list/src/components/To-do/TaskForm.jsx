import React from "react";
import { useState } from "react";

export default function TaskForm({ addNewTask }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addNewTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="form-container">
      <form action="" id="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          id="add-task-bar"
          placeholder="Add Task"
          className="form-item"
        />
        <button id="add-task-btn" className="form-item" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}
