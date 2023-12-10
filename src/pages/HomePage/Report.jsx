import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BsDownload } from "react-icons/bs";

const Report = () => {
  const [report, setReport] = useState([
    { stocks: ["loading", "loading", "loading"] },
    { stocks: ["loading", "loading", "loading"] },
  ]);

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
    <div className="report" id="report">
      <a href={`${process.env.REACT_APP_SERVER_URL}/stocks/reports/sitewise/download`}>
        <button className="report-download-btn">
          <BsDownload />
        </button>
      </a>
      <h2 className="report-h2">Report</h2>
      {report.map((site) => {
        return (
          <div className="report-content">
            {site.siteName ? (
              <h3 className="side-box-h3 report-table-h3">{site.siteName}</h3>
            ) : (
              <Skeleton style={{ marginBottom: "0.5rem" }} height="2.5rem" />
            )}
            <table>
              {site.siteName ? (
                <tr>
                  <th>Inventory</th>
                  <th>Available</th>
                  <th>Servicable</th>
                  <th>Scrapped</th>
                </tr>
              ) : (
                <tr>
                  <th>Inventory</th>
                  <th>Available</th>
                  <th>Servicable</th>
                  <th>Scrapped</th>
                </tr>
              )}
              {site.stocks.map((stock) => {
                return stock == "loading" ? (
                  <tr>
                    <td
                      style={{ padding: "0.3rem" }}
                      className="report-table-left"
                    >
                      <Skeleton height="2.5rem" width="fullWidth" />
                    </td>
                    <td style={{ padding: "0.3rem" }}>
                      <Skeleton height="2.5rem" width="fullWidth" />
                    </td>
                    <td style={{ padding: "0.3rem" }}>
                      <Skeleton height="2.5rem" width="fullWidth" />
                    </td>
                    <td style={{ padding: "0.3rem" }}>
                      <Skeleton height="2.5rem" width="fullWidth" />
                    </td>
                  </tr>
                ) : (
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
