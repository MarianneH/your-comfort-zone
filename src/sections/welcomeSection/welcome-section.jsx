import styles from "./welcomeSection.module.css";
import FadingHeadlines from "../../components/fadingHeadlines/fading-headlines";
import background from "../../assets/welcome-image.jpeg";
import LogoSection from "../../components/logoSection/logo-section";
import { Parallax } from "react-scroll-parallax";

function WelcomeSection() {
  return (
    <div className={styles.welcome_section}>
      <Parallax translateY={[-20, 40]} className={styles.image}>
        <img src={background} alt="Mountains and Sky" />
      </Parallax>
      <div className={styles.content_container}>
        <LogoSection />
        <FadingHeadlines wording="Breathe in" />
        <FadingHeadlines wording="Breathe out" />
      </div>
    </div>
  );
}
export default WelcomeSection;
