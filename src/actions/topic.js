import { GET_TOPIC_LIST, CLEAR_TOPIC_LIST } from "../constants/topic";
import { getJSON } from "../utils/request";
import api from "../constants/api";

const topicList = (list, page) => {
	return {
		type: GET_TOPIC_LIST,
		list,
		page,
	};
};

const clearTopicList = () => {
	return {
		type: CLEAR_TOPIC_LIST,
	};
};

//获取话题列表
export const getTopicListData = params => {
	return async dispatch => {
		console.log(params, "params");
		let result = await getJSON(api.get_topics, params);
		if (result && result.data) {
			if (result.data.data.length > 0) {
				dispatch(topicList(result.data.data, params.page));
			}
		}
	};
};

//清空话题列表
export const clearTopicListData = () => {
	return dispatch => {
		dispatch(clearTopicList());
	};
};
