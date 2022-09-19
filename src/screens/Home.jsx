import React from 'react';
import About from '../components/Home/AboutContent';
import Contacts from '../components/Home/Contacts';
import Hero from '../components/Home/Hero';
import Project from '../components/Home/Project';
import Service from '../components/Home/Service';
import hero_image from '../images/hero.png';

const Home = () => {
  return (
    <main className="home_container">
      {/* HERO SECTION STARTED */}
      <Hero />
      {/* HERO SECTION ENDED */}
      {/* SERVICES SECTION STARTED */}
      <Service heading={true}/>
      {/* SERVICES SECTION ENDED */}
      {/* PROJECTS SECTION STARTED */}
      <Project heading={true}/>
      {/* PROJECTS SECTION ENDED */}
      {/* // ABOUT SECTION STARTED */}
      <About heading={true} />
      {/* // ABOUT SECTION ENDED */}
      {/* // CONTACT SECTION STARTED */}
      <Contacts heading={true}/>
      {/* // CONTACT SECTION ENDED */}
    </main>
  );
};

export default Home;