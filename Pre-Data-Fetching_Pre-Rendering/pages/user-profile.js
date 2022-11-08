function UserProfilePage(props) {
  const { username } = props;

  return <div>{username}</div>;
}

export async function getServerSideProps(context) {
  const { params } = context;

  return {
    props: {
      username: "ms",
    },
  };
}

export default UserProfilePage;
