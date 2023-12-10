import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const Table = ({ sites }) => {
  const navigate = useNavigate();

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Site Name</th>
        <th>Site Type</th>
        <th>Address</th>
      </tr>
      {sites.map((site) => {
        return site == "loading" ? (
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
          </tr>
        ) : (
          <tr  onClick={() => navigate(`/update-site/${site.id}`)}>
            <td>{site.siteId}</td>
            <td>{site.name}</td>
            <td>{site.siteType}</td>
            <td>{site.address}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
