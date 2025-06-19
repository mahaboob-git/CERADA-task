import styles from "./Register.module.css";
import registrationImg from '../../../assets/bannerAssets/reg.png'; // replace with your actual image path
import pub1 from '../../../assets/bannerAssets/pub1.png'; // replace with your actual image path
import pub2 from '../../../assets/bannerAssets/pub2.png'; // replace with your actual image path
import pub3 from '../../../assets/bannerAssets/2.png'; // replace with your actual image path

const Register = () => {
  return (
    <section className={styles.registrationSection} data-aos="fade-up">
      <div className={styles.card}>
        <h2>Registration Steps</h2>
        <div className={styles.imageWrapper}>
          <img
            src={registrationImg}
            alt="Registration process"
            className={styles.image}
          />
        </div>
         {/* Proceedings & Publications Card */}
        <div className={styles.publicationCard}>
          <h3>Proceedings & Publications</h3>
          <div className={styles.logoContainer}>
            <img src={pub3} alt="Logo 1" />
            <img src={pub1} alt="Logo 3" />
            <img src={pub2} alt="Logo 2" />
          </div>
          <p className={styles.note}>
            <strong>Note:</strong> ICLSMHA - 2026 Proceedings will be submitted to the Web of Science Book Citation Index (BkCI) and Scopus for evaluation and indexing purposes (T&C apply).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
