import Link from "next/link";
import styles from "./button.module.css";

function ButtonLink(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={styles.button}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button className={styles.button} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
}
export default ButtonLink;
