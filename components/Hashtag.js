import styles from "../styles/Home.module.css";
function CompHashtag(props) {
  //props expected : hashtag name & nbtweets related

  return (
    <>
      <h2 className={styles.hashtagTitle}>{props.name}</h2>
      <span className={styles.nbTweets}>{props.nbTweets} tweets</span>
    </>
  );
}

export default CompHashtag;
