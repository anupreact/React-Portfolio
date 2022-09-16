import React from "react";
import hero_image from "../../images/hero.png";

const name = "Hello I am Anup,";
const title = "Frontend React Js Developer.";
const desc =
  "Inventive Frontend developer with 1+ year of Experience in HTML5,CSS3 & Mordern Javascript along with React Js & some of its UIlibraries.";
const icons = ["fa fa-linkedin", "fa fa-envelope", "fa fa-github"];

const Hero = () => {
  return (
    <section className="hero">
      <div className="left-col">
        <div className="content-row1">
          <span className="name">{name}</span> <br />
          <span className="title">{title}</span>
        </div>
        <div className="content-row2">
          <span className="subtitle">
            {desc}
          </span>
        </div>
        <div className="content-row3">
          <div className="media-btns">
            {icons.map((icon) => {
              return (
                <div className="icons">
                  <i class={icon} aria-hidden="true"></i>
                </div>
              );
            })}
           
          </div>
        </div>

        <div className="content-row4">
          <div className="download-btn">
            <button>Download CV</button>
          </div>
        </div>
      </div>

      <div className="right-col">
        <img src={hero_image} alt=" hero " />
      </div>
    </section>
  );
};

export default Hero;
