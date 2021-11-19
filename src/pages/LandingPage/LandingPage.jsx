import React from "react";
import classes from "./LandingPage.module.scss";
import Medi4allLogo from "../../img/medi4alllogo.png";
import TeleHealth from "../../img/tele-health.jpg";
import PrescriptionImg from "../../img/20170523-prescription.jpg";
import MedRecords from "../../img/medical-records-waf.jpg";
import MedNews from "../../img/medical-news.jpg";
import { Link, useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  return (
    <div className={classes.landing_page}>
      <header className={classes.lp_header}>
        <a href="#home" className={classes.logo}>
          <img className={classes.logo_img} src={Medi4allLogo} alt="" />
          <span>
            Medi<span className={classes.four}>4</span>all
          </span>
        </a>
        <nav className={classes.navbar}>
          <a className={classes.nav_item} href="#home">
            Home
          </a>
          <a className={classes.nav_item} href="#services">
            Services
          </a>
          <a className={classes.nav_item} href="#about">
            About Us
          </a>
          <Link to="/login" className={classes.nav_item}>
            Log In
          </Link>
          <a className={classes.nav_item} href="#lr_section">
            Register
          </a>
        </nav>
      </header>
      <section className={classes.home_banner} id="home">
        <div className={classes.home_overlay} />
        <div className={classes.home_content}>
          <h3>
            Manage every aspect <br /> of your health information <br /> with
            our services.
          </h3>

          <div className={classes.btn_container}>
            <button
              onClick={() => history.push("/registration")}
              className={classes.reg_btn}
            >
              Register
            </button>
          </div>
        </div>
      </section>

      <section className={classes.services} id="services">
        <h1 className={classes.services_heading}>SERVICES</h1>
        <div className={classes.box_container}>
          <div className={classes.service_box}>
            <div className={classes.srvimg_container}>
              <img className={classes.service_img} src={TeleHealth} alt="" />
            </div>
            <div className={classes.srv_imgoverlay} />
            <h3 className={classes.title}>Online Consultations</h3>
            <p className={classes.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              nulla! Velit, et. Unde a dolorum consectetur officiis facere
              magnam totam amet praesentium nesciunt? Facere, officia sapiente
              quam vero doloremque sunt?
            </p>
            <a href="#" className={classes.btn}>
              Read More
            </a>
          </div>
          <div className={classes.service_box}>
            <div className={classes.srvimg_container}>
              <img
                className={classes.service_img}
                src={PrescriptionImg}
                alt=""
              />
            </div>
            <div className={classes.srv_imgoverlay} />
            <h3 className={classes.title}>Manage Prescriptions</h3>
            <p className={classes.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              nulla! Velit, et. Unde a dolorum consectetur officiis facere
              magnam totam amet praesentium nesciunt? Facere, officia sapiente
              quam vero doloremque sunt?
            </p>
            <a href="#" className={classes.btn}>
              Read More
            </a>
          </div>
          <div className={classes.service_box}>
            <div className={classes.srvimg_container}>
              <img className={classes.service_img} src={MedRecords} alt="" />
            </div>
            <div className={classes.srv_imgoverlay} />
            <h3 className={classes.title}>Track Medical Records</h3>
            <p className={classes.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              nulla! Velit, et. Unde a dolorum consectetur officiis facere
              magnam totam amet praesentium nesciunt? Facere, officia sapiente
              quam vero doloremque sunt?
            </p>
            <a href="#" className={classes.btn}>
              Read More
            </a>
          </div>
          <div className={classes.service_box}>
            <div className={classes.srvimg_container}>
              <img className={classes.service_img} src={MedNews} alt="" />
            </div>
            <div className={classes.srv_imgoverlay} />
            <h3 className={classes.title}>Read Health Articles</h3>
            <p className={classes.description}>
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

      <section className={classes.about_us} id="about">
        <div className={classes.aboutus_overlay} />
        <div className={classes.content}>
          <h1 className={classes.heading}>ABOUT US</h1>
          <p className={classes.content_body}>
            We at Medi4all remote healthcare system have a vision of a future in
            which technology helps people to be less stressed about their
            medical data in cases of emergency or critical time.We have set our
            aim to make use technology to provide care for patients effectively.
            We believe Medi4all will transform healthcare system.Whether you are
            patient living at home,a hospital or you are a care
            provider.Medi4all will surely make a difference to you.
          </p>
          <button className={classes.read_more_btn}>Read More</button>
        </div>
      </section>
      <section className={classes.login_register} id="lr_section">
        <h3 className={classes.lr_heading}>Get started with us</h3>
        <div className={classes.lr_container}>
          <div className={classes.lr_box}>
            <div className={classes.lr_head}>For users</div>
            <div className={classes.lr_content}>
              Manage your health information from your account, available to you
              at all times.
            </div>
            <div className={classes.lr_buttons}>
              <button
                onClick={() => history.push("/login")}
                className={classes.lr_loginbtn}
              >
                Login
              </button>
              <button
                onClick={() => history.push("/registration")}
                className={classes.lr_regbtn}
              >
                Register
              </button>
            </div>
          </div>
          <div className={classes.lr_box}>
            <div className={classes.lr_head}>For Doctors</div>
            <div className={classes.lr_content}>
              For doctors affiliated with institutions or having their own
              clinics to manage appointments and hassle free access to a
              patient's history.
            </div>
            <div className={classes.lr_buttons}>
              <button
                onClick={() => history.push("/login")}
                className={classes.lr_loginbtn}
              >
                Login
              </button>
              <button
                onClick={() => history.push("/registration")}
                className={classes.lr_regbtn}
              >
                Register
              </button>
            </div>
          </div>
          <div className={classes.lr_box}>
            <div className={classes.lr_head}>For Institutions</div>
            <div className={classes.lr_content}>
              For institutions to have a proper flow of information and to
              manage and redirect appointments.
            </div>
            <div className={classes.lr_buttons}>
              <button
                onClick={() => history.push("/login")}
                className={classes.lr_loginbtn}
              >
                Login
              </button>
              <button
                onClick={() => history.push("/registration")}
                className={classes.lr_regbtn}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
