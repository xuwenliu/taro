import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button,Icon } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import './menu.less';
import '../../assets/font/iconfont.css'

const mapStateToProps = state => ({
	test: state.test,
});
const mapDispatchToProps = dispatch => ({
	test: () => {
		dispatch();
	},
});

@connect(
	mapStateToProps,
	mapDispatchToProps
)
class Menu extends Component {
	render() {
        return <View className="header-menu">
            <Icon className="iconfont iconmenu"></Icon>
            <Text>全部</Text>
            <Icon className="iconfont iconcenter"></Icon>
        </View>;
	}
}

export default Menu;
