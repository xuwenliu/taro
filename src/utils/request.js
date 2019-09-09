import Taro from "@tarojs/taro";
import api from "../constants/api";

export function getJSON(url, data) {
	return Taro.request({
		url,
		data,
		method: "GET",
	});
}

export function postJSON(url, data) {
	return Taro.request({
		url,
		data,
		method: "POST",
	});
}

//获取话题列表
export async function getTopicList() {
	let result = await getJSON(api.get_topics);
	return result;
}
