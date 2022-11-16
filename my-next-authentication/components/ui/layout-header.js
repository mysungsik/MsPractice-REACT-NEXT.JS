import Link from "next/link";
import { Fragment } from "react";
import styles from "./layout-header.module.css";
import { useSession, signOut } from "next-auth/react";

function LayoutHeader() {
  const { data: session, status } = useSession();

  function logOut() {
    const result = signOut({ callbackUrl: "/" });
  }

  return (
    <Fragment>
      <div className={styles.header}>
        <div>Logo</div>
        <ul className={styles.ul}>
          <li>
            <Link href={"/"}> hompage</Link>
          </li>

          {status === "unauthenticated" && (
            <li>
              <Link href={"/login"}> login</Link>
            </li>
          )}
          {status === "authenticated" && (
            <li>
              <Link href={"/profile"}> profile</Link>
            </li>
          )}
          {status === "authenticated" && (
            <button onClick={logOut}> logout</button>
          )}
        </ul>
      </div>
    </Fragment>
  );
}

export default LayoutHeader;
