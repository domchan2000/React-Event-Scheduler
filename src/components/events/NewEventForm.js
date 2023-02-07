import { useRef } from "react";

import Card from "../UI/Card";
import classes from "./NewEventForm.module.css";

function NewEventForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const EventData = {
      title: enteredTitle,
      description: enteredDescription,
    };

    props.onAddEvent(EventData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Event title</label>
          <input type="text" required id="titel" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Event title</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.action}>
          <button>Add Event</button>
        </div>
      </form>
    </Card>
  );
}

export default NewEventForm;
