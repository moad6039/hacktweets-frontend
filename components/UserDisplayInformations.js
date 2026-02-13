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
            <span className={styles.firstname}>{user.firstname}</span>
            <span className={styles.lastname}>{user.username}</span>
          </div>
        </div>
        <button className={styles.logout}>Logout</button>
      </div>
    </>
  );
}
