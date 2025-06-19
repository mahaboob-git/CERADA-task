import styles from "./Who.module.css";

const highlightsData = [
  {
    title: "Researchers & Academicians",
    description:
      "from life sciences, psychology, public health, education and healthcare disciplines.",
  },
  {
    title: "Medical and Healthcare Professionals",
    description:
      "including physicians, nurses, therapists, psychologists, mental health counselors and public health specialists.",
  },
  {
    title: "University Students & Scholars",
    description:
      "at undergraduate, postgraduate, and doctoral levels pursuing studies in relevant fields.",
  },
  {
    title: "Industry Professionals",
    description:
      "from biotechnology, pharmaceuticals, digital health, mental health tech and medical devices.",
  },
  {
    title: "Policy Makers and NGO Representatives",
    description:
      "engaged in health and wellness advocacy, development programs and public health initiatives.",
  },
  {
    title: "Educators, Trainers & Social Workers",
    description:
      "contributing to health awareness, behavioral interventions and community engagement.",
  },
  {
    title: "Technology Experts & Innovators",
    description:
      "working in healthcare AI, telemedicine, wearable tech and bioinformatics.",
  },
];

const highlightsData2 = [
  "Promote interdisciplinary research and innovation in life sciences and healthcare.",
  "Facilitate the exchange of knowledge, ideas and best practices among academics, clinicians, and industry professionals.",
  "Encourage collaborative efforts that translate scientific discoveries into practical healthcare solutions.",
  "Address global health challenges through sustainable, evidence-based approaches.",
  "Foster professional networking to build lasting partnerships that advance health and wellbeing worldwide.",
];

const Who = () => {
  return (
    <section className={styles.highlightsSection} data-aos="fade-up">
      <h2 className={styles.title}>
        Conference Proceedings & Indexed Publication Opportunities
      </h2>
      <h2 className={styles.subTitle}>Who Can Attend ICLSMHA-2026?</h2>
      <p className={styles.text}>
        The International Conference on Life Sciences and Multidisciplinary
        Healthcare Approaches (ICLSMHA-2026) is open to a wide spectrum of
        participants from academia, research, healthcare and industry, fostering
        diverse interdisciplinary dialogue and collaboration. The following
        groups are highly encouraged to attend:
      </p>
      <div className={styles.grid}>
        {highlightsData.map((item, index) => (
          <div className={styles.card} key={index}>
            <strong>{item.title}:</strong> {item.description}
          </div>
        ))}
      </div>
      <div className={styles.space} />
      <h2 className={styles.title}>Objective of the Conference</h2>
      <p className={styles.text}>
        The primary objective of the International Conference on Life Sciences
        and Multidisciplinary Healthcare Approaches (ICLSMHA-2026) is to bring
        together experts from diverse fields to:
      </p>
      <div className={styles.grid}>
        {highlightsData2.map((item, index) => (
          <div className={styles.card} key={index}>
            <b>{item}</b>
          </div>
        ))}
      </div>
      <p className={styles.text}>
        Uniting professionals across diverse fields, the conference aims to
        spark innovative collaborations, forge strategic partnerships, and drive
        initiatives that advance health solutions worldwide.
      </p>
    </section>
  );
};

export default Who;
