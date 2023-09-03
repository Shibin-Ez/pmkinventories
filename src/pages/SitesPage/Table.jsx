const Table = ({ sites }) => {
    return (
      <table>
        <tr>
          <th>ID</th>
          <th>Site Name</th>
          <th>Site Type</th>
          <th>Address</th>
        </tr>
        {sites.map((site) => {
          return (
            <tr>
              <td>{site.id}</td>
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
  