import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import SeeDemoVideo from '../components/sections/SeeDemoVideo';

const Home = () => {

  return (
    <>
      <br/>
      <br/>
      <br/>
      <Hero className="illustration-section-01" />
      <SeeDemoVideo />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      {/* <Cta split /> */}
    </>
  );
}

export default Home;