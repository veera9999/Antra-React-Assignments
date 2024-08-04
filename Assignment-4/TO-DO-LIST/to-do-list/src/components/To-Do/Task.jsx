import React, { Component } from "react";

class Task extends Component {
  render() {
    const { title, deleteHandler, updateHandler } = this.props;

    return (
      <div className="Task-Wrapper">
        <span>{title}</span>
        <div className="Task-Btns-Wrapper">
          <button className="task-update-btn" onClick={updateHandler}>
            Update
          </button>
          <button className="task-del-btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Task;

// import React from "react";

// export default function Task({ title, deleteHandler, updateHandler }) {
//   return (
//     <div className="Task-Wrapper">
//       <span>{title}</span>
//       <div className="Task-Btns-Wrapper">
//         <button className="task-update-btn" onClick={updateHandler}>
//           Update
//         </button>
//         <button className="task-del-btn" onClick={deleteHandler}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }
