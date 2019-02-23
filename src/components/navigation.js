import React from 'react';
import Link from 'gatsby-link';
import styles from './navigation.module.css';

export default () => (
  <nav role='navigation'>
    <ul className={styles.navigation}>
      <li className={styles.buttonSkipLink}>
        {/* This won't work till we can get the <main> tag in place */}
        <Link to={{hash: '#main'}}> Skip navigation
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/'>
        <img
          src='/images/body/Logo.svg'
          alt='Local Hazardous Waste Management Program'
          width='268'
          height='48'></img>
        </Link>
      </li>
      <li className={styles.navigationDropdown}>
        <Link to='/household/'> Household
        </Link>
        {/*        <ul className={styles.navigation}>
                                                                          <li className={styles.navigationDropItem}>
                                                                            <Link to='/household/'> Find hazardous waste products
                                                                            </Link>
                                                                          </li>
                                                                          <li className={styles.navigationDropItem}>
                                                                            <Link to='/household/'> Disposal options
                                                                            </Link>
                                                                          </li>
                                                                          <li className={styles.navigationDropItem}>
                                                                            <Link to='/household/'> Safer home products
                                                                            </Link>
                                                                          </li>
                                                                          <li className={styles.navigationDropItem}>
                                                                            <Link to='/household/'> Home collection
                                                                            </Link>
                                                                          </li>
                                                                          <li className={styles.navigationDropItem}>
                                                                            <Link to='/household/'> Incentives & home inspections
                                                                            </Link>
                                                                          </li>
                                                                </ul> */}
      </li>
      <li className={styles.navigationDropdown}>
        <Link to='/businesses/'> Businesses
        </Link>
        {/*       <ul className={styles.navigation}>
                                                                          <li className={styles.navigationDropItem}>
                                                                            <Link to='/household/'> Hazardous waste product library
                                                                            </Link>
                                                                          </li>
                                                                          <li className={styles.navigationDropItem}>
                                                                            <Link to='/household/'> Dispose hazardous waste
                                                                            </Link>
                                                                          </li>
                                                                          <li className={styles.navigationDropItem}>
                                                                            <Link to='/household/'> Produce less hazardous waste
                                                                            </Link>
                                                                          </li>
                                                                          <li className={styles.navigationDropItem}>
                                                                            <Link to='/household/'> Business incentives & grants
                                                                            </Link>
                                                                          </li>
                                                                          <li className={styles.navigationDropItem}>
                                                                            <Link to='/household/'> Consultation
                                                                            </Link>
                                                                          </li>
                                                                          <li className={styles.navigationDropItem}>
                                                                            <Link to='/household/'> IMEX
                                                                            </Link>
                                                                          </li>
                                                                </ul>*/}
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
