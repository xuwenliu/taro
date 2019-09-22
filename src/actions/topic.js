import { GET_TOPIC_LIST, CLEAR_TOPIC_LIST, GET_TOPIC_INFO, ADMIRE_SUCCESS } from "../constants/topic";
import { getJSON, postJSON } from "../utils/request";
import api from "../constants/api";
import Taro from '@tarojs/taro';

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

const admireSuccess = () => {
	return {
		type: ADMIRE_SUCCESS
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

export const getTopicInfoData = (params) => {
	return async dispatch => {
		let result = await getJSON(api.get_topic_info + '/' + params.id, params);
		console.log(result)
		if (result && result.data) {
			if (result.data.data) {
				dispatch(getTopicInfo(result.data.data));
			}
		}
	}
}

export const admireTopic = (params) => {
	return async dispatch => {
		let result = await postJSON(api.up_reply + '/' + params.replyId + '/ups', params);
		if (result && result.data && result.data.success) {
			if (result.data.data) {
				dispatch(admireSuccess());
			}
		} else {
			Taro.showToast({
				title: '点赞失败',
				icon: 'none',
				duration: 3000
			})
		}
	}
}
