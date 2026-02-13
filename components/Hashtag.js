import styles from "../styles/Home.module.css";
function CompHashtag(props) {
  //props expected : hashtag name & nbtweets related
  return (
    <>
      <h2 className={styles.hashtagTitle}>#coucou</h2>
      <span className={styles.nbTweets}>2 Tweets</span>
    </>
  );
}

export default CompHashtag;
