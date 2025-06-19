import styles from "./Session.module.css";
import sessionImg from '../../../assets/bannerAssets/banner.jpg'

const Session = () => {
  return (
    <section className={styles.aboutSection} data-aos="fade-up">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2>Session Tracks/Call for Papers</h2>
          <p>
            <b>Call for Submissions:</b> Topics of interest include, but are not
            limited to:
          </p>
          <p>
            Explore the diverse and dynamic session tracks at ICLSMHA-2026! We
            have curated a rich blend of educational and interdisciplinary
            presentations designed to inspire innovation and foster
            collaboration. Join us to engage with cutting-edge research and
            vibrant discussions spanning a wide spectrum of life sciences and
            healthcare topics. Call for Submissions:
          </p>
          {/* ➤ Session List */}
          <ul className={styles.sessionList}>
            <li>➤ <b>Session 1:</b> Pharmacology and Toxicology</li>
            <li>➤ <b>Session 2:</b> COVID-19</li>
            <li>➤ <b>Session 3:</b> Emerging Frontiers in Life Sciences and Cross-Disciplinary Innovation</li>
            <li>➤ <b>Session 4:</b> Smart Technologies and Digital Innovation in Healthcare and Life Sciences</li>
            <li>➤ <b>Session 5:</b> Healthcare and Medicine: A Multidisciplinary Perspective</li>
            <li>➤ <b>Session 6:</b> Public Health, Policy and Epidemiology</li>
            <li>➤ <b>Session 7:</b> Health Impacts of Climate and Environmental Change</li>
            <li>➤ <b>Session 8:</b> Food Security, Nutrition and Sustainable Agriculture</li>
            <li>➤ <b>Session 9:</b> Regenerative and Stem Cell Therapies</li>
            <li>➤ <b>Session 10:</b> Advanced Imaging and Biophotonics</li>
            <li>➤ <b>Session 11:</b> Advances in Biomechanics and Biomedical Technologies</li>
            <li>➤ <b>Session 12:</b> Neurosciences and Mental Health</li>
            <li>➤ <b>Session 13:</b> Emerging Infectious Diseases and Integrated Health Strategies</li>
            <li>➤ <b>Session 14:</b> Reproductive, Maternal and Pediatric Health</li>
            <li>➤ <b>Session 15:</b> Behavioral Sciences and Healthcare Psychology</li>
            <li>➤ <b>Session 16:</b> Healthcare Systems and Management</li>
          </ul>
        </div>
        <div className={styles.imageContent}>
          <img src={sessionImg} alt="About ICLSMHA-2026" />
        </div>
      </div>
      {/* deadline section */}
       <div className={styles.deadlineCard}>
      <h3>Submission Deadlines</h3>
      <ul>
        <li><strong>Early Bird registration deadline:</strong> 31 Aug 2025</li>
        <li><strong>Abstract submission:</strong> 30 Sep 2025</li>
        <li><strong>Full paper submission:</strong> 31 Oct 2025</li>
        <li><strong>Final Registration:</strong> 30 Nov 2025</li>
        <li>
          For detailed submission guidelines, please visit the{" "}
          <a href="#" className={styles.link}>Submission Page</a>.
        </li>
      </ul>
    </div>
    </section>
  );
};

export default Session;
