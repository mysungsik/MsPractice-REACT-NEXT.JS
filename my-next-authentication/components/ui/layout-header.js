import Link from "next/link";
import { Fragment } from "react";
import styles from "./layout-header.module.css";

function LayoutHeader() {
  return (
    <Fragment>
      <div className={styles.header}>
        <div>Logo</div>
        <ul className={styles.ul}>
          <li>
            <Link href={"/"}> hompage</Link>
          </li>

          <li>
            <Link href={"/login"}> login</Link>
          </li>
          <li>
            <Link href={"/profile"}>profile </Link>
          </li>
          <button> logout</button>
        </ul>
      </div>
    </Fragment>
  );
}

export default LayoutHeader;
