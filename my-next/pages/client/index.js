import Link from "next/link";

const clientList = [
  { id: "hi", name: "fnffn", age: 30 },
  { id: "my", name: "akqjs", age: 25 },
  { id: "lol", name: "ekdskrnl", age: 15 },
];
function ClientPage() {
  return (
    <div>
      <h1> Client Page</h1>
      <ul>
        <li>
          <Link href={"/client/audtlr"}> audtlr</Link>
        </li>
        <li>
          <Link href={"/client/wlgus"}> wlgus</Link>
        </li>
        {clientList.map((client) => (
          <li key={client.id}>
            <Link href={`/client/${client.id}`}> {client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
