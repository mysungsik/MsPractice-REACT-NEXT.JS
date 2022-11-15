import Card from "../item-layout/Card";
import styles from "./login-form.module.css";
import { useState, useRef } from "react";
import { signIn } from "next-auth/react";

async function createAccount(userid, userPassword) {
  const response = await fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify({
      userid: userid,
      password: userPassword,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseData = await response.json();

  return responseData;
}

function LoginForm() {
  const [isSignup, setIsSignup] = useState(false);
  const idRef = useRef();
  const passwordRef = useRef();

  function switchSignup(e) {
    e.preventDefault();
    setIsSignup((prev) => !prev);
  }

  async function submitHandler(e) {
    e.preventDefault();

    const id = idRef.current.value;
    const password = passwordRef.current.value;

    if (isSignup) {
      const result = await createAccount(id, password);
      console.log(result);
    } else {
      const result = await signIn("credentials", {
        redirect: false,
        id: id,
        password: password,
      });
      console.log(result);
    }
  }

  return (
    <Card>
      <h1> {isSignup ? "Signup" : "Login"}</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="text"> ID</label>
          <input type={"text"} id="text" ref={idRef} />
        </div>
        <div>
          <label htmlFor="password"> password</label>
          <input type={"password"} id="password" ref={passwordRef} />
        </div>
        <div className={styles.buttons}>
          <button> Submit </button>
          <button onClick={switchSignup}>
            {isSignup ? "Change To Login" : "Change To Signup"}{" "}
          </button>
        </div>
      </form>
    </Card>
  );
}

export default LoginForm;
