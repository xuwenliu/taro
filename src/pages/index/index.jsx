import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text,Icon } from "@tarojs/components";
import "./index.less";
import Menu from '../../components/menu/menu';

import {getTopicList} from '../../utils/request';


class Index extends Component {
	config = {
		navigationBarTitleText: "首页",
	};

	componentWillReceiveProps(nextProps) {
		console.log(this.props, nextProps);
	}
    componentDidMount() {
        getTopicList().then(data => {
            console.log(data);
        });
    }
	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		return (
            <View className="index">
                <Menu />
			</View>
		);
	}
}

export default Index;
