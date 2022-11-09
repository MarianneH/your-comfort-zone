import styles from "./loadingIndicator.module.css";
import loading from "../../assets/loading.gif";

function LoadingIndicator() {
  return (
    <div className={styles.loading}>
      <div> loading ...</div>
      <img src={loading} alt="loading indicator" />
    </div>
  );
}

export default LoadingIndicator;
