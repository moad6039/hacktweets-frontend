import Tweet from "./Tweet";
import styles from "../styles/Home.module.css";
import Left from "./left";
import Right from "./Right";
import Middle from "./Middle";

function Home() {
  return (
    <div className={styles.container}>
        <Left />
      <div className={styles.middle}>
        <Middle />
      </div>
      <div className={styles.right}>
        <Right />
      </div>
    </div>
  );
}

export default Home;
