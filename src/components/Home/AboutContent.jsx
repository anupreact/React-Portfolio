import React from 'react';

const eduData = [
  {
    year: 'High School - 2011',
    name: 'Science and Technology.',
    location: 'Maharashtra Board.',
    icon: 'fa fa-university',
  },
  {
    year: 'Graduation - 2017',
    name: ' Electronics Engineering. ',
    location: 'Nagpur University.',
    icon: 'fa fa-graduation-cap',
  },
  { 
    year: '2018 - 2021',
    name: ' Customer Care Representative.',
    location: ' Squadrun Solutions Pvt. Ltd.',
    icon: 'fa fa-briefcase',
  },
  {
    year: 'React JS Training - 2021',
    name: 'Achievers IT Institute.',
    location: 'Bangalore, Karnataka.',
    icon: 'fa fa-graduation-cap',
  },
];
const expData = [
  {
    year: 'React JS Intern - 2021',
    name: 'The Space Element.',
    location: 'Nagpur, Maharashtra.',
    icon: 'fa fa-briefcase',
  },
  {
    year: 'Junior React JS Developer -2022',
    name: ' WPWeb Infotech Pvt. Ltd. ',
    location: 'Ahmedabad, Gujarat.',
    icon: 'fa fa-briefcase',
  },
];

const skillData = [
  {
    name: 'HTML',
    amount: '80%',
  },
  {
    name: 'CSS',
    amount: '75%',
  },
  {
    name: 'JAVASCRIPT',
    amount: '70%',
  },
  {
    name: 'REACT',
    amount: '75%',
  },
  {
    name: 'REDUX',
    amount: '70%',
  },
  {
    name: 'REACT_BOOTSTRAP',
    amount: '80%',
  },
];

const rdData = [
  " Expertise in React JS framework to develop the SPA.",
  "Experienced in React JS and working with React Flux architecture.",
  "Experience in using React JS components, Forms, Events, Keys, Router, plus Redux,",
  "Good Experience in React.js for creating interactive UI's using One-way data flow, Virtual DOM, JSX,",
  "Expertise in using IDE tools like VS-code and Sublime Text.",
  "Ability to work effectively while working as a team member as well as individually.",
  "Excellent communication and Inter-Personal Skills, well organized, goal oriented.",

]

const AboutContent = (props) => {
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
  console.log(rdData)
  return (
    <section className="about">
      {props.heading && <h1 className="heading">ABOUT</h1>}
      {props.intro && (
        <div className="quote">
          <span> “ </span>
          Hello, I am Anup Manwatkar <br /> graduated as an Electronics Engineer
          from Nagpur University in 2017. I have started my IT Journey in Feb
          ‘2021. I have completed 3-months React Js Training from Banglore,
          After successfull completion of the course, I joined a company as a
          React Js Intern at Nagpur. And Currently from April 2022 I’am working{' '}
          <br /> as a Junior React Js Developer in WPWeb infotech Pvt. Ltd
          Ahmedabad. <span>”</span>
        </div>
      )}
     
      {
        true && (
          <div className="react-info">
            <div className="head">
              <span>Frontend React Js Developer.</span><br />
            </div>
            <ul>
                {
                  rdData.map((list,index)=>{
                    return(
                      <li>{list}</li>
                    )
                  })
                }
              </ul>
          </div>
        )
      }

      <div className="cards-container">
        <div className="card">
          <div className="head">Eduction & Experience</div>
          <div className="inner">
            <div className="inner-left">{education(eduData)}</div>

            <div className="inner-right">{education(expData)}</div>
          </div>
        </div>{' '}
        
        <div className="card">
          <div className="head" style={{ marginLeft: '0px' }}>
            Technical Skills
          </div>
          <div className="inner right-card">{skills(skillData)}</div>
        </div>{' '}
      </div>
    </section>
  );
};

export default AboutContent;