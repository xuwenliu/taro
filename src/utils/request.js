import Taro from "@tarojs/taro";

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


