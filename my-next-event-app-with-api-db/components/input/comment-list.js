import styles from "./comment-list.module.css";

function Comments(props) {
  return (
    <ul className={styles.ul}>
      {props.comments.map((comment) => (
        <li key={comment._id}>
          <p className={styles.comment}>{comment.comment}</p>
          <p className={styles.name}> By.{comment.name}</p>
          <hr />
        </li>
      ))}
    </ul>
  );
}

export default Comments;
