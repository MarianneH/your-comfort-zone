import React, { useEffect, useRef, useState } from "react";
import styles from "./fadingHeadlines.module.css";
import { Parallax } from "react-scroll-parallax";

function FadingHeadlines({ wording }) {
  const section = useRef(null);
  const [progressOnScreen, setProgressOnScreen] = useState("");

  useEffect(() => {
    let thisSection = section.current;
    let startFadeIn = 0.22;
    let finishFadeIn = 0.4;
    let startFadeOut = 0.55;
    let finishFadeout = 0.73;

    let fadingSpace = finishFadeIn - startFadeIn;
    if (progressOnScreen <= startFadeIn || progressOnScreen >= finishFadeout) {
      thisSection.style.opacity = 0;
    } else if (
      progressOnScreen < finishFadeIn &&
      progressOnScreen > startFadeIn
    ) {
      let opacity =
        (progressOnScreen - startFadeIn) / (fadingSpace / 100) / 100;
      thisSection.style.opacity = opacity;
    } else if (
      progressOnScreen > startFadeOut &&
      progressOnScreen < finishFadeout
    ) {
      let opacity =
        (finishFadeout - progressOnScreen) / (fadingSpace / 100) / 100;
      thisSection.style.opacity = opacity;
    } else if (
      progressOnScreen >= finishFadeIn &&
      progressOnScreen <= startFadeOut
    ) {
      thisSection.style.opacity = 1;
    }
  }, [progressOnScreen]);

  return (
    <Parallax
      onProgressChange={(progress) => {
        setProgressOnScreen(progress);
      }}
    >
      <div className={styles.breathe_section}>
        {" "}
        {/* ref={ref} */}
        <div className={styles.breathe_in_out} ref={section}>
          {wording}
        </div>
      </div>
    </Parallax>
  );
}

export default FadingHeadlines;
