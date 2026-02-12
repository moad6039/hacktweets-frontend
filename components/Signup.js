import Image from "next/image";
import styles from "../styles/Login.module.css";

function Signup() {
  return (
    <>
      <div className={styles.signupContainer}>
        <Image src="/Twitter_logo.png" alt="logo" width={100} height={100} />
        <div className={styles.sentence}>
          <p>Create your Hackatweet account</p>
        </div>
        <input type="text" placeholder="Firstname" className={styles.input} />
        <input type="text" placeholder="Username" className={styles.input} />
        <input type="text" placeholder="Password" className={styles.input} />
        <button className={styles.signupButtonModal}>Sign up</button>
      </div>
    </>
  );
}

export default Signup;
