import Image from "next/image";
import styles from "../styles/Login.module.css";

function Signup({
  firstname,
  setFirstname,
  username,
  setUsername,
  password,
  setPassword,
  onRegister,
}) {
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
      <button className={styles.signButtonModal} onClick={onRegister}>
        Sign up
      </button>
    </div>
  );
}

export default Signup;
