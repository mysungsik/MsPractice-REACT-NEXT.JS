function UserProfilePage(props) {
  return <div> {props.id}</div>;
}

export default UserProfilePage;

export async function getServerSideProps(context) {
  const { params } = context;

  const inputUserId = params.uid;

  return {
    props: {
      id: "userid = " + inputUserId,
    },
  };
}
