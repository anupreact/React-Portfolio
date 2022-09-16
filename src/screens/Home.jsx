import React from "react";
import hero_image from "../images/hero.png";

const Home = () => {
  return (
    <main className="home_container">
      {/* HERO SECTION STARTED */}

      <section className="hero">
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
            <div className="media-btns">
              <div className="icons">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </div>
              <div className="icons">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div className="icons">
                <i class="fa fa-github" aria-hidden="true"></i>
              </div>
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
      {/* HERO SECTION ENDED */}

      {/* SERVICES SECTION STARTED */}
      <section className="services">
        <h1 className="heading">SERVICES</h1>
        <div className="cards-container">
          <div className="card">
            <div className="title">Heading</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis incidunt eius optio eaque id sapiente vero.
            </div>
            <div>Know More</div>
          </div>{" "}
          <div className="card">
            <div className="title">Heading</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis incidunt eius optio eaque id sapiente vero.
            </div>
            <div>Know More</div>
          </div>{" "}
          <div className="card">
            <div className="title">Heading</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis incidunt eius optio eaque id sapiente vero.
            </div>
            <div>Know More</div>
          </div>{" "}
          <div className="card">
            <div className="title">Heading</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis incidunt eius optio eaque id sapiente vero.
            </div>
            <div>Know More</div>
          </div>{" "}
          <div className="card">
            <div className="title">Heading</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis incidunt eius optio eaque id sapiente vero.
            </div>
            <div>Know More</div>
          </div>{" "}
          <div className="card">
            <div className="title">Heading</div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis incidunt eius optio eaque id sapiente vero.
            </div>
            <div>Know More</div>
          </div>
        </div>
        <div className="card"></div>
        <div className="card"></div>
      </section>

      {/* SERVICES SECTION ENDED */}

      {/* PROJECTS SECTION STARTED */}

      <section className="projects">
        <h1 className="heading">PROJECTS</h1>
        <div className="cards-container">
          <div className="card">
            <div className="image-box">Image Row</div>
            <div className="title">
              <span> Type : Ecommerce</span>
            </div>
            <div className="description">
              Stack Used : React, Redux, Scss, Antd, React-router-dom,
              Json-server
            </div>
            <div>Visit Website -</div>
          </div>{" "}
          <div className="card">
            <div className="image-box">Image Row</div>
            <div className="title">
              <span> Type : Ecommerce</span>
            </div>
            <div className="description">
              Stack Used : React, Redux, Scss, Antd, React-router-dom,
              Json-server
            </div>
            <div>Visit Website -</div>
          </div>{" "}
          <div className="card">
            <div className="image-box">Image Row</div>
            <div className="title">
              <span> Type : Ecommerce</span>
            </div>
            <div className="description">
              Stack Used : React, Redux, Scss, Antd, React-router-dom,
              Json-server
            </div>
            <div>Visit Website -</div>
          </div>
        </div>
      </section>
      {/* PROJECTS SECTION ENDED */}

      {/* // ABOUT SECTION STARTED */}

      <section className="about">
        <h1 className="heading">ABOUT</h1>
        <div className="cards-container">
          <div className="card">
            <div className="head">Eduction & Experience</div>
            <div className="inner">
              <div className="inner-left">
                <div className="edu">
                  <div className="icon">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h3>High School - 2011</h3>
                    <span>
                      Science and Technology. <br /> Maharashtra Board.
                    </span>
                  </div>
                </div>
                <div className="edu">
                  <div className="icon">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h3>Graduation - 2017</h3>
                    <span>
                      Electronics Engineering. <br /> Nagpur University.
                    </span>
                  </div>
                </div>
                <div className="edu">
                  <div className="icon">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h3>2018 - 2021</h3>
                    <span>
                      Customer Care Representative.
                      <br /> Squadrun Solutions Pvt. Ltd.
                    </span>
                  </div>
                </div>

                <div className="edu">
                  <div className="icon">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h3> React JS Training - 2021</h3>
                    <span>
                      Achievers IT Institute. <br /> Bangalore, Karnataka.
                    </span>
                  </div>
                </div>
              </div>

              <div className="inner-right">
                <div className="edu">
                  <div className="icon">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h3>React JS Intern - 2021</h3>
                    <span>
                      The Space Element. <br /> Nagpur, Maharashtra.
                    </span>
                  </div>
                </div>
                <div className="edu">
                  <div className="icon">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  </div>
                  <div className="content">
                    <h3>Junior React JS Developer -2022</h3>
                    <span>
                      WPWeb Infotech Pvt. Ltd. <br /> Ahmedabad, Gujarat
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="card">
            <div className="head">Technical Skills</div>
            <div className="inner right-card">
              <div className="row">
                <div className="name">
                  <span>Name</span>
                  <span>89%</span>
                </div>
                <div className="bar"></div>
              </div>{" "}
              <div className="row">
                <div className="name">
                  <span>Name</span>
                  <span>89%</span>
                </div>
                <div className="bar"></div>
              </div>{" "}
              <div className="row">
                <div className="name">
                  <span>Name</span>
                  <span>89%</span>
                </div>
                <div className="bar"></div>
              </div>{" "}
              <div className="row">
                <div className="name">
                  <span>Name</span>
                  <span>89%</span>
                </div>
                <div className="bar"></div>
              </div>{" "}
              <div className="row">
                <div className="name">
                  <span>Name</span>
                  <span>89%</span>
                </div>
                <div className="bar"></div>
              </div><div className="row">
                <div className="name">
                  <span>Name</span>
                  <span>89%</span>
                </div>
                <div className="bar"></div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
      {/* // ABOUT SECTION ENDED */}

      {/* // CONTACT SECTION STARTED */}
      <section className="contact">
        <h1 className="heading">CONTACT</h1>
        <div className="cards-container">
          <div className="card">
           
          </div>{" "}
          <div className="card">
           
          </div>{" "}
        </div>
      </section>

      {/* // CONTACT SECTION ENDED */}

      {/* // FOOTER SECTION STARTED */}

      
     
      {/* // FOOTER SECTION ENDED */}
    </main>
  );
};

export default Home;
