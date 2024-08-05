import React, { useState, useEffect } from "react";

export default function SalesTableWithFilter() {
  const baseURL = "http://localhost:3000/sales";
  const [sales, setSales] = useState([]);
  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return <div className="Table-Body"></div>;
}
