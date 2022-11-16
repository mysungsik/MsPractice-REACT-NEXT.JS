import UserProfile from "../components/profile-component/user-profile";

function ProfilePage(props) {
  console.dir(props.session);
  return (
    <div>
      <UserProfile />
    </div>
  );
}

export default ProfilePage;
