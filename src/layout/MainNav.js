import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNav() {
  return (
    <header className={classes.header}>
      <div div className={classes.logo}>Event</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Events</Link>
          </li>
          <li>
            <Link to="/new">Add New Event</Link>
          </li>
          <li>
            <Link to="/past">
              Past Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
