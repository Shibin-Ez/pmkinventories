const Table = ({ inventories }) => {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Inventory Name</th>
      </tr>
      {inventories.map((inventory) => {
        return (
          <tr>
            <td>{inventory.id}</td>
            <td>{inventory.name}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
