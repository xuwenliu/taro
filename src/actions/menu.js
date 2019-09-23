import { SHOW_DRAWER, HIDE_DRAWER, CHANGE_CATA } from "../constants/menu";

const changeCataType = currentCata => {
	return {
		type: CHANGE_CATA,
		currentCata: currentCata,
	};
};

export const showDrawer = () => {
	return dispatch =>
		dispatch({
			type: SHOW_DRAWER,
		});
};

export const hideDrawer = () => {
	return dispatch =>
		dispatch({
			type: HIDE_DRAWER,
		});
};

// 异步的action
export const changeCata = currentCata => {
	return dispatch => {
		dispatch(changeCataType(currentCata));
	};
};
