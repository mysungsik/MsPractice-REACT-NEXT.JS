import Link from "next/link";
import styles from "./header.module.css";

function HeaderComponent() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={"/"}> Logo</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href={"/"}> AllEvent</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default HeaderComponent;
