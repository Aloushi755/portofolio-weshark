"use client";
import {
  Hero,
  NewProject,
  Principles,
  SkillSlider
} from '@/features/homepage';

import {
  Footer
} from '@/global/components';

export default function Page() {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <NewProject />
      <Principles />
      <SkillSlider />
      <Footer />
    </div>
  );
}
