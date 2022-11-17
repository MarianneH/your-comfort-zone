import styles from "./aboutUs.module.css";
import React from "react";
import background from "../../assets/welcome-image.jpeg";
import TeamMembers from "../../components/teamMembers/team-members";

export default function AboutUs() {
  const members = [
    { name: "Marianne Helbig", content: "--Content--" },
    { name: "Luis Felipe Urdapilleta", content: "--Content--" },
    { name: "Georg Weber", content: "--Content--" },
    { name: "Hendra Widjaya", content: "--Content--" },
  ];
  return (
    <div className={styles.parent_container}>
      <div className={styles.container}>
        <img
          src={background}
          alt="Mountains and Sky"
          className={styles.image}
        />
        <div className={styles.about_us}>
          <h1 className={styles.headline}>Who Made This Possible</h1>
          {members.map((element, index) => (
            <TeamMembers
              key={index}
              name={element.name}
              content={element.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
