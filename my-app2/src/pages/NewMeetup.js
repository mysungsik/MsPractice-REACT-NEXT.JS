import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupsPage() {
  const history = useHistory();

  function postDataHandler(meetupData) {
    fetch("https://fir-project-fabc9-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <div>
        <h1> new Meetup</h1>
      </div>
      <div>
        <NewMeetupForm postToDatabase={postDataHandler} />
      </div>
    </section>
  );
}

export default NewMeetupsPage;
