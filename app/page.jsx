import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Principles from '../components/Principles';
import Footer from '../components/Footer';
import { SkillSlider } from '../components/SkillSlider';
import NewProject from '../components/NewProject';

const Home = () => (
  <>
    <div className='overflow-x-hidden'>
      <Hero />
      <NewProject />
      <About />
      <Principles />
      <SkillSlider />
      <Footer />
    </div>
  </>
);

export default Home;