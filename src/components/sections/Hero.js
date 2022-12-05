import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
// import Image from '../elements/Image';
// import Modal from '../elements/Modal';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  // const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
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
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Welcome to the <span className="text-color-primary">Virtual AI Patient</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              new way dedicated to medical students in order to help them practice on their virtual patient so that they can act more professional 
              and much faster when they face a similar cases in the reality.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
              <Link to="/try-it">
                  <Button 
                    // tag="a" 
                    color="primary" wideMobile 
                  // href="https://cruip.com/"
                  // href="/"
                  // onClick={async ()=>{
                  //   document.getElementById('video-demo').scrollIntoView({ behavior: "smooth" });
                  // } }
                  >
                    Try it now
                  </Button>
                </Link>


                  <Button 
                    // tag="a" 
                    color="dark" wideMobile 
                    onClick={async ()=>{
                      document.getElementById('video-demo').scrollIntoView({ behavior: "smooth" });
                    } }
                  >
                    See Video Demo
                  </Button>
                
                  {/* <Button 
                    // tag="a" 
                    color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                  </Button> */}

                </ButtonGroup>
              </div>
            </div>
          </div>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              // data-video="https://player.vimeo.com/video/174002812"
              // href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={'https://i.ytimg.com/vi/5AGdK-eTasM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLDbbNLVD5mQTpQCP-ZfHQBEFiuheg'}
                // src={require('./../../assets/images/video-placeholder2.jpg')}
                // src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/5AGdK-eTasM"
            // videoTag="iframe"
             /> */}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;