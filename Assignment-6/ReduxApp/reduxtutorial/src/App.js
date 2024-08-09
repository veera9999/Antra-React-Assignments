import "./App.css";
import CarsApp from "./components/CarsApp";
import store from "./redux";
import MyProvider from "./redux/MyProvider";

function App() {
  return (
    <div className="App">
      <MyProvider store={store}>
        <CarsApp />
      </MyProvider>
    </div>
  );
}

export default App;
