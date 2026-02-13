import styles from "../styles/Home.module.css";
import UserDisplayInformations from "./UserDisplayInformations";

export default function Left() {
  return (
    <>
      <div className={styles.logoBlock}>
        <button>
          <img
            src="logo-new.png"
            alt="logo hacktweet"
            className={styles.logo}
          />
        </button>
      </div>
      <div>
        <UserDisplayInformations />
      </div>
    </>
  );
}
