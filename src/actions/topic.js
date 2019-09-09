import { GET_TOPIC_LIST } from "../constants/topic";
import { getJSON } from "../utils/request";
import api from "../constants/api";

const topicList = list => {
	return {
		type: GET_TOPIC_LIST,
		list,
	};
};

//获取话题列表
export const getTopicListData = params => {
	return async dispatch => {
        let result = await getJSON(api.get_topics, params);
        if (result && result.data) {
		    dispatch(topicList(result.data.data));
        }
	};
};
