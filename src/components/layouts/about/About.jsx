import styles from "./About.module.css";
import aboutImg from "../../../assets/bannerAssets/about.png"; // replace with your actual image path

const About = () => {
  return (
    <section className={styles.aboutSection} data-aos="fade-up">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2>Welcome to ICLSMHA-2026</h2>
          <p>
            We are delighted to invite researchers, academicians, healthcare
            professionals and industry experts from around the globe to join us
            at ICLSMHA-2026, where innovation meets collaboration. This
            international platform is designed to foster dialogue, share
            cutting-edge research and explore interdisciplinary strategies that
            shape the future of health and life sciences.
          </p>
          <p>
            ICLSMHA-2026 serves as a dynamic hub for scholars, healthcare
            practitioners and industry experts to come together, exchange
            knowledge and foster cross-sector collaboration.
          </p>
          <p>
            This conference is committed to addressing pressing global health
            issues by embracing innovative, multidisciplinary approaches across
            biotechnology, public health, environmental science and medical
            research. Engage with thought leaders, present groundbreaking work
            and be part of transformative conversations that inspire progress in
            healthcare.
          </p>
          <p>
            Let us come together to bridge scientific discovery and practical
            application in advancing health, sustainability and global
            wellbeing.
          </p>
        </div>
        <div className={styles.imageContent}>
          <img src={aboutImg} alt="About ICLSMHA-2026" />
        </div>
      </div>
      {/* second section */}
      <div className={styles.themeSection}>
        <h2>Conference Theme</h2>
        <p className={styles.bold}>
          Bridging Science and Practice: Multidisciplinary Approaches to Health
          and Wellbeing
        </p>
        <p>
          The International Conference on Life Sciences and Multidisciplinary
          Healthcare Approaches (ICLSMHA-2026) centers on the critical
          integration of life sciences, healthcare and allied disciplines to
          address complex global health challenges. This theme emphasizes the
          importance of translating scientific innovation into real-world
          healthcare solutions through cross-disciplinary collaboration.
        </p>
        <p>
          From biotechnology and environmental health to clinical research and
          public health policy, the conference aims to foster meaningful
          dialogue and knowledge exchange that drive sustainable improvements in
          global wellbeing. By uniting diverse perspectives, ICLSMHA-2026 seeks
          to build pathways toward inclusive, evidence-based and impactful
          healthcare practices.
        </p>

        <h3>Purpose of the Conference</h3>
        <p>
          The purpose of the International Conference on Life Sciences and
          Multidisciplinary Healthcare Approaches (ICLSMHA-2026) is to provide a
          global platform for researchers, educators, healthcare professionals
          and industry leaders to come together and explore innovative,
          cross-disciplinary solutions to today’s most pressing health and life
          science challenges.
        </p>

        <ul className={styles.bulletPoints}>
          <li>
            Foster collaboration across diverse fields such as biotechnology,
            medicine, public health, environmental science and allied health
            disciplines.
          </li>
          <li>
            Promote knowledge exchange by showcasing cutting-edge research,
            emerging technologies and best practices in healthcare and life
            sciences.
          </li>
          <li>
            Encourage translational research that bridges the gap between
            scientific discovery and clinical or community application.
          </li>
          <li>
            Support sustainable health strategies that contribute to global
            wellbeing, resilience and equity.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
