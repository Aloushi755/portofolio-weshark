import React from 'react';
import Hero from '../components/Hero';
import Principles from '../components/Principles';
import Footer from '../components/Footer';
import { SkillSlider } from '../components/SkillSlider';
import NewProject from '../components/NewProject';

const Home = () => (
  <>
    <div className='overflow-x-hidden'>
      <Hero />
      <NewProject />
      <Principles />
      <SkillSlider />
      <Footer />
    </div>
  </>
);

export default Home;