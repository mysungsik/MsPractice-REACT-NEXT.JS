import Link from "next/link";
import { useRouter } from "next/router";

function DeepClientPage() {
  const clientid = useRouter();

  function MovePage() {
    clientid.push("/");
  }

  console.log(clientid.query);
  return (
    <div>
      <h1> Deep into client page</h1>
      <button onClick={MovePage}> home </button>
      <Link
        href={{
          pathname: "/client/[clientid]/[clientdetail]",
          query: { clientid: "myname", clientdetail: "wlgus" },
        }}
      >
        move to wlgus
      </Link>
    </div>
  );
}

export default DeepClientPage;
