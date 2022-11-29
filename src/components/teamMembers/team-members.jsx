import styles from "./teamMembers.module.css";
import githubImage from "../../assets/github.png";
import linkedInLogo from "../../assets/linkedin-logo.png";

function TeamMembers({ name, content, github }) {
  return (
    <div className={styles.team_container}>
      <hr className={styles.line} />
      <h2 className={styles.team_name}>{name}</h2>
      <p className={styles.team_content}>{content}</p>
      <div>
        <a href={github} target="_blank" rel="noreferrer">
          <img
            src={githubImage}
            alt="link to github profile"
            className={styles.icon}
          />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <img
            src={linkedInLogo}
            alt="link to linkedin profile"
            className={styles.icon}
          />
        </a>
      </div>
    </div>
  );
}
export default TeamMembers;
