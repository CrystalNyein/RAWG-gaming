import axios from "axios";
const pageSize = 21;
export const loadGenre = () => {
  return (dispatch) => {
    return axios
      .get("https://api.rawg.io/api/genres?page_size=9&page=1")
      .then((response) => {
        dispatch(setGenre(response.data.results));
      });
  };
};
export const loadGame = (param = "", page = 1) => {
  return (dispatch) => {
    return axios
      .get(
        `https://api.rawg.io/api/games?page=1&page_size=${pageSize}${param}`
        // + genre &&
        // "&genre=${genre}"
      )
      .then((response) => {
        dispatch(setGame(response.data.results));
      })
      .catch((err) => console.log(err));
  };
};
export function setGenre(genres) {
  return {
    type: "SET_GENRE",
    genres,
  };
}
export function setGame(games) {
  return {
    type: "SET_GAME",
    payload: {
      games,
    },
  };
}
