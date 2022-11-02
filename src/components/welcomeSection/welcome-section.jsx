import styles from "./welcomeSection.module.css";
import FadingHeadlines from "./fadingHeadlines/fading-headlines";
import background from "../../assets/welcome-image.jpeg";

function WelcomeSection() {
  return (
    <div className={styles.welcome_section}>
      <img src={background} alt="" className={styles.image} />
      <div className={styles.content_container}>
        <div className={styles.logo_and_brand}>
          Welcome to Your Comfort Zone.
        </div>
        <div class={styles.key_phrase}> ~The news without the blues~</div>
        <FadingHeadlines wording="Breathe in" />
        <FadingHeadlines wording="Breathe out" />
      </div>
    </div>
  );
}
export default WelcomeSection;
