import React, { useState, useEffect } from "react";

export default function SalesTableWithFilter() {
  const baseURL = "http://localhost:3000/sales";
  const [sales, setSales] = useState([]);
  const [filteredSales, setFilteredSales] = useState([]);
  const [regionFilter, setRegionFilter] = useState("all");
  const [modelFilter, setModelFilter] = useState("all");

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("Received data:", data);
        if (Array.isArray(data)) {
          setSales(data);
          setFilteredSales(data);
        } else {
          console.error("Unexpected data structure:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const filtered = sales.filter((sale) => {
      return (
        (regionFilter === "all" || sale.region === regionFilter) &&
        (modelFilter === "all" || sale.model === modelFilter)
      );
    });
    setFilteredSales(filtered);
  }, [regionFilter, modelFilter, sales]);

  const regions = ["all", ...new Set(sales.map((sale) => sale.region))];
  const models = ["all", ...new Set(sales.map((sale) => sale.model))];

  if (sales.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sales-table-container">
      <div className="filters">
        <label>
          Region Filter:
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </label>
        <label>
          Model Filter:
          <select
            value={modelFilter}
            onChange={(e) => setModelFilter(e.target.value)}>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </label>
      </div>
      <table className="sales-table-with-filter">
        <thead>
          <tr>
            <th>Region</th>
            <th>Model</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {filteredSales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.region}</td>
              <td>{sale.model}</td>
              <td>{sale.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
