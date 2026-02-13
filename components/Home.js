import Tweet from "./Tweet";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Right from "./Right";
import Middle from "./Middle";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.partOne}>
        <div className={styles.logoBlock}>
          <button>
            <img
              src="logo-new.png"
              alt="logo hacktweet"
              className={styles.logo}
            />
          </button>
        </div>
        <div className={styles.containerUser}>
          <div className={styles.userAccountDisplay}>
            <img
              src="person.png"
              alt="photo de profil"
              className={styles.profilPicture}
            />
            <div className={styles.identifiant}>
              <span className={styles.firstname}>firstname</span>
              <span className={styles.lastname}>username</span>
            </div>
          </div>
          <button className={styles.logout}>Logout</button>
        </div>
      </div>
      <div className={styles.partTwo}>
        <Middle />
      </div>
      <Right />
    </div>
  );
}

export default Home;
