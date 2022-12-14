import React from "react";
import ServiceCard from "./ServiceCard";

const Service = (props) => {
  const cardData = [
    {
      logo: "fa fa-snowflake-o",
      title: "Development From Scratch",
      description:
        "Leverage my React software development services to build a project from start to go. Share your project requirements for the perfect mix of talent and expertise.",
    },
    {
      logo: "fa fa-snowflake-o",
      title: "Customizable & Reusable Components",
      description:
        "Components are the basic building blocks of any  react application. I prefer to make components in such a manner that even a person with less coding knowledge would be able to modify changes",
      },
    {
      logo: "fa fa-snowflake-o",
      title: "Custom React Hooks",
      description:
      "Hooks plays an important role in any React application as it seperates the logic from the UI & if the same logic is used in different components, custom Hooks are there. ",
    },
   
      {
        logo: "fa fa-snowflake-o",
        title: "UI/UX Development",
        description:
          "UI / UX is a most important part in any software product as this is responsible to make an impact on the users. I can develope clean and minimal UI / UX designs for any kind of requirements."
      },
      {
        logo: "fa fa-snowflake-o",
        title: "Rest-Api Integration",
        description:
          "API integration is the one of the important part of any single page application, As most of the data fetched from API's. I can implement the REST-api's in the application in most effective and efficient manner.",
      },
    {
      logo: "fa fa-cogs",
      title: "Maintenance and Support",
      description:
        "Maintenance and support services for consistent and stable performance of applications. I can change , modify or even enhance the product quality & update your app functionality on demand.",
    },
    
  ];

  return (
    <section className="services">
      <h1 className="heading">SERVICES</h1>
      <div className="cards-container">
        {cardData.map((data,index) => {
          const { logo, title, description } = data;
          return (
            <ServiceCard key={index} logo={logo} title={title} description={description} />
          );
        })}
      </div>
    </section>
  );
};

export default Service;
