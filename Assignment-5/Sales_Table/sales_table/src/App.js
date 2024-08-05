import "./App.css";
import SalesTable from "../src/components/Table";
import SalesTableWithFilter from "../src/components/TableWithFilter";
function App() {
  return (
    <div className="App">
      <SalesTable />
      <SalesTableWithFilter />
    </div>
  );
}

export default App;
