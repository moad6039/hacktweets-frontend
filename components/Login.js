import styles from "../styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";

function Login() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.logo}>
          <Image
            src="/Twitter_logo.png"
            alt="Logo-twitter"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.title}>
          <h1>See what's happening</h1>
        </div>
        <div className={styles.sentence}>
          <p>
            <strong>Join Hackatweet today</strong>
          </p>
        </div>
        <div className={styles.buttonGroup}>
          <button href="/" className={styles.signupButton}>
            Sign up
          </button>
          <p className={styles.sentence2}>
            <strong>Already have an account ?</strong>
          </p>
          <button href="/" className={styles.signinButton}>
            Sign in
          </button>
        </div>
      </main>
    </div>
  );
}

export default Login;
