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
class Detail extends Component {
    componentDidMount() {
        let topicId = this.$router.params.topicId;
        console.log(topicId)
    }
	render() {
		return <View>Detail</View>;
	}
}

export default Detail;
