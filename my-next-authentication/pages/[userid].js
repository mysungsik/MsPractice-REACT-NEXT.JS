import UserProfile from "../components/profile-component/user-profile";

function ProfilePage(props) {
  const { userid } = props;

  return (
    <div>
      <UserProfile id={userid} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { userid } = context.params;

  return {
    props: { userid },
  };
}

export default ProfilePage;
