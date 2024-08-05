import "./App.css";
import SalesTable from "../src/components/Table";
import SalesTableWithFilter from "../src/components/TableWithFilter";
function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <SalesTable />
        <SalesTableWithFilter />
      </div>
    </div>
  );
}

export default App;
