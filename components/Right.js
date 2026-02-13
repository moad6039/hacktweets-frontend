import styles from "../styles/Home.module.css";
import Hashtag from "../components/Hashtag";
import { useState, useEffect } from "react";
function Right(props) {
  const [hashtags, setHashtags] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/hashtags")
      .then((res) => res.json())
      .then((data) => {
        setHashtags(data.hashtags);
      });
  }, []);

  return (
    <>
      <div className={styles.trendBlock}>
        <h1 className={styles.trendHeader}>Trend</h1>
        {hashtags.map((e) => (
          <Hashtag name={e.name} nbTweets={e.nbTweets} />
        ))}
      </div>
    </>
  );
}

export default Right;
