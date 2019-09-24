import Taro from "@tarojs/taro";

export function getJSON(url, data) {
	Taro.showLoading();
	return Taro.request({
		url,
		data,
		method: "GET",
	}).then(res => {
		Taro.hideLoading();
		return res;
	});
}

export function postJSON(url, data) {
	Taro.showLoading();
	return Taro.request({
		url,
		data,
		method: "POST",
	}).then(res => {
		Taro.hideLoading();
		return res;
	});
}


