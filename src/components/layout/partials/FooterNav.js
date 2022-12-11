import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/" onClick={
                        async ()=>{
                          setTimeout(() => {
                            document.getElementById('what-is-vaip').scrollIntoView({ behavior: "smooth" });
                            // console.log('timourt')
                          }, 0);
                          }}>Whats is vAIp?</Link>
        </li>
        <li>
          <Link to="/" onClick={
                        async ()=>{
                          setTimeout(() => {
                            document.getElementById('features').scrollIntoView({ behavior: "smooth" });
                            // console.log('timourt')
                          }, 0);
                          }}>Features</Link>
        </li>
        <li>
          <Link to="/" onClick={
                        async ()=>{
                          setTimeout(() => {
                            document.getElementById('team').scrollIntoView({ behavior: "smooth" });
                            // console.log('timourt')
                          }, 0);
                          }}>Team</Link>
        </li>
        {/* <li>
          <Link to="/">Contact us</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default FooterNav;