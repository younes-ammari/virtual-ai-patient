import React from 'react';
import { useEffect } from 'react';
// import sections
// import Hero from '../components/sections/Hero';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
// import FeaturesSplit from '../components/sections/FeaturesSplit';
// import Testimonial from '../components/sections/Testimonial';
// import Cta from '../components/sections/Cta';
// import SeeDemoVideo from '../components/sections/SeeDemoVideo';
import Generator from '../components/sections/Generator';

const Try = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <>
      {/* <Hero className="illustration-section-01" /> */}
      {/* <SeeDemoVideo /> */}
      <Generator/>

      {/* <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split /> */}
    </>
  );
}

export default Try;