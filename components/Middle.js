import styles from "../styles/Home.module.css";
import Hashtag from "../components/Hashtag";
import { useEffect, useState } from "react";
import Tweet from "./Tweet";

function Middle(props) {
  const [tweets, setTweets] = useState([]);
  const [inputTweet, setInputTweet] = useState([]);
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
  const handleClickCreateTweet = () => {
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: inputTweet,
        nbLike: 0,
        time: Date.now(),
      }),
    })
      .then((response) => response.json())
      .then((tweet) => console.log(tweet));
  };
  return (
    <>
      <h1 className={styles.header}>Home</h1>
      <div className={styles.blockInputTweet}>
        <input
          type="text"
          placeholder="What's up"
          className={styles.inputTweet}
          onChange={(e) => setInputTweet(e.target.value)}
          value={inputTweet}
        />
      </div>
      <div className={styles.blockButtonCharacters}>
        <span className={styles.numberCharacter}>14/280</span>
        <button
          className={styles.tweetButton}
          onClick={() => handleClickCreateTweet()}
        >
          Tweet
        </button>
      </div>
      <div className={styles.tweetBlock}>{tweets}</div>
    </>
  );
}

export default Middle;
