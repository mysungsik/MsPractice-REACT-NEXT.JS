import styles from "./event-signup.module.css";
import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification-context";

function ResisterEmail() {
  const emailRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  function resisterEmail(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;

    const reqBody = {
      email: enteredEmail,
    };

    notificationCtx.showNotification({
      title: "signing up...",
      message: "Registering for newsletter",
      status: "pending",
    });

    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return res.json().then((data) => {
          throw new Error(data.message || "Someting went Wrong!");
        });
      })
      .then((data) => {
        console.log(data.feedback);
        notificationCtx.showNotification({
          title: "Sucess!",
          message: "Successfully Registered for newsletter",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error!",
          message: "Something went wrong!",
          status: "error",
        });
      });
  }
  return (
    <div className={styles.maindiv}>
      <form>
        <h2> sign up stay UPDATE!</h2>
        <input type="email" placeholder="Your email" ref={emailRef} />
        <button onClick={resisterEmail}>Resister</button>
      </form>
    </div>
  );
}

export default ResisterEmail;
