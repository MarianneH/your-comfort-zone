import styles from "./welcomeSection.module.css";
import FadingHeadlines from "./fadingHeadlines/fading-headlines";
import background from "../../assets/welcome-image.jpeg";
import Heading from "../circularHeading/circular-heading";
import { Parallax } from "react-scroll-parallax";

function WelcomeSection() {
  return (
    <div className={styles.welcome_section}>
      <Parallax translateY={[-40, 40]} className={styles.image}>
        <img src={background} alt="Mountains and Sky" />
      </Parallax>
      <div className={styles.content_container}>
        <Heading
          text="~ Welcome to Your Comfort Zone "
          arc={360}
          radius={180}
        />
        <FadingHeadlines wording="Breathe in" />
        <FadingHeadlines wording="Breathe out" />
      </div>
    </div>
  );
}
export default WelcomeSection;
