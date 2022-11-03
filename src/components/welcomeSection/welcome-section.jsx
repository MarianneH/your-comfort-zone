import styles from "./welcomeSection.module.css";
import FadingHeadlines from "./fadingHeadlines/fading-headlines";
import background from "../../assets/welcome-image.jpeg";
import Heading from "../circularHeading/circular-heading";

function WelcomeSection() {
  return (
    <div className={styles.welcome_section}>
      <img src={background} alt="" className={styles.image} />
      <div className={styles.content_container}>
        <Heading
          text="~ Welcome to Your Comfort Zone "
          arc={360}
          radius={180}
        />
        <div class={styles.key_phrase}>the news without the blues</div>
        <FadingHeadlines wording="Breathe in" />
        <FadingHeadlines wording="Breathe out" />
      </div>
    </div>
  );
}
export default WelcomeSection;
