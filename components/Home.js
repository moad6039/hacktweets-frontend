import Tweet from "./Tweet"
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

function Home() {

  const [tweets, setTweets] = useState([]);
  // get data tweets from backend
  useEffect(() => {
    fetch("http://localhost:3000/tweets")
    .then(response => response.json())
    .then((data) => {
        let tweets = data.tweet.map((tweet) => {
          return (<Tweet message={tweet.message} nbLike={tweet.nbLike} time={tweet.time} firstname={tweet.user.firstname} username={tweet.user.lastname} />)
        })
        setTweets(tweets);
    })
  }, [])



  return (
    <div className={styles.container}>
      <div className={styles.partOne}>
        <div className={styles.logoBlock}>
          <button>
            <img src='logo-new.png' alt='logo hacktweet' className={styles.logo}/>
          </button>
        </div>
        <div className={styles.containerUser}>
          <div className={styles.userAccountDisplay}>
              <img src='person.png' alt='photo de profil' className={styles.profilPicture}/>
              <div className={styles.identifiant}>
                <span className={styles.firstname}>firstname</span>
                <span className={styles.lastname}>username</span>
              </div>
          </div>
          <button className={styles.logout}>Logout</button>
        </div>
      </div>
      <div className={styles.partTwo}>
          <h1 className={styles.header}>Home</h1>
          <div className={styles.blockInputTweet}>
            <input type='text' placeholder="What's up" className={styles.inputTweet}/>
          </div>
          <div className={styles.blockButtonCharacters}>
            <span className={styles.numberCharacter}>14/280</span>
            <button className={styles.tweetButton}>Tweet</button>
          </div>
          <div className={styles.tweetBlock}>
            {tweets}
          </div>
      </div>
      <div className={styles.partThree}>
        <div className={styles.trendBlock}>
          <h1 className={styles.trendHeader}>Trend</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
