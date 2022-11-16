import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function UserProfile() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>...loading</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
    //window.location.href="/"
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
