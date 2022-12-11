import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner pt-32',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Our Team Members',
    paragraph: ' '
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id="team"
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Web Developer - UI/UX Designer
                  </div>
                <h3 className="mt-0 mb-12">
                  Younes Ammari (team leader)
                  </h3>
                <p className="m-0">
                  Medical student at Ferhat Abbes Setif 1 University and AI enthusiast, from Algeria.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <a
                target="_blank" rel="noopener noreferrer"  
                href='https://www.linkedin.com/in/younes-ammari/'>  
                <Image
                  src={require('./../../assets/images/team-split-image-01.png')}
                  alt="Features split 01"
                  width={528-200}
                  height={396-200} 
                  style={{
                    borderRadius:266
                  }}/></a>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  AI Responsible
                  </div>
                <h3 className="mt-0 mb-12">
                  Amine Saied
                  </h3>
                <p className="m-0">
                Computer Science and AI student at Ferhat Abbes Setif 1 University, from Algeria.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                  <a
                  target="_blank" rel="noopener noreferrer"  
                  href='https://www.linkedin.com/in/aminesaied'>

                <Image
                  src={require('./../../assets/images/team-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
                  </a>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Presentaion maker
                  </div>
                <h3 className="mt-0 mb-12">
                  Hijab Naqvi
                  </h3>
                <p className="m-0">
                Information Technology student, from Pakistan.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                  <a
                  target="_blank" rel="noopener noreferrer"  
                  href='https://www.linkedin.com/in/hijab-naqvi-a9239920a'>

                  <Image
                    src={require('./../../assets/images/team-split-image-03.png')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                  </a>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Presentaion maker
                  </div>
                <h3 className="mt-0 mb-12">
                  Muhammad Talha
                  </h3>
                <p className="m-0">
                Software Engineering student, from Pakistan.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                  <a
                  target="_blank" rel="noopener noreferrer"  
                  href='https://www.linkedin.com/in/muhammad-talha-imran-521349224'>

                <Image
                  src={require('./../../assets/images/team-split-image-04.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
                  </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;