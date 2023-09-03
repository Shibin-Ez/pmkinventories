import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SideBox = ({ title, singular, data }) => {
  const navigate = useNavigate();

  return (
    <div className="side-box">
      <h3 className="side-box-h3">{title}</h3>
      <div className="side-box-box">
        {data.map((datum) => {
          return datum == "loading" ? (
            <Skeleton height={"1.5rem"} />
          ) : (
            <div className="side-box-content">
              <span>{datum[0]}</span>
              <div className="side-box-content-span">{datum[1]}</div>
            </div>
          );
        })}

        <div className="see-all-btn-container">
          <button className="see-all-btn" onClick={() => navigate(`/${title}`)}>
            see all
          </button>
        </div>
      </div>
      <button
        className="side-box-add-btn"
        onClick={() => navigate(`/add-${singular}`)}
      >
        Add New {singular}
      </button>
    </div>
  );
};

export default SideBox;
