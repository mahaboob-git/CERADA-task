import styles from "./Highlights.module.css";

const highlightsData = [
  {
    title: "🌍 Global Platform",
    description:
      "for collaboration among researchers, healthcare professionals, and academic leaders",
  },
  {
    title: "🧬 Multidisciplinary Focus",
    description:
      "spanning life sciences, biotechnology, public health, environmental science, and medical research",
  },
  {
    title: "🎤 Keynote Addresses",
    description:
      "by internationally renowned scientists, clinicians, and policy experts",
  },
  {
    title: "📑 Research Paper Presentations",
    description: "across diverse tracks with opportunities for publication",
  },
  {
    title: "🤝 Networking Sessions",
    description:
      "to foster partnerships between academia, industry, and healthcare institutions",
  },
  {
    title: "🏆 Best Paper & Presentation Awards",
    description: "to recognize outstanding contributions",
  },
  {
    title: "🌱 Sustainability & Health Integration",
    description:
      "– discussions on innovations for long-term global health impact",
  },
  {
    title: "📚 Workshops & Panel Discussions",
    description:
      "on emerging trends, challenges, and solutions in healthcare and life sciences",
  },
];

const Highlights = () => {
  return (
    <section className={styles.highlightsSection}>
      <h2 className={styles.title}>Key Highlights of ICLSMHA</h2>
      <div className={styles.grid}>
        {highlightsData.map((item, index) => (
          <div className={styles.card} key={index}>
            <strong>{item.title}:</strong> {item.description}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
