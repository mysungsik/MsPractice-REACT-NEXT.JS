import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";

function ProductDetail(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p> loading...</p>;
  }

  return (
    <Fragment>
      <h1> {loadedProduct.title}</h1>
      <p> {loadedProduct.description} </p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const productData = JSON.parse(jsonData);

  return productData;
}

export async function getStaticProps(context) {
  const { params } = context;
  const inputId = params.productid;

  const productData = await getData();

  const product = productData.products.find((item) => item.id === inputId);

  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const productData = await getData();

  const productIds = productData.products.map((product) => product.id);

  const params = productIds.map((pid) => ({ params: { productid: pid } }));

  return {
    paths: params,
    fallback: true,
  };
}
export default ProductDetail;
