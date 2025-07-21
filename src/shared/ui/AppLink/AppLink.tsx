import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.css';

interface AppLinkProps extends LinkProps {
  children: React.ReactNode;
}

const AppLink: React.FC<AppLinkProps> = (props) => {
  const { to, children, ...otherProps } = props;
  return (
    <Link to={to} className={styles.appLink} {...otherProps}>
      {children}
    </Link>
  );
};

export default AppLink; 