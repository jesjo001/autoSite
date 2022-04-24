
import React from 'react';
import styles from './newHome.module.css'
import {
    Stack,
    Box,
    Button
} from '@mui/material';

export default function componentName() {
  return (
    <div className={styles.home}>
          <div className={styles.jombotron}>
              <div className={styles.jomInfo}>
                  <h3 className={styles.jomInfoTitle}>
                      Industry Leading <span style={{ fontStyle: 'bold', fontWeight: 600 }}>Software</span> Services Solutions
                  </h3>
                  <Button variant="outlined" size="large" style={{ color: 'white', borderRadius: 20, backgroundColor: '#91B7DC' }}>Get a Quotation</Button>
              </div>
              <div className={styles.jomImage}>
                  <img src={process.env.PUBLIC_URL + "/assets/Device.png"} />
              </div>
          </div>
          <div className={styles.logoArea}>
              <img src={process.env.PUBLIC_URL + "/assets/logos/Logo 1.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "/assets/logos/Logo 2.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "/assets/logos/Logo 3.png"} alt="" />
              <img src={process.env.PUBLIC_URL + "/assets/logos/Logo 4.png"} alt="" />
              <img src={process.env.PUBLIC_URL + "/assets/logos/Logo 5.png"} alt="" />
              <img src={process.env.PUBLIC_URL + "/assets/logos/Logo 6.png"} alt="" />
          </div>
    </div>
  );
}
