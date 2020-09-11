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
    if (payload[0].includes("parent_platforms")) {
      dispatch(setGame(payload[1], "", page, ""));
    } else if (payload[0].includes("genre")) {
      dispatch(setGame(0, payload[1], page, ""));
    } else if (payload[0].includes("search")) {
      dispatch(setGame(0, "", page, payload[1]));
    } else {
      dispatch(setPage(page));
    }
  };
};
export function setCount(count) {
  return {
    type: "SET_GAME_COUNT",
    payload: {
      count,
    },
  };
}
export function setGenre(genres) {
  return {
    type: "SET_GENRE",
    genres,
  };
}
export const setGame = (platform, genre, page, search) => {
  return {
    type: "SET_GAME",
    payload: {
      platform,
      genre,
      page,
      search,
    },
  };
};
export const setPage = (page) => {
  return {
    type: "SET_PAGE",
    payload: {
      page,
    },
  };
};
