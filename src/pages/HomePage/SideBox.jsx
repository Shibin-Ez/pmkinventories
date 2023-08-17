import { useNavigate } from "react-router-dom";

const SideBox = ({ title, singular }) => {
  const navigate = useNavigate();

  const contents = [
    { name: "director", count: 1 },
    { name: "management", count: 5 },
    { name: "approver", count: 11 },
  ];

  return (
    <div className="side-box">
      <h3 className="side-box-h3">{title}</h3>
      <div className="side-box-box">
        {contents.map((content) => {
          return (
            <div className="side-box-content">
              <span>{content.name}</span>
              <div className="side-box-content-span">{content.count}</div>
            </div>
          );
        })}

        <div className="see-all-btn-container">
          <button className="see-all-btn" onClick={() => navigate(`/${title}`)}>see all</button>
        </div>
      </div>
      <button className="side-box-add-btn" onClick={() => navigate(`/add-${singular}`)}>Add New {singular}</button>
    </div>
  );
};

export default SideBox;
