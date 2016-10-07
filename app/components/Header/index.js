import React from 'react';
import styles from './index.css';

const Header = () => {
  const header = `row ${styles.header}`;
  return (
    <div className={header}>
      <h2>MyHash</h2>
      <p className="col-md-10 col-md-offset-1">Change the hashtag and hit submit in order to load in real-time the newest tweets related.</p>
    </div>
  );
};

export default Header;
