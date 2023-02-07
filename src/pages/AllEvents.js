import { useState, useEffect } from "react";

import EventList from "../components/events/EventList";

function AllEvents() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEvents, setloadedEvents] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-60b68-default-rtdb.firebaseio.com/events.json"
    )
      .then((respose) => {
        return respose.json();
      })
      .then((data) => {
        const events = [];
        for (const key in data) {
          const event = {
            id: key,
            ...data[key],
          };

          events.push(event);
        }
        setIsLoading(false);
        setloadedEvents(events);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Events Page</h1>
      <EventList events={loadedEvents} />
    </div>
  );
}
export default AllEvents;
