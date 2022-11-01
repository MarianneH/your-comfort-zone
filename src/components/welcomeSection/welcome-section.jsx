import styles from "./welcomeSection.module.css";
import FadingHeadlines from "./fadingHeadlines/fading-headlines";
import background from "../../assets/welcome-image.jpeg";

function WelcomeSection() {
  return (
    <div className={styles.welcome_section}>
      <img src={background} alt="" className={styles.image} />
      <div className={styles.content_container}>
        <div className={styles.logo_and_brand}>
          Welcome to the Comfort Zone.
        </div>
        <FadingHeadlines wording="Breathe in" />
        <FadingHeadlines wording="Breathe out" />
      </div>
    </div>
  );
}
export default WelcomeSection;
