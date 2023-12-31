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
        <th>Site Name</th>
        <th>Mobile No</th>
        <th>Email</th>
        <th>OTP</th>
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
            <td style={{padding: "0.3rem"}}><Skeleton width="fullWidth" height="2.5rem" /></td>
          </tr>
        ) : (
          <tr onClick={() => navigate(`/update-user/${user.id}`)}>
            <td>{user.userId}</td>
            <td>{user.name}</td>
            <td>{user.userRole}</td>
            <td>{user.siteId}</td>
            <td>{user.siteName}</td>
            <td>{user.mobileNo}</td>
            <td>{user.email}</td>
            <td>{user.passwordHash.length === 5 ? user.passwordHash.split('$')[1] : "-"}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
