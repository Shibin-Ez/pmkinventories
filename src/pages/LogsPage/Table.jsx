import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import dateFormat from "./dateFormat";

const Table = ({ logs }) => {
  const navigate = useNavigate();

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Site</th>
        <th>Inventory</th>
        <th>Available</th>
        <th>Serviceable</th>
        <th>Scrapped</th>
        <th>Remark</th>
        <th>Timestamp</th>
      </tr>
      {logs.map((log) => {
        const [date, time] = dateFormat(log.timestamp);
        return log == "loading" ? (
          <tr>
            <td style={{ padding: "0.3rem" }}>
              <Skeleton width="fullWidth" height="2.5rem" />
            </td>
            <td style={{ padding: "0.3rem" }}>
              <Skeleton width="fullWidth" height="2.5rem" />
            </td>
            <td style={{ padding: "0.3rem" }}>
              <Skeleton width="fullWidth" height="2.5rem" />
            </td>
            <td style={{ padding: "0.3rem" }}>
              <Skeleton width="fullWidth" height="2.5rem" />
            </td>
            <td style={{ padding: "0.3rem" }}>
              <Skeleton width="fullWidth" height="2.5rem" />
            </td>
            <td style={{ padding: "0.3rem" }}>
              <Skeleton width="fullWidth" height="2.5rem" />
            </td>
            <td style={{ padding: "0.3rem" }}>
              <Skeleton width="fullWidth" height="2.5rem" />
            </td>
            <td style={{ padding: "0.3rem" }}>
              <Skeleton width="fullWidth" height="2.5rem" />
            </td>
          </tr>
        ) : (
          <tr>
            <td>{log.id}</td>
            <td>{log.siteName}</td>
            <td>{log.inventoryName}</td>
            <td>
              {log.available}{" "}
              <span
                style={{
                  color:
                    log.available - log.prevAvailable > 0 ? "green" : "red",
                }}
              >
                {log.available - log.prevAvailable != 0 && "("}
                {log.available - log.prevAvailable > 0 && "+"}
                {log.available - log.prevAvailable != 0 &&
                  log.available - log.prevAvailable}
                {log.available - log.prevAvailable != 0 && ")"}
              </span>
            </td>
            <td>
              {log.serviceable}{" "}
              <span
                style={{
                  color:
                    log.serviceable - log.prevServiceable > 0 ? "green" : "red",
                }}
              >
                {log.serviceable - log.prevServiceable != 0 && "("}
                {log.serviceable - log.prevServiceable > 0 && "+"}
                {log.serviceable - log.prevServiceable != 0 &&
                  log.serviceable - log.prevServiceable}
                {log.serviceable - log.prevServiceable != 0 && ")"}
              </span>
            </td>
            <td>
              {log.scrapped}{" "}
              <span
                style={{
                  color:
                    log.scrapped - log.prevScrapped > 0 ? "green" : "red",
                }}
              >
                {log.scrapped - log.prevScrapped != 0 && "("}
                {log.scrapped - log.prevScrapped > 0 && "+"}
                {log.scrapped - log.prevScrapped != 0 &&
                  log.scrapped - log.prevScrapped}
                {log.scrapped - log.prevScrapped != 0 && ")"}
              </span>
            </td>
            <td>{log.remark}</td>
            <td>
              {date}
              <br />
              <span className="td-time">{time}</span>
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
