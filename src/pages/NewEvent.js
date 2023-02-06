import { useNavigate } from "react-router-dom";

import NewEventForm from "../components/events/NewEventForm";

function NewEvent() {
  const navigate = useNavigate();
  function addEventHandler(EventData) {
    fetch(
      "https://react-getting-started-60b68-default-rtdb.firebaseio.com/events.json",
      {
        method: "POST",
        body: JSON.stringify(EventData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>New Event Page</h1>
      <NewEventForm onAddEvent={addEventHandler} />
    </section>
  );
}

export default NewEvent;
