import classes from "./EventItem.module.css";
import Card from "../UI/Card";

function EventItems(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </Card>
    </li>
  );
}

export default EventItems;
