import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
// import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const SeeDemoVideo = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    // 'features-tiles-inner section-inner pt-0',
    'hero-inner section-inner pt-0 center-content',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  // const tilesClasses = classNames(
  //   'tiles-wrap center-content',
  //   pushLeft && 'push-left'
  // );

  const sectionHeader = {
    title: 'Look out how our product works',
    paragraph: 'we used cohere generative model api.'
  };

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className="center-content" id='video-demo' >

          <h2 style={{paddingTop:20}}>{sectionHeader.title}</h2>
          <p>{sectionHeader.paragraph}</p>
          </div>
          
          <div className="reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://youtu.be/t34Y_BLQYus"
              href=""
              // data-video="https://player.vimeo.com/video/174002812"
              // href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                // src={'https://i.ytimg.com/vi/5AGdK-eTasM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLDbbNLVD5mQTpQCP-ZfHQBEFiuheg'}
                // src={require('./../../assets/images/video-placeholder2.jpg')}
                src={require('./../../assets/images/video-placeholder.png')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            // video="https://www.youtube.com/embed/5AGdK-eTasM"
            video="https://www.youtube.com/embed/t34Y_BLQYus"
            // video="https://youtu.be/A7N8OLPbQAA"
            // videoTag="iframe"
             />
        </div>
      </div>
    </section>
  );
}

SeeDemoVideo.propTypes = propTypes;
SeeDemoVideo.defaultProps = defaultProps;

export default SeeDemoVideo;