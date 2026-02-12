import Image from "next/image";

function Signup(props) {
  return (
    <>
      <div>
        <Image src="/Twitter_logo.png" alt="logo" width={100} height={100} />
        <p></p>
        <input type="text" placeholder="Firstname" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        {/* <button className={styles.btn - signup}></button> */}
      </div>
    </>
  );
}

export default Signup;
