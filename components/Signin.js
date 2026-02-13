import Image from "next/image";
import styles from "../styles/Login.module.css";

function Signin({
  username,
  setUsername,
  password,
  setPassword,
  onConnection,
}) {
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
      <button className={styles.signButtonModal} onClick={onConnection}>
        Sign in
      </button>
    </div>
  );
}

export default Signin;
