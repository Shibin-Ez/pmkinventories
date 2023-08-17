const Table = ({ users }) => {
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
        return (
          <tr>
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
