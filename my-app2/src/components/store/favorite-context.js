import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorite: [],
  totalFavorite: 0,
  addFavorite: (favoriteMeetup) => {},
  deleteFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});
// Context 의 초기조건에, 함수를 집어넣음으로써, IDE(자동완성기능) 에 도움을 줄 수있음 (능력은 없음)

export function FavoriteContextProvider(props) {
  const [favorite, setFavorite] = useState([]);

  function addFavorite(favoriteMeetup) {
    setFavorite((previousFavorite) => {
      return previousFavorite.concat(favoriteMeetup);
    });
  }

  function deleteFavorite(meetupId) {
    setFavorite((previousFavorite) => {
      return previousFavorite.filter((meetup) => {
        return meetup.id !== meetupId;
      });
    });
  }

  function itemIsFavorite(meetupId) {
    return favorite.some((meetup) => meetup.id === meetupId);
  }

  // 실질적인, 전역변수 context
  const context = {
    favorite: favorite,
    totalFavorite: favorite.length,
    addFavorite: addFavorite,
    deleteFavorite: deleteFavorite,
    itemIsFavorite: itemIsFavorite,
  };

  // context를 내보냄으로써, context변수 안에있는 것들을 쓸 수 있는것.
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;

// 최종 결과물(내보낼 값) 은  export default FavoriteContext; 로 내보내고,
// 그 안에 들어가 사용할 함수 는 함수 이름 앞에 export를 붙여 export function FavoriteContextProvider(props) {... 로 내보낸다.
