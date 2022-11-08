import { useRouter } from "next/router";

function ClientDetailPage() {
  const clientDetail = useRouter();

  console.log(clientDetail.query);

  return (
    <div>
      <h1>
        Deep into client page <br /> client Detail Page
      </h1>
    </div>
  );
}

export default ClientDetailPage;
