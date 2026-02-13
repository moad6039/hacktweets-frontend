import styles from "../styles/Login.module.css";
import Image from "next/image";
import Signup from "./Signup";
import Signin from "./Signin";
import { useState } from "react";
import Home from "./Home";
import { login } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  // partie Affichage Modal
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  //partie fetch et affichage de la page Home lors de l'inscreption et connection
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.value);

  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signUpFirstname,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: signUpUsername, token: data.token }));
          setSignUpFirstname("");
          setSignUpUsername("");
          setSignUpPassword("");
          setShowSignup(false); // Ferme la modale
        } else {
          console.log(data.error || "Registration failed");
        }
      });
  };

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: signInUsername, token: data.token }));
          setSignInUsername("");
          setSignInPassword("");
          setShowSignin(false); // Ferme la modale
        } else {
          console.log(data.error || "Connection failed");
        }
      });
  };
  // Si l'utilisateur est connecté, afficher Home
  if (user?.token) {
    return <Home />;
  }
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
                X
              </button>
              <Signup
                firstname={signUpFirstname}
                setFirstname={setSignUpFirstname}
                username={signUpUsername}
                setUsername={setSignUpUsername}
                password={signUpPassword}
                setPassword={setSignUpPassword}
                onRegister={handleRegister}
              />
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
                X
              </button>
              <Signin
                username={signInUsername}
                setUsername={setSignInUsername}
                password={signInPassword}
                setPassword={setSignInPassword}
                onConnection={handleConnection}
              />
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
