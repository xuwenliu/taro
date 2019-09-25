import Taro from '@tarojs/taro';

export function formatDate(time) {
	let date = new Date(time);
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	if (month < 10) {
		month = "0" + month;
	}
	if (day < 10) {
		day = "0" + day;
	}
	return year + "-" + month + "-" + day;
}

export function getDesc(top, good, tab) {
	let item_btn_class = "item-tag share";
	let item_btn_content = "分享";

	if (top) {
		item_btn_class = "item-tag top";
		item_btn_content = "置顶";
	} else if (good) {
		item_btn_class = "item-tag good";
		item_btn_content = "精华";
	} else {
		if (tab === "ask") {
			item_btn_class = "item-tag ask";
			item_btn_content = "问答";
		}
		if (tab === "job") {
			item_btn_class = "item-tag job";
			item_btn_content = "招聘";
		}
		if (tab === "dev") {
			item_btn_content = "客户端测试";
		}
	}
	return [item_btn_class, item_btn_content];
}

//替换富文本中的img给添加个rich-img class 用于设置样式
export function getRichImg(content) {
	return content ? content.replace(/\<img/gi, '<img class="rich-img"') : '';
}

//验证用户是否登录
export function validateIsLogin(userInfo) {
	return new Promise((resolve) => {
		if (userInfo && userInfo.accesstoken) {
			resolve(true);
		} else {
			Taro.navigateTo({ url: '/pages/user/login' });
			resolve(false);
		}
	})
}