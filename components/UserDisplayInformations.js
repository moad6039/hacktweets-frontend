import styles from "../styles/Home.module.css";

export default function UserDisplayInformations() {
    return(
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
    )
}