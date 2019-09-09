import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text,Icon } from "@tarojs/components";
import "./index.less";
import Menu from '../../components/menu/Menu';
import TopicList from './TopicList';

class Index extends Component {
	config = {
		navigationBarTitleText: "首页",
	};

	componentWillReceiveProps(nextProps) {
		console.log(this.props, nextProps);
	}
    componentDidMount() {
    }
	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		return (
            <View className="index">
                <Menu />
                <TopicList />
			</View>
		);
	}
}

export default Index;
