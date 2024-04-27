"use client"

import styles from "./hours.module.css";
import * as React from 'react';


export default function customhome () {
  const redirectToHoursPage = () => {
    window.location.href = "https://dining.harvard.edu/campus-dining/undergraduate-dining/hours-interhouse-restrictions";
  };

  return (
    <div>
      <div className={styles.housebox}>
        <h1>Kirkland House</h1>
      </div>

       <div className={styles.hoursbox} onClick={redirectToHoursPage} style={{ cursor: 'pointer' }}>
        <h1>Open for Brunch until 2:00 pm</h1>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.soupcard}>
          <div>
            <img
              src="https://simple-veganista.com/wp-content/uploads/2013/01/healthy-sweet-potato-kale-soup-5.jpg"
              alt="Sweet Potato & Kale Soup Image"
              className={styles.soupimage}
            />
            <h1>Sweet Potato & Kale Soup</h1>
          </div>
        </div>
        <div className={styles.entreecard}>
          <div>
            <img
              src="https://bromabakery.com/wp-content/uploads/2020/07/Perfect-Chocolate-Chip-Pancakes-4.jpg"
              className={styles.entreeimage}
            />
            <h1>Chocolate Chip Pancakes</h1>
          </div>
        </div>
        <div className={styles.dessertcard}>
          <div>
            <img
              src="https://www.bigbearswife.com/wp-content/uploads/2020/09/Caramel-Apple-Tea-Cake-7.png"
              className={styles.dessertimage}
            />
            <h1>Caramel Apple Tea Bread</h1>
          </div>
        </div>
      </div>

      <div className={styles.updatebutton}>
  <a href="http://localhost:3000/UpdateForm">
    <button>Propose a Menu Update!</button>
      </a>
      </div>

      <div className={styles.newsbox}>
        <div className={styles.livenews}>
          <h1>Live News</h1>
        </div>
        <div className={styles.newsinfo}>
          <ul>
            <li>Catch up with your blocking group this week at Community Night!</li>
            <li>Get excited for Yardfest happening April 7th! HEADLINER: TINASHE</li>
            <li>Check your student emails to host an admitted student for visitas!</li>
          </ul>
        </div>
      </div>
      <div className={styles.interhousehours}>
        <div className={styles.interhours}>
            <h1>Available Interhouse</h1>
        </div>
        <div className={styles.interhouses}>
            <ul>
                <li>Cabot</li>
                <li>Currier</li>
                <li>Dunster</li>
                <li>Eliot</li>
                <li>Mather</li>
                <li>Leverett (with resident)</li>
                <li>Quincy (with resident)</li>
            </ul>
        </div>
      </div>
    </div>
  );
}