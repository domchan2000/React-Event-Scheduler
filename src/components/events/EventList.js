import EventItems from "./EventItem";
import classes from "./EventList.module.css";

function EventList(props) {
  return (
    <ul className={classes.list}>
      {props.events.map((event) => (
        <EventItems
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
        />
      ))}
    </ul>
  );
}

export default EventList;