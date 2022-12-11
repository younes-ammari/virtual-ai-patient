import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

import { Link } from 'react-router-dom';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Contact = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {


  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner pt-36',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content reveal-from-bottom" data-reveal-delay="200">
            <h3 className="mt-0 mb-4 reveal-from-bottom" data-reveal-delay="200">
              You wanna <span className="text-color-primary">Contact us</span> welcome
            </h3>
            <div className="container-xs">
              <p className="m-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
              here are some links that you can reach us
              </p>



              
              
              
            </div>
              <div 
                // className="reveal-from-bottom" 
                data-reveal-delay="800">
                  <a href=''> Email</a>
              </div>
              <div 
                // className="reveal-from-bottom" 
                data-reveal-delay="800">
                  <a href=''> Linked In</a>
              </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;