import React from "react";
import hero_image from "../images/hero.png"

const Home = () => {
  return (
    <div className="home_container">
      <div className="hero">
        <div className="left-col">
          <div className="content-row1">
            <span className="name"> Hello I am Anup,</span> <br />
            <span className="title">Frontend React Js Developer.</span>
          </div>
          <div className="content-row2">
            <span className="subtitle">
              Inventive Frontend developer with 1+ year of Experience in HTML5,
              CSS3 & Mordern Javascript along with React Js & some of its UI
              libraries.
            </span>
          </div>
          <div className="content-row3">
            <span className="media-btns">
                <button>btn</button>
                <button>btn</button>
                <button>btn</button>
            </span>
          </div>
          <div className="content-row4">
            <span className="download-btn">
              <button>Download CV</button>
            </span>
          </div>
        </div>

        <div className="right-col">
            <img src={hero_image} alt=" hero " />
        </div>
      </div>
    </div>
  );
};

export default Home;
