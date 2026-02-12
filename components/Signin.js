import Image from "next/image";
import styles from "../styles/Login.module.css";

function Signin(props) {
  return (
    <>
      <div>
        <Image src="/Twitter_logo.png" alt="logo" width={100} height={100} />
        <div className={styles.sentence}>
          <p>Create your Hackatweet account</p>
        </div>
        <input type="text" placeholder="Firstname" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button className={styles.signinButton}>Signup</button>
      </div>
    </>
  );
}

export default Signin;
