import React, { Component } from "react";
import "./App.css";
import taskninja from "./taskninja.png";
import TaskManagerWrapper from "./components/To-Do/TaskManagerWrapper";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <nav>
          <img src={taskninja} alt="taskninja" />
          <h1>Task Ninja</h1>
        </nav>
        <TaskManagerWrapper />
      </div>
    );
  }
}

export default App;
