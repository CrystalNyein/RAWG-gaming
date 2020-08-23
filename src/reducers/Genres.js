let defaultGenre = { genres: [] };

const Genres = (state = defaultGenre, action) => {
  if (action.type === "SET_GENRE") {
    return {
      ...state,
      genres: action.genres,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default Genres;
