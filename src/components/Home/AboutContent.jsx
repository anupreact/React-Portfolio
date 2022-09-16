import React from "react";

const eduData = [
  {
    year: "High School - 2011",
    name: "Science and Technology.",
    location: "Maharashtra Board.",
    icon: "fa fa-graduation-cap",
  },
  {
    year: "Graduation - 2017",
    name: " Electronics Engineering. ",
    location: "Nagpur University.",
    icon: "fa fa-graduation-cap",
  },
  {
    year: "2018 - 2021",
    name: " Customer Care Representative.",
    location: " Squadrun Solutions Pvt.",
    icon: "fa fa-briefcase",
  },
  {
    year: "React JS Training - 2021",
    name: "Achievers IT Institute.",
    location: "Bangalore, Karnataka.",
    icon: "fa fa-graduation-cap",
  },
];
const expData = [
  {
    year: "React JS Intern - 2021",
    name: "The Space Element.",
    location: "Nagpur, Maharashtra.",
    icon: "fa fa-briefcase",
  },
  {
    year: "Junior React JS Developer -2022",
    name: " WPWeb Infotech Pvt. Ltd. ",
    location: "Ahmedabad, Gujarat",
    icon: "fa fa-briefcase",
  },
];

const skillData = [
  {
    name: "HTML",
    amount: "80%",
  },
  {
    name: "CSS",
    amount: "75%",
  },
  {
    name: "JAVASCRIPT",
    amount: "70%",
  },
  {
    name: "REACT",
    amount: "75%",
  },
  {
    name: "REDUX",
    amount: "70%",
  },
  {
    name: "REACT_BOOTSTRAP",
    amount: "80%",
  },
];

const AboutContent = () => {
  const education = (data) => {
    return (
      <>
        {data.map((items) => {
          const { year, name, location, icon } = items;
          return (
            <div className="edu">
              <div className="icon">
                <i class={icon} aria-hidden="true"></i>
              </div>
              <div className="content">
                <h3>{year}</h3>
                <span>
                  {name} <br />
                  {location}
                </span>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const skills = (data) => {
    return data.map((item) => {
      return (
        <>
          <div className="row">
            <div className="name">
              <span>{item.name}</span>
              <span>{item.amount}</span>
            </div>
            <div className="bar"></div>
          </div>
        </>
      );
    });
  };

  return (
    <section className="about">
      <h1 className="heading">ABOUT</h1>
      <div className="cards-container">
        <div className="card">
          <div className="head">Eduction & Experience</div>
          <div className="inner">
            <div className="inner-left">{education(eduData)}</div>

            <div className="inner-right">{education(expData)}</div>
          </div>
        </div>{" "}
        <div className="card">
          <div className="head">Technical Skills</div>
          <div className="inner right-card">{skills(skillData)}</div>
        </div>{" "}
      </div>
    </section>
  );
};

export default AboutContent;
