import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
        <Link to="/">
      <div className="m-0" style={{
        flexDirection:"row", 
        display:'flex', 
        justifyContent:"center", 
        alignItems:"center"
        }}>
          <Image
            
            src={require('./../../../assets/images/logo.svg')}
            alt="Open"
            width={32}
            height={32} />
          <h5 style={{marginLeft:11}} >Virtual AI Patient</h5>
      </div>
        </Link>
    </div>
  );
}

export default Logo;