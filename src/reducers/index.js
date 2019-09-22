import { combineReducers } from "redux";
import menu from "./menu";
import topic from "./topic";
import user from "./user";

export default combineReducers({
	menu,
	topic,
	user
});
