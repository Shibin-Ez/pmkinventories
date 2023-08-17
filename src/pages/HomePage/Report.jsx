import { useEffect, useState } from "react";

const Report = () => {
  const [report, setReport] = useState([]);

  const getReport = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/stocks/reports/sitewise`
    );
    const data = await response.json();
    setReport(data);
  };

  useEffect(() => {
    getReport();
  }, []);

  return (
    <div className="report">
      <h2 className="report-h2">Report</h2>
      {report.map((site) => {
        return (
          <div className="report-content">
            <h3 className="side-box-h3 report-table-h3">{site.siteName}</h3>
            <table>
              <tr>
                <th>Inventory</th>
                <th>Available</th>
                <th>Servicable</th>
                <th>Scrapped</th>
              </tr>
              {site.stocks.map((stock) => {
                return (
                  <tr>
                    <td className="report-table-left">{stock.inventoryName}</td>
                    <td>{stock.available}</td>
                    <td>{stock.serviceable}</td>
                    <td>{stock.scrapped}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Report;
