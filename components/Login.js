import styles from "../styles/Login.module.css";
import Image from "next/image";
import Signup from "./Signup";
import Signin from "./Signin";
import { useState } from "react";

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  return (
    <div>
      <main className={styles.main}>
        {/* Modale Signup */}
        {showSignup && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <button
                className={styles.closeButton}
                onClick={() => setShowSignup(false)}
              >
                ×
              </button>
              <Signup />
            </div>
          </div>
        )}

        {/* Modale Signin */}
        {showSignin && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <button
                className={styles.closeButton}
                onClick={() => setShowSignin(false)}
              >
                ×
              </button>
              <Signin />
            </div>
          </div>
        )}
        {/* Logo of Login */}
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
            <strong>Join Hackatweet today.</strong>
          </p>
        </div>
        <div className={styles.buttonGroup}>
          <button
            onClick={() => setShowSignup(true)}
            className={styles.signupButton}
          >
            Sign up
          </button>
          <p className={styles.sentence2}>
            <strong>Already have an account ?</strong>
          </p>
          <button
            onClick={() => setShowSignin(true)}
            className={styles.signinButton}
          >
            Sign in
          </button>
        </div>
      </main>
    </div>
  );
}

export default Login;
