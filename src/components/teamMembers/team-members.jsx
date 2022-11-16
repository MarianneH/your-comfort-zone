import styles from "./teamMembers.module.css";

function TeamMembers({ name, content }) {
  return (
    <>
      <hr className={styles.line} />
      <h2 className={styles.team_name}>{name}</h2>
      <p className={styles.team_content}>{content}</p>
    </>
  );
}
export default TeamMembers;
