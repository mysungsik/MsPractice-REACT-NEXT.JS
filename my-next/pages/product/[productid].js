import { useRouter } from "next/router";

function productDetailPage() {
  const productid = useRouter();

  console.log(productid.pathname);
  console.log(productid.query);

  return (
    <div>
      <h1> Product DetailPage </h1>
    </div>
  );
}

export default productDetailPage;
