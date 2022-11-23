import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import git from "../../assets/github.png";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <a href={"https://github.com/MarianneH/your-comfort-zone.git"}>
        <img className={styles.git} src={git} alt="github" />
      </a>
      <Link to="/about-us" className={styles.text}>
        About Us
      </Link>
      <p className={styles.text}>© Wild Code School Berlin</p>
    </div>
  );
}
