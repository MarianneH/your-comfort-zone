import styles from "./loadingIndicator.module.css";
import { ReactComponent as Loading } from "../../assets/loading.svg";

function LoadingIndicator() {
  return (
    <div className={styles.loading}>
      <Loading />
      <div> loading ...</div>
    </div>
  );
}

export default LoadingIndicator;
