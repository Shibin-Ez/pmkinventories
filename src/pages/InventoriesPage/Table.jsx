import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const Table = ({ inventories }) => {
  const navigate = useNavigate();

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Inventory Name</th>
        <th>Category</th>
      </tr>
      {inventories.map((inventory) => {
        return inventory == "loading" ? (
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
          </tr>
        ) : (
          <tr>
            <td>{inventory.inventoryId}</td>
            <td>{inventory.name}</td>
            <td>{inventory.categoryName}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
