import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigationBar.module.css";
import FavoriteContext from "../store/favorite-context";

function MainNavBar() {
  const favoriteContext = useContext(FavoriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}> All meet ups</Link>
          </li>
          <li>
            <Link to={"/Favorite"}> Favorite</Link>
          </li>
          <li>
            <Link to="/NewMeetup">
              new meet ups{" "}
              <span className={classes.badge}>
                {favoriteContext.totalFavorite}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavBar;
