import styles from "./Footer.module.css";
import logo from "../../../assets/bannerAssets/1.png"; // replace with your actual logo
import { FaHome, FaMoneyCheckAlt, FaFileAlt, FaRegClipboard, FaGavel, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        {/* Section 1: Logo and Info */}
        <div className={styles.footerSection}>
          <img src={logo} alt="ICETMRS Logo" className={styles.logo} />
          <p>“International Conference on Emerging Trends in Multidisciplinary Research Studies (ICETMRS)”</p>
          <p><span>Theme:</span> Sustainable Learning Through Multidisciplinary Research and Technological Innovation</p>
          <p><span>Organized by:</span> Confworld Educational Research and Development Association</p>
        </div>

        {/* Section 2: Navigation Links */}
        <div className={styles.footerSection}>
          <h4>Navigation Links</h4>
          <ul>
            <li><FaHome /> Home</li>
            <li><FaInfoCircle /> About</li>
            <li><FaMoneyCheckAlt /> Available Payment</li>
            <li><FaFileAlt /> Instructions</li>
            <li><FaGavel /> Terms & Conditions</li>
            <li><FaRegClipboard /> Guidelines</li>
          </ul>
        </div>

        {/* Section 3: Useful Links */}
        <div className={styles.footerSection}>
          <h4>Useful Links</h4>
          <ul>
            <li><FaFileAlt /> Call for Papers</li>
            <li><FaRegClipboard /> Paper Submission</li>
            <li><FaInfoCircle /> Publication</li>
            <li><FaMoneyCheckAlt /> Registration Fee</li>
            <li><FaEnvelope /> Enquiries</li>
          </ul>
        </div>

        {/* Section 4: Get in Touch */}
        <div className={styles.footerSection}>
          <h4>Get In Touch</h4>
          <ul>
            <li><FaPhoneAlt /> +91 8072381719</li>
            <li><FaEnvelope /> info@icetmrs.com</li>
            <li><FaMapMarkerAlt /> Kuala Lumpur, Malaysia</li>
          </ul>
          <div className={styles.organizerCard}>
            <p><strong>Organizer Address</strong></p>
            <p>No.147/383A, Second Floor, Paper Mills Road,<br />
              Peravallur, Chennai-600082,<br />
              Tamil Nadu, India.</p>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className={styles.socialSection}>
        <span>Follow us on Social Media</span>
        <div className={styles.socialIcons}>
          <FaFacebook />
          <FaYoutube />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>Copyright © 2025 CERADA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
