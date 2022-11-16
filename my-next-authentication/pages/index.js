import { getSession } from "next-auth/react";

function Homepage(props) {
  console.log(props.result);
  return (
    <div>
      <h1> WelCome!</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const result = await getSession({ req: context.req });

  return {
    props: {
      result: result,
    },
  };
}

export default Homepage;
