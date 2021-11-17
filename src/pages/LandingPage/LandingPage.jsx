import React from "react";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <header>
        <a href="#" class="logo">
          Medi4all
        </a>
        <nav class="navbar">
          <a href="#home">Home</a>
          <a href="#aboutus">About Us</a>
          <a href="#services">Services</a>
          <a href="#login">Log In</a>
        </nav>
      </header>
      <section class="home" id="home">
        <div class="content">
          <h3>FUTURE IS HERE,</h3>
          <h3>Manage Your Health</h3>
          <h3>All At One Place!</h3>
          <p>
            "Our medical specialists care about you & your family's health"
            <br />
            Now your online account is a powerful tool for managing every aspect
            of your health.
          </p>
          <a href="#" class="btn">
            Register Now
          </a>
        </div>
        <div class="image">
          <img src="laptop_mockup.png" alt="" />
        </div>
      </section>

      <section class="about" id="about">
        <h1 class="heading">ABOUT US</h1>
        <div class="column">
          <div class="image">
            <img src="aboutus.jpeg" alt="" />
          </div>
          <div class="content">
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
            <div class="button">
              <a href="#" class="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="services" id="services">
        <h1 class="heading">SERVICES</h1>
        <div class="box-container">
          <div class="box">
            <img src="tele-health.jpg" alt="" />
            <h3>Online Consultations</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              nulla! Velit, et. Unde a dolorum consectetur officiis facere
              magnam totam amet praesentium nesciunt? Facere, officia sapiente
              quam vero doloremque sunt?
            </p>
            <a href="#" class="btn">
              Read More
            </a>
          </div>
          <div class="box">
            <img src="20170523-prescription.jpg" alt="" />
            <h3>Manage Prescriptions</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              nulla! Velit, et. Unde a dolorum consectetur officiis facere
              magnam totam amet praesentium nesciunt? Facere, officia sapiente
              quam vero doloremque sunt?
            </p>
            <a href="#" class="btn">
              Read More
            </a>
          </div>
          <div class="box">
            <img src="medical-records-waf.jpg" alt="" />
            <h3>Track Medical Records</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              nulla! Velit, et. Unde a dolorum consectetur officiis facere
              magnam totam amet praesentium nesciunt? Facere, officia sapiente
              quam vero doloremque sunt?
            </p>
            <a href="#" class="btn">
              Read More
            </a>
          </div>
          <div class="box">
            <img src="medical-news.jpg" alt="" />
            <h3>Read Health Articles</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              nulla! Velit, et. Unde a dolorum consectetur officiis facere
              magnam totam amet praesentium nesciunt? Facere, officia sapiente
              quam vero doloremque sunt?
            </p>
            <a href="#" class="btn">
              Read More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
