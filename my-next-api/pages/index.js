import { useRef, useState } from "react";

function HomePage() {
  const [userData, setUserData] = useState();
  const [apiFeedback, setApiFeedBack] = useState([]);

  const idRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredId = idRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredText = textRef.current.value;

    const enteredData = {
      enteredId: enteredId,
      enteredEmail: enteredEmail,
      enteredText: enteredText,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }

  let prase = "";

  if (userData) {
    prase = userData.feedback.text;
  } else {
    prase = "no data";
  }

  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => {
        setApiFeedBack(data.feedback);
      });
  }

  return (
    <div>
      <div>
        <h1> HomePage</h1>
      </div>
      <form>
        <div>
          <label htmlFor="inputId"> Input your Id</label>
          <input type="text" id="inputId" ref={idRef} />
        </div>
        <div>
          <label htmlFor="inputEmail"> Input your Email</label>
          <input type="email" id="inputEmail" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="des"> textARea</label>
          <textarea id="des" ref={textRef}></textarea>
        </div>
        <div>
          <button onClick={submitHandler}> Send Feedback </button>
        </div>
      </form>
      <div>{prase}</div>
      <div>
        <button onClick={loadFeedbackHandler}> Load Feedback</button>
      </div>
      <ul>
        {apiFeedback.map((feedback) => (
          <li key={feedback.id}> {feedback.id}</li>
        ))}
      </ul>
    </div>
  );
}
export default HomePage;
