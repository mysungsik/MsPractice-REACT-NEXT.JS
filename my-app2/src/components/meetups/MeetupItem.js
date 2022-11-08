import { useContext } from "react"; // 1. context를 사용할 hook Import

// 2. context 를 가져옴. "함수" 가 아닌 "default" 를 가져왔음으로,
//    "createContext" 를 한, 그 Context 뿐 아니라, 함수를 포함한 전부를 가져옴
import classes from "./MeetupItem.module.css";
import FavoriteContext from "../store/favorite-context";

function MeetupItem(props) {
  const favoriteContext = useContext(FavoriteContext); // 3. useContext hook 을 사용하여, store 폴더에 만들어둔 context 전부에 접근

  const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteContext.deleteFavorite(props.id);
    } else {
      favoriteContext.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3> {props.title} </h3>
        <address> {props.address}</address>
        <p> {props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavoriteStatusHandler}>
          {itemIsFavorite ? "delete Favorite" : "To Favorite"}
        </button>
      </div>
    </li>
  );
}

export default MeetupItem;
