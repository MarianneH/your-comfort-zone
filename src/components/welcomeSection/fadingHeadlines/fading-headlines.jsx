import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./fadingHeadlines.module.css";

function FadingHeadlines({ wording }) {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const section = useRef(null);

  useEffect(() => {
    let thisSection = section.current;
    if (inView === true) {
      thisSection.classList.add(styles.fade);
    } else if (inView === false) {
      thisSection.classList.remove(styles.fade);
    }
  }, [inView, section]);

  return (
    <div className={styles.breathe_section} ref={ref}>
      <div className={styles.breathe_in_out} ref={section}>
        {wording}
      </div>
    </div>
  );
}

export default FadingHeadlines;
