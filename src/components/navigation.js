import React from 'react';
import Link from 'gatsby-link';
import styles from './navigation.module.css';

export default () => (
  <nav role='navigation'>
    <a href='#' class='brand-logo'><img
                                     src='images/body/Logo.svg'
                                     class='responsive-img nav-logo'
                                     width='268'
                                     height='48' /></a>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to='/household/'> Household
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/businesses/'> Businesses
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/news-events/'> News & Events
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/language-resources/'> Language Resources
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/customer-service/'> Customer Service
        </Link>
      </li>
    </ul>
  </nav>
);
