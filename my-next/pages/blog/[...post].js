import { useRouter } from "next/router";

function PageName() {
  const RotuerName = useRouter();
  console.log(RotuerName.query);

  return (
    <div>
      <h1> Page Name </h1>
    </div>
  );
}
export default PageName;
