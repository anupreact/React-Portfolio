import React from 'react';
import hero_image from '../../images/hero.png';

// const name = 'Hello I am Anup,';
const name = 'Hello I am Vishal,';
// const title = 'Frontend React-Js Developer.';
const title = 'A Full Stack Web Developer & Project Technical Head';
const desc =
  'Inventive Frontend developer with 1+ year of Experience in HTML5, CSS3 & Mordern Javascript along with one of the most powerfull Javascript librar, "React Js" & some of its UI-libraries.';
const icons = ['fa fa-linkedin', 'fa fa-envelope', 'fa fa-github',"fa fa-telegram"];

const Hero = () => {
  return (
    <section className="hero">  
      <div className="left-col">
        <div className="content-row1">
          <span className="name">{name}</span> <br />
          <span className="title">{title}</span>
        </div>
        <div className="content-row2">
          <span className="subtitle">{desc}</span>
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