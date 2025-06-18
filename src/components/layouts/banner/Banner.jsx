import styles from "./Banner.module.css";
import one from "../../../assets/bannerAssets/1.png";
import two from "../../../assets/bannerAssets/2.png";
import three from "../../../assets/bannerAssets/3.png";
import four from "../../../assets/bannerAssets/4.png";
import five from "../../../assets/bannerAssets/5.png";
import six from "../../../assets/bannerAssets/6.png";
import seven from "../../../assets/bannerAssets/7.png";
import eight from "../../../assets/bannerAssets/8.png";
import nine from "../../../assets/bannerAssets/9.png";
import ten from "../../../assets/bannerAssets/10.png";
import eleven from "../../../assets/bannerAssets/11.png";
import tweleve from "../../../assets/bannerAssets/12.png";
import thirteen from "../../../assets/bannerAssets/13.png";
import fourteen from "../../../assets/bannerAssets/14.png";

const Banner = () => {
  const logoList = [one,two,three,four,five,six,seven,eight,nine,ten,eleven,tweleve,thirteen,fourteen];
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>
            International Conference on Life Sciences and Multidisciplinary
            <br /> Healthcare Approaches (ICLSMHA-2026)
          </h1>
          <h2>
            Theme: "Bridging Science and Practice: Multidisciplinary Approaches
            to Health and Wellbeing"
          </h2>

          <div className={styles.details}>
            <p>
              <b>Organized by</b>: Confworld Educational Research and
              Development Association
            </p>
            <p>
              <b>Hybrid Conference: In Person + Online</b>
            </p>
            <p>
              <b>ISBN: 978-52-951719-1-8</b>
            </p>
          </div>
          <div className={styles.dateContainer}>
            <p>Date: 14–15 May, 2026</p>
            <p>City, Country: Kuala Lumpur, Malaysia</p>
          </div>

          <div className={styles.logos}>
            {logoList.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
