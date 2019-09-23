import Taro, { Component } from "@tarojs/taro";
import { View, Text, Icon } from "@tarojs/components";
import { AtDrawer } from "taro-ui";
import { connect } from "@tarojs/redux";

import "../../assets/font/iconfont.css";
import "./Menu.less";

import { showDrawer, hideDrawer, changeCata } from "../../actions/menu";
import { getTopicListData, clearTopicListData } from "../../actions/topic";

const mapStateToProps = state => ({
	...state.menu,
	page: state.topic.page,
	limit: state.topic.limit,
	userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
	handleShowDrawer: () => {
		dispatch(showDrawer());
	},
	handleHideDrawer: () => {
		dispatch(hideDrawer());
	},
	handleChangeCata: currentCata => {
		dispatch(changeCata(currentCata));
	},
	getTopicList: (params) => {
		dispatch(getTopicListData(params));
	},
	clearTopicList: () => {
		dispatch(clearTopicListData());
	}
});

@connect(
	mapStateToProps,
	mapDispatchToProps
)
class Menu extends Component {
	onChangeCata = index => {
		const { cataData, handleChangeCata, getTopicList, clearTopicList, limit } = this.props;
		let currentCata = cataData[index];
		if (currentCata.key === this.props.currentCata.key) return;
		handleChangeCata(currentCata);
		let params = {
			tab: currentCata.key,
			page: 1,
			limit,
		}
		clearTopicList(); //每次点击抽屉item先把列表清空在做请求
		getTopicList(params);
	};

	toUser() {
		if (this.props.userInfo.accesstoken) {
			Taro.navigateTo({ url: '/pages/user/user' });
		} else {
			Taro.navigateTo({ url: '/pages/user/login' });
		}
	}
	render() {
		const { showDrawer, cataData, currentCata, handleShowDrawer, handleHideDrawer } = this.props;
		const items = cataData.map(item => item.value);
		return (
			<View>
				<AtDrawer
					className="my-drawer"
					width='65%'
					mask
					show={showDrawer}
					items={items}
					onClose={handleHideDrawer.bind(this)}
					onItemClick={this.onChangeCata}
				/>
				<View className="header-menu">
					<Icon onClick={handleShowDrawer.bind(this)} className="iconfont iconmenu"></Icon>
					<Text>{currentCata.value}</Text>
					<Icon onClick={this.toUser.bind(this)} className="iconfont iconcenter"></Icon>
				</View>
			</View>
		);
	}
}

export default Menu;
