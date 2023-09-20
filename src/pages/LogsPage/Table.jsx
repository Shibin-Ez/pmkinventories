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
            <td>{log.available}</td>
            <td>{log.serviceable}</td>
            <td>{log.scrapped}</td>
            <td>{log.remark}</td>
            <td>{date}<br /><span className="td-time">{time}</span></td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;