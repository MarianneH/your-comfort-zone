import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./fadingHeadlines.module.css";
import { Parallax } from "react-scroll-parallax";

function FadingHeadlines({ wording }) {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const section = useRef(null);
  const [progressOnScreen, setProgressOnScreen] = useState("");

  useEffect(() => {
    let thisSection = section.current;
    if (inView === true) {
      thisSection.classList.add(styles.fade);
    } else if (inView === false) {
      thisSection.classList.remove(styles.fade);
    }
  }, [inView, section]);

  useEffect(() => {
    let startFadeIn = 0.15;
    let finishFadeout = 0.85;
    let finishFadeIn = 0.4;
    let startFadeOut = 0.6;
    if (progressOnScreen <= startFadeIn || progressOnScreen >= finishFadeout) {
      console.log("opactiy 0");
    } else if (
      progressOnScreen < finishFadeIn &&
      progressOnScreen > startFadeIn
    ) {
      console.log("fading in");
    } else if (
      progressOnScreen > startFadeOut &&
      progressOnScreen < finishFadeout
    ) {
      console.log("fading out");
    } else if (
      progressOnScreen >= finishFadeIn &&
      progressOnScreen <= startFadeOut
    ) {
      console.log("opacity 1");
    }
  }, [progressOnScreen]);

  return (
    <Parallax
      onProgressChange={(progress) => {
        setProgressOnScreen(progress);
      }}
    >
      <div className={styles.breathe_section} ref={ref}>
        <div className={styles.breathe_in_out} ref={section}>
          {wording}
        </div>
      </div>
    </Parallax>
  );
}

export default FadingHeadlines;
