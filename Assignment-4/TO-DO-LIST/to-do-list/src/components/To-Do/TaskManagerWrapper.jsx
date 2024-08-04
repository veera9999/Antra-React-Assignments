import React, { Component } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

class TaskManagerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.baseURL = "http://localhost:3000/tasks";
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetch(this.baseURL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ tasks: data });
      })
      .catch((error) => console.error("Error fetching tasks:", error));
  };

  addNewTask = (taskTitle) => {
    const newTask = { title: taskTitle };
    fetch(this.baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to add task");
        return response.json();
      })
      .then((data) => {
        this.setState((prevState) => ({
          tasks: [...prevState.tasks, data],
        }));
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  updateTask = (taskId, updatedTitle) => {
    const updatedTask = { title: updatedTitle };
    fetch(`${this.baseURL}/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to update task");
        return response.json();
      })
      .then((data) => {
        this.setState((prevState) => ({
          tasks: prevState.tasks.map((task) =>
            task.id === taskId ? data : task
          ),
        }));
        console.log("Task updated successfully");
      })
      .catch((error) => console.error("Error updating task:", error));
  };

  deleteTask = (taskId) => {
    fetch(`${this.baseURL}/${taskId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to delete task");
        this.setState((prevState) => ({
          tasks: prevState.tasks.filter((task) => task.id !== taskId),
        }));
        console.log("Task deleted successfully");
      })
      .catch((error) => console.error("Error deleting task:", error));
  };

  render() {
    return (
      <div className="TaskManagerWrapper">
        <TaskForm addNewTask={this.addNewTask} />
        <div className="container">
          <table className="task-table">
            <thead>
              <tr>
                <th id="id">ID</th>
                <th id="task">Task</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>
                    <Task
                      title={task.title}
                      updateHandler={() => {
                        const updatedTitle = prompt(
                          "Update task title:",
                          task.title
                        );
                        if (updatedTitle) {
                          this.updateTask(task.id, updatedTitle);
                        }
                      }}
                      deleteHandler={() => this.deleteTask(task.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskManagerWrapper;

// import React, { useState, useEffect } from "react";
// import TaskForm from "./TaskForm";
// import Task from "./Task";

// export default function TaskManagerWrapper() {
//   const baseURL = "http://localhost:3000/tasks";
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     fetch(baseURL)
//       .then((res) => res.json())
//       .then((data) => {
//         setTasks(data);
//       })
//       .catch((error) => console.error("Error fetching tasks:", error));
//   }, []);

//   const addNewTask = (taskTitle) => {
//     const newTask = { title: taskTitle };
//     fetch(baseURL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newTask),
//     })
//       .then((response) => {
//         if (!response.ok) throw new Error("Failed to add task");
//         return response.json();
//       })
//       .then((data) => setTasks((currentTasks) => [...currentTasks, data]))
//       .catch((error) => console.error("Error adding task:", error));
//   };

//   const updateTask = (taskId, updatedTitle) => {
//     const updatedTask = { title: updatedTitle };
//     fetch(`${baseURL}/${taskId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedTask),
//     })
//       .then((response) => {
//         if (!response.ok) throw new Error("Failed to update task");
//         return response.json();
//       })
//       .then((data) => {
//         setTasks((currentTasks) =>
//           currentTasks.map((task) => (task.id === taskId ? data : task))
//         );
//         console.log("Task updated successfully");
//       })
//       .catch((error) => console.error("Error updating task:", error));
//   };

//   const deleteTask = (taskId) => {
//     fetch(`${baseURL}/${taskId}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (!response.ok) throw new Error("Failed to delete task");
//         setTasks((currentTasks) =>
//           currentTasks.filter((task) => task.id !== taskId)
//         );
//         console.log("Task deleted successfully");
//       })
//       .catch((error) => console.error("Error deleting task:", error));
//   };

//   return (
//     <div className="TaskManagerWrapper">
//       <TaskForm addNewTask={addNewTask} />
//       <div className="container">
//         <table className="task-table">
//           <thead>
//             <tr>
//               <th id="id">ID</th>
//               <th id="task">Task</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => (
//               <tr key={task.id}>
//                 <td>{task.id}</td>
//                 <td>
//                   <Task
//                     title={task.title}
//                     updateHandler={() => {
//                       const updatedTitle = prompt(
//                         "Update task title:",
//                         task.title
//                       );
//                       if (updatedTitle) {
//                         updateTask(task.id, updatedTitle);
//                       }
//                     }}
//                     deleteHandler={() => deleteTask(task.id)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
