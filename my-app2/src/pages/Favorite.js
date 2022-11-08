import { useContext } from "react";

import MeetupList from "../components/meetups/MeetupList";
import FavoriteContext from "../components/store/favorite-context";

function FavoritePage() {
  const favoriteContext = useContext(FavoriteContext);

  let content;
  if (favoriteContext.totalFavorite === 0) {
    content = <h3> you have no favorite Yet</h3>;
  } else {
    content = <MeetupList meetups={favoriteContext.favorite} />;
  }
  return (
    <section>
      <h1> MY Favorite </h1>
      {content}
    </section>
  );
}

export default FavoritePage;
