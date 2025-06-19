import styles from "./Why.module.css";

const highlightsData = [
  {
    title: "Engage with Experts",
    description:
      "Connect with leading researchers, healthcare professionals and industry pioneers from around the globe.",
  },
  {
    title: "Explore Cutting-Edge Research",
    description:
      "Discover the latest breakthroughs and innovative approaches in life sciences and multidisciplinary healthcare.",
  },
  {
    title: "Foster Collaborations",
    description:
      "Build valuable partnerships and networks that can drive your research, clinical practice or business forward.",
  },
  {
    title: "Participate in Dynamic Sessions",
    description:
      "Experience a rich program featuring plenaries, workshops, panel discussions and poster presentations across diverse topics.",
  },
  {
    title: "Shape the Future of Healthcare",
    description:
      "Contribute to meaningful conversations that influence policy, practice, and global health outcomes.",
  },
  {
    title: "Experience a Vibrant Host City",
    description:
      "Enjoy the cultural richness and hospitality of our conference location Kuala Lumpur, Malaysia, ideal hubs for international collaboration.",
  },
];

const Why = () => {
  return (
    <section className={styles.highlightsSection} data-aos="fade-up">
      <h2 className={styles.title}>Why Join us at ICLSMHA-2026?</h2>

      <div className={styles.grid}>
        {highlightsData.map((item, index) => (
          <div className={styles.card} key={index}>
            <p className={styles.heading}>{item.title}</p>
            {item.description}
          </div>
        ))}
      </div>
      <p className={styles.text}>
        Join us at ICLSMHA-2026 to be part of a transformative platform driving
        innovation and positive impact in healthcare worldwide!
      </p>
    </section>
  );
};

export default Why;
