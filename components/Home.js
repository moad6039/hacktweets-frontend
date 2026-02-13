import Tweet from "./Tweet";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Left from "./left";
import Right from "./Right";
import Middle from "./Middle";

function Home() {
  return (
    <div className={styles.container}>
      <Left />
      <div className={styles.partTwo}>
          <h1 className={styles.header}>Home</h1>
          <div className={styles.blockInputTweet}>
            <input type='text' placeholder="What's up" className={styles.inputTweet} onChange={(e) => setinputTweet(e.target.value)} value={inputTweet} />
          </div>
          <div className={styles.blockButtonCharacters}>
            <span className={styles.numberCharacter}>14/280</span>
            <button className={styles.tweetButton} onClick={() => handleClickCreateTweet()}>Tweet</button>
          </div>
          <div className={styles.tweetBlock}>
            {tweets}
          </div>
      </div>
      <div className={styles.right}>
        <Right />
      </div>
    </div>
  );
}

export default Home;
