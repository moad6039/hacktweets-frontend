import Image from "next/image";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";

function Signup() {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //partie fetch et affichage de la page Home lors de l'inscreption

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname,
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: username, token: data.token }));
          setFirstname("");
          setUsername("");
          setPassword("");
        } else {
          console.log("Registration failed");
        }
      });
  };
  return (
    <div className={styles.signContainer}>
      <Image src="/Twitter_logo.png" alt="logo" width={100} height={100} />
      <div className={styles.sentence}>
        <p>
          <strong>Create your Hackatweet account</strong>
        </p>
      </div>
      <input
        type="text"
        placeholder="Firstname"
        className={styles.input}
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
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
      <button className={styles.signButtonModal} onClick={handleRegister}>
        Sign up
      </button>
    </div>
  );
}

export default Signup;
