let defaultGame = { games: [] };

const Games = (state = defaultGame, action) => {
  switch (action.type) {
    case "SET_GAME":
      return {
        ...state,
        games: action.payload.games,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default Games;
