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
          <Link to="/">Whats is vAIp?</Link>
        </li>
        <li>
          <Link to="/">Features</Link>
        </li>
        <li>
          <Link to="/">Team</Link>
        </li>
        <li>
          <Link to="/">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;