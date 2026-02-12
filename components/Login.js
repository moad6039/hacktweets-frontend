import styles from "../styles/Login.module.css";
import Image from "next/image";
import Link from "next/link";


function Login() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.logo}>LOGO
           <Image
              src="/Twitter_logo.png"
              alt="Planifier"
              width={100}
              height={100}
            />
        </div>
        <div className={styles.title}>
          <h1>See what's happening</h1>
        </div>
        <div className={styles.sentence}>
          <p>Join Hackatweet today</p>
        </div>
        <div className={styles.buttonGroup}>
          <Link href="/" className={styles.signupLink}>Sign up</Link>
          <p>Already have an account ?</p>
          <Link href="/"className={styles.signinLink}>Sign in</Link>
        </div>
      </main>
    </div>
  );
}

export default Login;
