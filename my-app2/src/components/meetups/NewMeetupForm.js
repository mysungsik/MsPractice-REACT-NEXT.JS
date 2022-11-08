import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

function NewMeetupForm(props) {
  const refTitle = useRef();
  const refImage = useRef();
  const refAddress = useRef();
  const refDescription = useRef();

  function submitForms(event) {
    event.preventDefault();

    const enteredTitle = refTitle.current.value;
    const enteredImage = refImage.current.value;
    const enteredAddress = refAddress.current.value;
    const enteredDescription = refDescription.current.value;

    const allDatas = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.postToDatabase(allDatas);
  }

  return (
    <Card>
      <form onSubmit={submitForms}>
        <div className={classes.control}>
          <label htmlFor="title"> Meetup Title </label>
          <input type="text" id="title" required ref={refTitle} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> Meetup Image </label>
          <input type="url" id="image" required ref={refImage} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address"> Meetup Address </label>
          <input type="text" id="address" required ref={refAddress} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description"> Meetup Description </label>
          <textarea id="description" ref={refDescription}></textarea>
        </div>
        <div>
          <button className={classes.actions}> add meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
