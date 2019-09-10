import { GET_TOPIC_LIST, CLEAR_TOPIC_LIST,GET_TOPIC_INFO } from "../constants/topic";
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

const getTopicInfo = (info) => {
    return {
        type: GET_TOPIC_INFO,
        info: info
    }
}

//获取话题列表
export const getTopicListData = params => {
	return async dispatch => {
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

export const getTopicInfoData = (id) => {
    return async dispatch => {
        let result = await getJSON(api.get_topic_info + '/' + id);
        console.log(result)
        if (result && result.data) {
            if (result.data.data) {
                dispatch(getTopicInfo(result.data.data));
            }
         }
    }
}
