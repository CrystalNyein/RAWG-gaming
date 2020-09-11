let defaultGame = {
  platform: 0,
  genre: "",
  page: 1,
  search: "",
  count: 0,
};

const Games = (state = defaultGame, action) => {
  switch (action.type) {
    case "SET_GAME":
      return {
        ...state,
        platform: action.payload.platform,
        genre: action.payload.genre,
        page: action.payload.page,
        search: action.payload.search,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload.page,
      };
    case "SET_GAME_COUNT":
      return {
        ...state,
        count: action.payload.count,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default Games;
