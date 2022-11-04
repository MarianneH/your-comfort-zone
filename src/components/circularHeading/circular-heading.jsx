import React from "react";
import PropTypes from "prop-types";
import styles from "./circularHeading.module.css";
import welcome from "../../assets/Chilling.png";

function Heading({ text, arc, radius }) {
  const characters = text.split("");
  const degree = arc / characters.length;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {characters.map((char, i) => (
          <span
            key={`heading-span-${i}`}
            style={{
              height: `${radius}px`,
              transform: `rotate(${degree * i - arc / 2}deg)`,
              transformOrigin: `0 ${radius}px 0`,
            }}
          >
            {char}
          </span>
        ))}
      </h1>
      <div className={styles.image}>
        {/* <img src={welcome} alt="hello" /> */}
      </div>
    </div>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  arc: PropTypes.number, // how curved do you want the text
  radius: PropTypes.number, // how big do you want the curve
};

Heading.defaultProps = {
  arc: 120,
  radius: 400,
};

export default Heading;
