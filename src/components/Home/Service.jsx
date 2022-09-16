import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <section className="services">
      <h1 className="heading">SERVICES</h1>
      <div className="cards-container">
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      <ServiceCard/>
      </div>
      <div className="card"></div>
      <div className="card"></div>
    </section>
  );
};

export default Service;
