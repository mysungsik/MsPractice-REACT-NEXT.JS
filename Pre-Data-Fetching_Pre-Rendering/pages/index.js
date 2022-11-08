import fs from "fs/promises";
import path from "path";
import Link from "next/link";

function HomePage(props) {
  return (
    <ul>
      <li> Product22 </li>
      <li> Product33 </li>
      <li> Product44 </li>
      {props.product.map((item) => (
        <li key={item.id}>
          <Link href={"/products/" + item.id}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("Re-Generate");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const productData = JSON.parse(jsonData);

  if (!productData) {
    return {
      notFound: true,
    };
  }

  if (productData.products.length === 0) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {
      product: [...productData.products],
    },
    revalidate: 10,
  };
}
export default HomePage;
