import React, { useState, useEffect } from "react";

export default function SalesTable() {
  const baseURL = "http://localhost:3000/sales";
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        const salesData = Array.isArray(data) ? data : data.sales;
        if (Array.isArray(salesData)) {
          const salesWithSummary = addSummaryRows(salesData);
          setSales(salesWithSummary);
        } else {
          console.error("Unexpected data structure:", data);
        }
      })
      .catch((error) => {
        console.error("Could not fetch the sales data", error);
      });
  }, []);

  const addSummaryRows = (sales) => {
    if (!Array.isArray(sales) || sales.length === 0) {
      return [];
    }

    const summaryMap = {};
    const salesWithSummary = [];

    sales.forEach((sale) => {
      if (!summaryMap[sale.region]) {
        summaryMap[sale.region] = {
          region: sale.region,
          model: "SUM",
          sales: 0,
          isSummary: true,
        };
      }
      summaryMap[sale.region].sales += sale.sales;

      // Add the sale to the salesWithSummary array
      salesWithSummary.push({ ...sale, isSummary: false });
    });

    // Add summary rows after each region's sales
    const result = [];
    let currentRegion = null;

    salesWithSummary.forEach((sale) => {
      if (currentRegion !== sale.region) {
        currentRegion = sale.region;
        result.push(summaryMap[currentRegion]);
      }
      result.push(sale);
    });

    return result;
  };

  return (
    <div className="Table-Body">
      <table className="sales-table">
        <thead>
          <tr>
            <th>Region</th>
            <th>Model</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr
              key={`${sale.region}-${sale.model}-${index}`}
              className={sale.isSummary ? "summary-row" : ""}>
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
