import Taro from "@tarojs/taro";

export function getJSON(url, data) {
	Taro.showLoading();
	return Taro.request({
		url,
		data,
		method: "GET",
	}).finally(() => {
		Taro.hideLoading();
	});
}

export function postJSON(url, data) {
	Taro.showLoading();
	return Taro.request({
		url,
		data,
		method: "POST",
		header: {
			'content-type': 'application/json'
		}
	}).finally(() => {
		Taro.hideLoading();
	});
}


