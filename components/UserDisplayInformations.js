import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";

export default function UserDisplayInformations() {
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  console.log("user", user);
  return (
    <>
      <div className={styles.containerUser}>
        <div className={styles.userAccountDisplay}>
          <img
            src="person.png"
            alt="photo de profil"
            className={styles.profilPicture}
          />
          <div className={styles.identifiant}>
            <span className={styles.firstname}>firstname</span>
            <span className={styles.lastname}>username</span>
          </div>
        </div>
      </div>
    </>
  );
}
