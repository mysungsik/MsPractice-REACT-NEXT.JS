import { useRouter } from "next/router";

function ProfilePage() {
  const router = useRouter();
  const id = router.query.userid;

  if (!id) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <h1> ProfilePage!</h1>
      <p>{id}</p>
    </div>
  );
}

export default ProfilePage;
