import { SHOW_DRAWER, HIDE_DRAWER, CHANGE_CATA } from "../constants/menu";

const MENU_STATE = {
	cataData: [
		{ key: "all", value: "全部" },
		{ key: "good", value: "精华" },
		{ key: "share", value: "分享" },
		{ key: "ask", value: "问答" },
		{ key: "job", value: "招聘" },
		{ key: "dev", value: "客户端测试" },
	],
	currentCata: { key: "all", value: "全部" },
	showDrawer: false, //是否展示左侧菜单
};

export default (state = MENU_STATE, action) => {
	switch (action.type) {
		//显示分类抽屉
		case SHOW_DRAWER:
			return {
				...state,
				showDrawer: true,
			};
		//隐藏分类抽屉
		case HIDE_DRAWER:
			return {
				...state,
				showDrawer: false,
			};
		//点击抽屉 触发切换分类
		case CHANGE_CATA:
			return {
				...state,
				currentCata: action.currentCata,
			};

		default:
			return state;
	}
};
