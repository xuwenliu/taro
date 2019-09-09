import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, Icon } from "@tarojs/components";
import { AtDrawer } from "taro-ui";
import { connect } from "@tarojs/redux";
import "./menu.less";
import "../../assets/font/iconfont.css";
import { showDrawer, hideDrawer, changeCata } from "../../actions/menu";
import { getTopicListData } from "../../actions/topic";

const mapStateToProps = state => ({
    ...state.menu,
    page: state.topic.page,
    limit: state.topic.limit,
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
    }
});

@connect(
	mapStateToProps,
	mapDispatchToProps
)
class Menu extends Component {
	onChangeCata = index => {
        const { cataData, handleChangeCata, getTopicList, page, limit } = this.props;
		let currentCata = cataData[index];
        handleChangeCata(currentCata);
        let params = {
            tab: currentCata.key,
            page,
            limit,
        }
        getTopicList(params);
	};
	render() {
		const { showDrawer, cataData, currentCata, handleShowDrawer, handleHideDrawer } = this.props;
		const items = cataData.map(item => item.value);
		return (
			<View>
				<AtDrawer show={showDrawer} mask onClose={handleHideDrawer.bind(this)} items={items} onItemClick={this.onChangeCata.bind(this)} />
				<View className="header-menu">
					<Icon onClick={handleShowDrawer.bind(this)} className="iconfont iconmenu"></Icon>
					<Text>{currentCata.value}</Text>
					<Icon className="iconfont iconcenter"></Icon>
				</View>
			</View>
		);
	}
}

export default Menu;
