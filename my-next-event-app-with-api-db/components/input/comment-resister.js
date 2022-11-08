import styles from "./comment-resister.module.css";
import { useEffect, useState } from "react";

import Comments from "./comment-list";
import CommentForm from "./comment-form";

// useEffect 를 사용하여, "showcomment"State 가 바뀔때마다, fetch를 통해, 댓글을 다시 fetch 하는 코드를 만듬
// 그리고, 그 값을 State에 저장하여, commen-list에 넘겨서, 새 값을 불러오게한다.

function CommentResister(props) {
  const eventId = props.eventId;

  const [showComment, setShowComment] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setLoading(() => true);
    fetch(`/api/comment/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comment);
        setLoading(() => false);
      });
  }, [showComment]);

  function toggleComments() {
    setShowComment((prevStatus) => !prevStatus);
  }

  return (
    <div className={styles.center}>
      <button onClick={toggleComments}>{showComment ? "Hide" : "SHOW"}</button>
      <div>
        {loading && <p> ...loading</p>}
        {showComment && <CommentForm eventId={eventId} />}
        {showComment && <Comments comments={comments} />}
      </div>
    </div>
  );
}

export default CommentResister;
