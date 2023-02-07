import classes from "./EventItem.module.css";
import Card from "../UI/Card";

function EventItems(props) {
  function deleteHandler(){
    
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className= {classes.actions}>
        <button onClick={deleteHandler}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default EventItems;
