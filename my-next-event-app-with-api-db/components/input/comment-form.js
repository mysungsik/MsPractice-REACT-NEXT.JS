import styles from "./comment-form.module.css";

import { useRef, useState, useContext } from "react";
import NotificationContext from "../../store/notification-context";

function CommentForm(props) {
  const [invalid, setInVaild] = useState(false);
  const notificationCtx = useContext(NotificationContext);

  const eventId = props.eventId;

  const emailRef = useRef();
  const nameRef = useRef();
  const commentRef = useRef();

  function resistComment(event) {
    event.preventDefault();

    notificationCtx.showNotification({
      title: "pending fetch...",
      message: "pending fetch",
      status: "pending",
    });

    const postData = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      comment: commentRef.current.value,
    };

    if (!postData.email) {
      setInVaild(true);
      notificationCtx.showNotification({
        title: "fail",
        message: "invalid Data",
        status: "error",
      });
    } else {
      fetch(`/api/comment/${eventId}`, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return res.json().then((data) => {
            throw new Error(data.message || "Something wrong!");
          });
        })
        .then((data) => {
          console.log(data);
          notificationCtx.showNotification({
            title: "success",
            message: "success to fetch",
            status: "success",
          });
        })
        .catch((error) => {
          notificationCtx.showNotification({
            title: "fail",
            message: error.message || "fail  to fetch",
            status: "error",
          });
        });
      setInVaild(false);
    }
  }
  return (
    <form className={styles.mainGrid}>
      <div className={styles.formGrid}>
        <div>
          <label htmlFor="inputEmail"> Your Email</label>
          <input type="email" id="inputEmail" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="inputName"> Your Name</label>
          <input type="text" id="inputName" ref={nameRef} />
        </div>
      </div>
      <div className={styles.comment}>
        <label htmlFor="inputComment"> Your Comment</label>
        <textarea id="inputComment" rows={5} ref={commentRef}></textarea>
      </div>
      <div>{invalid ? "invalid form" : ""}</div>
      <div>
        <button onClick={resistComment}> 등록 </button>
      </div>
    </form>
  );
}

export default CommentForm;
