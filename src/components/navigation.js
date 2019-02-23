import React from 'react';
import Link from 'gatsby-link';
import styles from './navigation.module.css';

export default () => (
  <nav role='navigation'>
    <ul className={styles.navigation}>
    <li className={styles.buttonSkipLink}>
    <Link to='#main'>Skip
    </Link>
    </li>
    <li className={styles.navigationItem}>
    <Link to='/'><img src='/images/body/Logo.svg' alt='Local Hazardous Waste Management Program' width='268' height='48'></Link>
    </li>
      <li className={styles.navigationItem}>
        <Link to='/household/'> Household <img alt='' src='/images/body/ic_keyboard_arrow_down.png' />
        </Link>
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link to='/household/'> Find hazardous waste products
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to='/household/'> Disposal options
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to='/household/'> Safer home products
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to='/household/'> Home collection
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to='/household/'> Incentives &amp; home inspections
            </Link>
          </li>
        </ul>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/businesses/'> Businesses <img alt='' src='/images/body/ic_keyboard_arrow_down.png' />
        </Link>
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link to='/household/'> Hazardous waste product library
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to='/household/'> Dispose hazardous waste
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to='/household/'> Produce less hazardous waste
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to='/household/'> Business incentives &amp; grants
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to='/household/'> Consultation
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to='/household/'> IMEX
            </Link>
          </li>
        </ul>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/news-events/'> News &amp; Events
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
