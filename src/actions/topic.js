import {
	GET_TOPIC_LIST,
	CLEAR_TOPIC_LIST,
	GET_TOPIC_INFO,
	GET_COLLECT_TOPIC,
	ADMIRE_SUCCESS,
	SHOW_REPLY_MODAL,
	HIDE_REPLY_MODAL
} from "../constants/topic";

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

const getCollectTopic = (collectTopicList) => {
	return {
		type: GET_COLLECT_TOPIC,
		collectTopicList,
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

// 获取话题详情及回复列表
export const getTopicInfoData = (params) => {
	return async dispatch => {
		let result = await getJSON(api.get_topic_info + params.id, params);
		if (result && result.data && result.data.success) {
			dispatch(getTopicInfo(result.data.data));
			return result.data.data;
		}
	}
}

// 获取收藏的话题
export const getCollectTopicData = (params) => {
	return async dispatch => {
		let result = await getJSON(api.get_user_topic + params.loginname);
		if (result && result.data && result.data.success) {
			dispatch(getCollectTopic(result.data.data));
			return result.data.data;
		}
	}
}

//点赞 
export const admireTopic = (params) => {
	return async dispatch => {
		let result = await postJSON(api.up_reply + params.replyId + '/ups', params);
		if (result && result.data && result.data.success) {
			dispatch(admireSuccess());
		} else {
			Taro.showToast({
				title: '点赞失败',
				icon: 'none',
				duration: 3000
			})
		}
	}
}


export const showReplyModal = () => {
	return dispatch =>
		dispatch({
			type: SHOW_REPLY_MODAL,
		});
};

export const hideReplyModal = () => {
	return dispatch =>
		dispatch({
			type: HIDE_REPLY_MODAL,
		});
};


// 回复话题 或者 回复评论
export const replyContent = (params) => {
	return async dispatch => {
		let result = await postJSON(api.reply_topic + params.topic_id + '/replies', params);
		if (result && result.data && result.data.success) {
			dispatch(hideReplyModal());
		} else {
			Taro.showToast({
				title: '回复失败',
				icon: 'none',
			})
		}
	}
}

//发布话题
export const createTopic = (params) => {
	return async () => {
		let result = await postJSON(api.create_topic, params);
		if (result && result.data && result.data.success) {
			return result.data;
		} else {
			Taro.showToast({
				title: '发布话题失败',
				icon: 'none',
			})
		}
	}
}

//删除话题
export const deleteTopic = (params) => {
	return async () => {
		let result = await postJSON(api.delete_topic, params);
		if (result && result.data && result.data.success) {
			return result.data;
		} else {
			Taro.showToast({
				title: '删除话题失败',
				icon: 'none',
			})
		}
	}
}

//修改话题
export const updateTopic = (params) => {
	return async () => {
		let result = await postJSON(api.update_topic, params);
		if (result && result.data && result.data.success) {
			return result.data;
		} else {
			Taro.showToast({
				title: '修改话题失败',
				icon: 'none',
			})
		}
	}
}

//收藏话题
export const collectTopic = (params) => {
	return async () => {
		let result = await postJSON(api.topic_collect, params);
		if (result && result.data && result.data.success) {
			return result.data;
		} else {
			Taro.showToast({
				title: result.data.error_msg,
				icon: 'none',
			})
		}
	}
}


//取消收藏话题
export const deCollectTopic = (params) => {
	return async () => {
		let result = await postJSON(api.topic_de_collect, params);
		if (result && result.data && result.data.success) {
			return result.data;
		} else {
			Taro.showToast({
				title: result.data.error_msg,
				icon: 'none',
			})
		}
	}
}