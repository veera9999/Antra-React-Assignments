import React from "react";
import { useState } from "react";
import TaskForm from "./TaskForm";

export default function TaskManagerWrapper() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (task) => {
    console.log(tasks.length);
    const newTask = {
      id: task[0] + (tasks.length + 1),
      title: task,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <div className="TaskManagerWrapper">
      <TaskForm addNewTask={addNewTask} />
      <div className="container">
        <table className="task-table">
          <thead>
            <tr>
              <th id="id">ID</th>
              <th id="task">Task</th>
              <th id="delete">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
