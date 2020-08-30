let defaultGame = {
  games: [],
  platform: 0,
  genre: "",
  loading: true,
  page: 1,
  search: "",
};

const Games = (state = defaultGame, action) => {
  switch (action.type) {
    case "SET_GAME_REQUEST":
      return {
        defaultGame,
        loading: true,
      };
    case "SET_GAME":
      return {
        ...state,
        games: action.payload.games,
        platform: action.payload.platform,
        genre: action.payload.genre,
        page: action.payload.page,
        loading: false,
        search: action.payload.search,
      };
    case "SET_GAME_ERROR":
      return {
        ...state,
        loading: true,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default Games;
