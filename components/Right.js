import styles from "../styles/Home.module.css";
import Hashtag from "../components/Hashtag";
function Right(props) {
  //props expected : hashtag name & nbtweets related
  return (
    <>
      <div className={styles.trendBlock}>
        <h1 className={styles.trendHeader}>Trend</h1>
        <Hashtag />
      </div>
    </>
  );
}

export default Right;
