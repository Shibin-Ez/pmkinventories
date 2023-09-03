import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const Table = ({ users }) => {
  const navigate = useNavigate();

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Full Name</th>
        <th>Role</th>
        <th>Site ID</th>
        <th>Mobile No</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
      {users.map((user) => {
        return user == "loading" ? (
          <tr>
            <td style={{padding: "0.3rem"}}><Skeleton width="fullWidth" height="2.5rem" /></td>
            <td style={{padding: "0.3rem"}}><Skeleton width="fullWidth" height="2.5rem" /></td>
            <td style={{padding: "0.3rem"}}><Skeleton width="fullWidth" height="2.5rem" /></td>
            <td style={{padding: "0.3rem"}}><Skeleton width="fullWidth" height="2.5rem" /></td>
            <td style={{padding: "0.3rem"}}><Skeleton width="fullWidth" height="2.5rem" /></td>
            <td style={{padding: "0.3rem"}}><Skeleton width="fullWidth" height="2.5rem" /></td>
            <td style={{padding: "0.3rem"}}><Skeleton width="fullWidth" height="2.5rem" /></td>
          </tr>
        ) : (
          <tr onClick={() => navigate(`/update-user/${user.id}`)}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.userRole}</td>
            <td>{user.siteId}</td>
            <td>{user.mobileNo}</td>
            <td>{user.email}</td>
            <td>{user.passwordHash}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
