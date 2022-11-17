import classes from "./profile-form.module.css";
import { useSession } from "next-auth/react";
import { useRef } from "react";

function ProfileForm() {
  const pasaswordRef = useRef();
  const { data: session, status } = useSession();

  async function changePassword(e) {
    e.preventDefault();
    const newPassword = pasaswordRef.current.value;

    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify({
        id: session.user.email,
        newPasasword: newPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
  }

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={pasaswordRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" />
      </div>
      <div className={classes.action}>
        <button onClick={changePassword}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
