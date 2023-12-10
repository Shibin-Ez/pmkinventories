import dateFormat from "../LogsPage/dateFormat";

const Crud = ({ data }) => {
  const [date, time] = dateFormat(data.timestamp);

  return (
    <div className="cruds-content">
      <div className="flex">
        <div style={{width: "60%"}}>
          One data got{" "}
          <strong className={`cruds-${data.action}`}>{data.action}d</strong> in{" "}
          <strong>{data.tableName}</strong> table by{" "}
          <strong>{data.userName}</strong> (id: {data.userID}) with id{" "}
          <strong>{data.entryId}</strong> at{" "}
        </div>{" "}
        <div className="cruds-date">
          {date}, {time}
        </div>
      </div>
      <br />
      {data.action === "update" && (
        <span className="cruds-span">
          {data.columnName}: &nbsp;{data.oldData} =&gt; {data.newData}
        </span>
      )}
    </div>
  );
};

export default Crud;
