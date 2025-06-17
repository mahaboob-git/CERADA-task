import React, { useState } from "react";
import styles from "./Header.module.css";
import one from "../../../assets/headerIcon/1.png";
import two from "../../../assets/headerIcon/2.png";
import three from "../../../assets/headerIcon/3.png";
import four from "../../../assets/headerIcon/4.png";
import five from "../../../assets/headerIcon/5.png";
import logo from "../../../assets/headerIcon/logo.png";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className={styles.header}>
      <div className={styles.scrollBanner}>
        <p className={styles.scrollText}>
          You can participate in person at{" "}
          <span className={styles.highlight}>Kuala Lumpur, Malaysia</span> or{" "}
          <span className={styles.highlight}>Virtually</span> from your home or
          office.
        </p>
      </div>
      {/* second section */}
      <div className={styles.topLinks}>
        <div className={styles.linkItem}>
          <img src={one} alt="Language" />
          <span>Select Language</span>
        </div>
        <div className={styles.linkItem}>
          <img src={two} alt="Register" />
          <span>Register Now</span>
        </div>
        <div className={styles.linkItem}>
          <img src={three} alt="Mail" />
          <a href="mailto:info@icetmrs.com">info@icetmrs.com</a>
        </div>
        <div className={styles.linkItem}>
          <img src={four} alt="WhatsApp" />
          <a
            href="https://wa.me/918072381719"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 8072381719
          </a>
        </div>
        <div className={styles.linkItem}>
          <img src={five} alt="Academic Partner" />
          <span>Apply for Academic Partner</span>
        </div>
      </div>
      {/* third section */}
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger */}
        <div className={styles.hamburger} onClick={toggleMenu}>
         {menuOpen ?  "✕" : "☰"} 
        </div>

        <nav
          className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
        >
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Call for Papers</a>
          <a href="#">Paper Submission</a>
          <a href="#">Publication</a>
          <a href="#">Registration</a>
          <a href="#">Venue</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <button className={styles.loginBtn}>Login</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
