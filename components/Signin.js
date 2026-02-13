import Image from "next/image";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import { useRouter } from "next/router";

function Signin() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //partie fetch et affichage de la page Home lors de la connection
  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: username, token: data.token }));
          setUsername("");
          setPassword("");
          router.push("/accueil");
        } else {
          console.log("Connection failed");
        }
      });
  };

  return (
    <div className={styles.signContainer}>
      <Image src="/Twitter_logo.png" alt="logo" width={100} height={100} />
      <div className={styles.sentence}>
        <p>
          <strong>Sign in to Hackatweet</strong>
        </p>
      </div>
      <input
        type="text"
        placeholder="Username"
        className={styles.input}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.signButtonModal} onClick={handleConnection}>
        Sign in
      </button>
    </div>
  );
}

export default Signin;
