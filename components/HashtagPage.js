import Tweet from "./Tweet";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import CompHashtag from "./CompHashtag";

function HashtagPage() {
  const [tweets, setTweets] = useState([]);
  const [hashtag, setHashtag] = useState("");
  // get data tweets from backend
  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => {
        let tweets = data.tweet.map((tweet) => {
          return (
            <Tweet
              message={tweet.message}
              nbLike={tweet.nbLike}
              time={tweet.time}
              firstname={tweet.user.firstname}
              username={tweet.user.lastname}
            />
          );
        });
        setTweets(tweets);
      });
  }, []);

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
              <span className={styles.firstname}>Firstname</span>
              <span className={styles.lastname}>Lastname</span>
            </div>
          </div>
          <button className={styles.logout}>Logout</button>
        </div>
      </div>
      <div className={styles.partTwo}>
        <h1 className={styles.header}>Hashtag</h1>
        <div className={styles.blockInputTweet}>
          <input
            type="text"
            placeholder="Hashtag..."
            className={styles.inputHashtag}
          />
        </div>
        <div className={styles.tweetBlock}>{tweets}</div>
      </div>
      <div className={styles.partThree}>
        <h1 className={styles.trendHeader}>Trend</h1>
        <div className={styles.trendBlock}>
          {/* props expected : hashtag name & nbtweets related */}
          <CompHashtag name={""} nbTweets={null} />
        </div>
      </div>
    </div>
  );
}

export default HashtagPage;
