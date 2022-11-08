import { loadFilePath, loadFileData } from "./api/feedback";
import { Fragment, useState } from "react";

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState("");

  function showDetailHandler(id) {
    fetch(`api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }
  return (
    <Fragment>
      <div>
        <h1>{feedbackData.id}</h1>
        <p>{feedbackData.email}</p>
        <p> {feedbackData.text}</p>
      </div>
      <ul>
        {props.feedback.map((feedback) => (
          <li key={feedback.id}>
            {feedback.id}
            <button onClick={showDetailHandler.bind(null, feedback.id)}>
              Show Detail
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const path = loadFilePath();
  const data = loadFileData(path);

  return {
    props: {
      feedback: data,
    },
  };
}

export default FeedbackPage;
