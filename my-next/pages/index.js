import styles from "../styles/Home.module.css";
import Link from "next/link";

function Homepage() {
  return (
    <div>
      <h1>Hello!</h1>
      <ul>
        <li>
          <Link href={"/product"}>TO PRODUCT page</Link>
        </li>
        <li>
          <Link href={"/blog"}>TO BLOG page</Link>
        </li>
        <li>
          <Link href={"/client"}>TO CLIENT page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Homepage;
