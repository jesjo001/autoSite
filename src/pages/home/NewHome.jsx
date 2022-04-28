
import React from 'react';
import styles from './newHome.module.css'
import {
    Stack,
    Box,
    Button
} from '@mui/material';

import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import LanguageIcon from '@mui/icons-material/Language';

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
          <div>
              <div className={styles.logoArea}>
                  <img src={process.env.PUBLIC_URL + "/assets/logos/Logo 1.png"} alt="" />
                  <img src={process.env.PUBLIC_URL + "/assets/logos/Logo 2.png"} alt="" />
                  <img src={process.env.PUBLIC_URL + "/assets/logos/Logo 3.png"} alt="" />
                  <img src={process.env.PUBLIC_URL + "/assets/logos/Logo 4.png"} alt="" />
                  <img src={process.env.PUBLIC_URL + "/assets/logos/Logo 5.png"} alt="" />
                  <img src={process.env.PUBLIC_URL + "/assets/logos/Logo 6.png"} alt="" />
              </div>
              <div className={styles.brief}>
                  <h6>Trusted by the world’s best.</h6>
              </div>
          </div>

          <div className={styles.containerRow}>
              <div className={styles.section}>
                  <h5 className={styles.firstTitle}> The simplest way to have a professional webpage.                  </h5>   
                  <div className={styles.firstTextArea}> 
                      Get all the benefits of an in-wall or in-ceiling speaker system without any of the hassle. Just replace a few lights around your house, and start streaming crisp, clear audio, everywhere.
                  </div>
              </div>
              <div style={{ paddingRight: 20}}>
                  <img src={process.env.PUBLIC_URL + "/assets/Group 6.png"} />
              </div>
          </div>

          <div className={styles.containerRowTwo}>
              <div >
                  <img src={process.env.PUBLIC_URL + "/assets/Devices.png"} />
              </div>
              <div >
                  <h5 className={styles.firstTitle}> The simplest way to have a professional webpage.                  </h5>
                  <div className={styles.firstTextArea}>
                      Get all the benefits of an in-wall or in-ceiling speaker system without any of the hassle. Just replace a few lights around your house, and start streaming crisp, clear audio, everywhere.
                  </div>
              </div>
          </div>
          
          <div className={styles.containerRow}>
              <div className={styles.section}>
                  <h5 className={styles.firstTitle}> The simplest way to have a professional webpage.                  </h5>
                  <div className={styles.firstTextArea}>
                      Get all the benefits of an in-wall or in-ceiling speaker system without any of the hassle. Just replace a few lights around your house, and start streaming crisp, clear audio, everywhere.
                  </div>
              </div>
              <div style={{ paddingRight: 20 }}>
                  <img src={process.env.PUBLIC_URL + "/assets/Group 5.png"} />
              </div>
          </div>
          <div className={styles.servicesSection}>
              <div className={styles.services}>Our Services</div>
              <div className={styles.servicesTitle}>We Provide a wide range of creative service</div>
              
              <div className={styles.serviceList}>
                  <div className={styles.singleService}>
                      <div className={styles.singleImg}>
                          <ScreenshotMonitorIcon sx={{ fontSize: 60 }} color="disabled" />
                      </div>
                      <div className={styles.serviceSection} >
                          <h5 className={styles.serviceTitle} >
                              Web development
                          </h5>
                          <div className={styles.serviceContent}>
                              A digital agency isn't here to replace your internal team, we're here to partner
                          </div>
                      </div>
                  </div>

                  <div className={styles.singleService}>
                      <div className={styles.singleImg}>
                          <DesktopWindowsIcon sx={{ fontSize: 60 }} color="disabled" />
                      </div>
                      <div className={styles.serviceSection} >
                          <h5 className={styles.serviceTitle} >
                              Interface Design.
                          </h5>
                          <div className={styles.serviceContent}>
                              A digital agency isn't here to replace your internal team, we're here to partner
                          </div>
                      </div>
                  </div>

                  <div className={styles.singleService}>
                      <div className={styles.singleImg}>
                          <BusinessCenterIcon sx={{ fontSize: 60 }} color="disabled" />
                      </div>
                      <div className={styles.serviceSection} >
                          <h5 className={styles.serviceTitle} >
                              Business Consulting.
                          </h5>
                          <div className={styles.serviceContent}>
                              A digital agency isn't here to replace your internal team, we're here to partner
                          </div>
                      </div>
                  </div>
              </div>

              <div className={styles.serviceList}>
                  <div className={styles.singleService}>
                      <div className={styles.singleImg}>
                          <DesignServicesIcon sx={{ fontSize: 60 }} color="disabled" />
                      </div>
                      <div className={styles.serviceSection} >
                          <h5 className={styles.serviceTitle} >
                              UX Research.
                          </h5>
                          <div className={styles.serviceContent}>
                              Our team of 10+ professionals will conduct a thorough research that guarantees the best user experience.  We have experience in conducting user research for all industries, including retail, banking, healthcare and more.
                          </div>
                      </div>
                  </div>

                  <div className={styles.singleService}>
                      <div className={styles.singleImg}>
                          <AppSettingsAltIcon sx={{ fontSize: 60 }} color="disabled" />
                      </div>
                      <div className={styles.serviceSection} >
                          <h5 className={styles.serviceTitle} >
                              App development
                          </h5>
                          <div className={styles.serviceContent}>
                              We are a team of developers who build high-quality mobile apps for iPhone, iPad, and Android devices. We have a strong design expertise and have built apps from scratch to fulfilling large-scale client requirements.
                          </div>
                      </div>
                  </div>

                  <div className={styles.singleService}>
                      <div className={styles.singleImg}>
                          <LanguageIcon sx={{ fontSize: 60 }} color="disabled" />
                      </div>
                      <div className={styles.serviceSection} >
                          <h5 className={styles.serviceTitle} >
                              Web development
                          </h5>
                          <div className={styles.serviceContent}>
                             We offer a comprehensive range of packages to build professional websites at a fraction of the cost. We offer everything from basic websites to high-end dynamic web applications that can be customized to suit the individual needs of our clients.
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className={styles.clientColumn}>
              <div className={styles.services}>Our Services</div>
              <div className={styles.largeTitle}>What our clients says about us. </div>
              <div className={styles.testimonialSection}>
                  <div>
                      <p style={{ padding: 30, lineHeight: 2 }}> <q> <i>Id veniam! Modi aspernatur dapibus similique molestie dolores consequatur, tortor montes rutrum. Blandit fames tempora diamlorem hendrerit, pariatur nesciunt erat est class temporibus eos donec a ante dignissim! Nisi fuga. Impedit aliquip duis libero voluptatibus varius! Arcu. Commodo vel quasi, ratione corporis inceptos lorem, debitis, accumsan perferendis iusto! Labore praesentium torquent id, perferendis ultrices fuga hic, sed, sit earum cillum.</i></q></p>
                      <div className={styles.testName}>
                          <h2 style={{marginBottom: 0}}>Peace Ashika</h2>
                          <span>C.E.O, Peace Digital</span>
                      </div>
                  </div>
                  <div>
                      <p style={{ padding: 30,lineHeight: 2 }}> <q> <i> Id veniam! Modi aspernatur dapibus similique molestie dolores consequatur, tortor montes rutrum. Blandit fames tempora diamlorem hendrerit, pariatur nesciunt erat est class temporibus eos donec a ante dignissim! Nisi fuga. Impedit aliquip duis libero voluptatibus varius! Arcu. Commodo vel quasi, ratione corporis inceptos lorem, debitis, accumsan perferendis iusto! Labore praesentium torquent id, perferendis ultrices fuga hic, sed, sit earum cillum.</i></q></p>
                      <div className={styles.testName}>
                          <h2 style={{ marginBottom: 0 }}>Peace Ashika</h2>
                          <span>C.E.O, Peace Digital</span>
                      </div>
                  </div>
              </div>
          </div>

          <div className={styles.aboutRow} style={{ margin: -30, padding: 60, paddingTop: 0}}>
              <div className={styles.aboutSection}>
                  <h2 sty>About Us</h2>
                  <p style={{ width: 400, paddingRight: 80, lineHeight: 2 }}>We are an independent IT consultancy, set up in 1991, operating across Europe with over 700 highly qualified people delivering for our clients every day. Since then, we have been working with clients from many sectors. Retail, engineering, pharmaceutical, real estate, transportation, utilities, financial, are some of them. We are Digital Transformation Specialists who strive to be a partner of choice.</p>
              </div>
              <div className={styles.aboutSection}>
                  <img src={process.env.PUBLIC_URL + "/assets/about.jpg"} alt="" />
              </div>
          </div>

          <div className={styles.outroRow} style={{ backgroundColor: '' }}>
              <div className={styles.outro}>
                  <div>
                      <h5 style={{ marginBottom: 0, paddingBottom: 0 }}>For Every type of Business</h5>
                      <h2 style={{ marginTop: 0, width: 400}}>Entrust Your Project to Our Best Team of Professionals</h2>
                  </div>
                  <div>
                      <Button variant="outlined" size="large" style={{ color: 'white', borderRadius: 20, backgroundColor: '#91B7DC' }}>Contact Us</Button>
                  </div>
                  

              </div>

          </div>


    </div>
  );
}
