import "./App.css";
import TaskManagerWrapper from "./components/To-Do/TaskManagerWrapper";
function App() {
  const taskninja = `${process.env.PUBLIC_URL}/assets/images/taskninja.png`;
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

export default App;
