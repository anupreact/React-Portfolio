import React from "react";
import banner from "../../images/banner.jpg"

const ProjectCard = () => {
  return (
    <div className="card">
      <div className="image-box">
        <img src={banner} alt="" />
      </div>
      <div className="title">
        <span> Type : Ecommerce</span>
      </div>
      <div className="description">
        Stack Used : React, Redux, Scss, Antd, React-router-dom, Json-server
      </div>
      <div className="visit">Visit Website -</div>
    </div>
  );
};

export default ProjectCard;