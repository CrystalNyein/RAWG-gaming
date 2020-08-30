import axios from "axios";
const pageSize = 15;
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
  const payload = param.split("=");
  return (dispatch) => {
    dispatch(setGameRequest());
    return axios
      .get(
        `https://api.rawg.io/api/games?page=${page}&page_size=${pageSize}${param}`
      )
      .then((response) => {
        if (payload[0].includes("parent_platforms")) {
          dispatch(setGame(response.data.results, payload[1], "", page, ""));
        } else if (payload[0].includes("genre")) {
          dispatch(setGame(response.data.results, 0, payload[1], page, ""));
        } else if (payload[0].includes("search")) {
          dispatch(setGame(response.data.results, 0, "", page, payload[1]));
        } else {
          dispatch(setGame(response.data.results, 0, "", page, ""));
        }
      })
      .catch((err) => dispatch(setGameError(err)));
  };
};
export function setGenre(genres) {
  return {
    type: "SET_GENRE",
    genres,
  };
}
export const setGameRequest = () => {
  return {
    type: "SET_GAME_REQUEST",
  };
};
export const setGame = (games, platform, genre, page, search) => {
  return {
    type: "SET_GAME",
    payload: {
      games,
      platform,
      genre,
      page,
      search,
    },
  };
};
export const setGameError = (error) => {
  return {
    type: "SET_GAME_ERROR",
    payload: {
      error,
    },
  };
};
