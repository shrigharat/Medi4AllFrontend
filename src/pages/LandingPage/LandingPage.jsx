import React from "react";
import classes from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={classes.landing_page}>
      <header className={classes.lp_header}>
        <a href="#" className={classes.logo}>
          Medi4all
        </a>
        <nav className={classes.navbar}>
          <a href="#home">Home</a>
          <a href="#aboutus">About Us</a>
          <a href="#services">Services</a>
          <a href="#login">Log In</a>
        </nav>
      </header>
      <section className={classes.home} id="home">
        <div className={classes.content}>
          <h3>FUTURE IS HERE,</h3>
          <h3>Manage Your Health</h3>
          <h3>All At One Place!</h3>
          <p>
            "Our medical specialists care about you & your family's health"
            <br />
            Now your online account is a powerful tool for managing every aspect
            of your health.
          </p>
          <a href="#" className={classes.btn}>
            Register Now
          </a>
        </div>
        <div className={classes.image}>
          <img src="laptop_mockup.png" alt="" />
        </div>
      </section>

      <section className={classes.about} id="about">
        <h1 className={classes.heading}>ABOUT US</h1>
        <div className={classes.column}>
          <div className={classes.image}>
            <img src="aboutus.jpeg" alt="" />
          </div>
          <div className={classes.content}>
            <h3>Remote Healthcare Platform</h3>
            <p>
              We at Medi4all remote healthcare system have a vision of a future
              in which technology helps people to be less stressed about their
              medical data in cases of emergency or critical time.We have set
              our aim to make use technology to provide care for patients
              effectively. We believe Medi4all will transform healthcare
              system.Whether you are patient living at home,a hospital or you
              are a care provider.Medi4all will surely make a difference to you.
            </p>
            <div className={classes.button}>
              <a href="#" className={classes.btn}>
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.services} id="services">
        <h1 className={classes.heading}>SERVICES</h1>
        <div className={classes["box-container"]}>
          <div className={classes.box}>
            <img src="tele-health.jpg" alt="" />
            <h3>Online Consultations</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              nulla! Velit, et. Unde a dolorum consectetur officiis facere
              magnam totam amet praesentium nesciunt? Facere, officia sapiente
              quam vero doloremque sunt?
            </p>
            <a href="#" className={classes.btn}>
              Read More
            </a>
          </div>
          <div className={classes.box}>
            <img src="20170523-prescription.jpg" alt="" />
            <h3>Manage Prescriptions</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              nulla! Velit, et. Unde a dolorum consectetur officiis facere
              magnam totam amet praesentium nesciunt? Facere, officia sapiente
              quam vero doloremque sunt?
            </p>
            <a href="#" className={classes.btn}>
              Read More
            </a>
          </div>
          <div className={classes.btn}>
            <img src="medical-records-waf.jpg" alt="" />
            <h3>Track Medical Records</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              nulla! Velit, et. Unde a dolorum consectetur officiis facere
              magnam totam amet praesentium nesciunt? Facere, officia sapiente
              quam vero doloremque sunt?
            </p>
            <a href="#" className={classes.btn}>
              Read More
            </a>
          </div>
          <div className={classes.box}>
            <img src="medical-news.jpg" alt="" />
            <h3>Read Health Articles</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              nulla! Velit, et. Unde a dolorum consectetur officiis facere
              magnam totam amet praesentium nesciunt? Facere, officia sapiente
              quam vero doloremque sunt?
            </p>
            <a href="#" className={classes.btn}>
              Read More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
