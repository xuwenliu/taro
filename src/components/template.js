import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { connect } from "@tarojs/redux";

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
class Template extends Component {
	render() {
		return <View>Template</View>;
	}
}

export default Template;
