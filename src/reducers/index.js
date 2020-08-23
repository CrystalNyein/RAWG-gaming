import { combineReducers } from "redux";
import Genres from "./Genres";
import Games from "./Games";

const rootReducer = combineReducers({ Genres, Games });
export default rootReducer;
