import { combineReducers } from "redux"
import starshipsReducer from "./starships"

export default combineReducers({
  starships: starshipsReducer,
})
