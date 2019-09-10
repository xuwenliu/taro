import Taro, { Component } from "@tarojs/taro";
import { View, RichText, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { getRichImg } from "../../utils/lib";

import { getTopicInfoData } from "../../actions/topic";
import TopicItem from "../index/TopicItem";
import ReplyItem from "./ReplyItem";

import "./index.less";

const mapStateToProps = state => ({
	info: state.topic.info,
});
const mapDispatchToProps = dispatch => ({
	getTopicInfo: id => {
		dispatch(getTopicInfoData(id));
	},
});

@connect(
	mapStateToProps,
	mapDispatchToProps
)
class Detail extends Component {
	config = {
		navigationBarTitleText: "话题详情",
	};
	componentDidMount() {
		const { getTopicInfo } = this.props;
		let topicId = this.$router.params.topicId;
		getTopicInfo(topicId);
	}
	render() {
		const { info } = this.props;
		let content = getRichImg(info.content);
		return (
			<View>
				<TopicItem {...info} isDetail={true} />
				<View className="content">
					<RichText nodes={content} />
				</View>
				<View className="header">
					<Text>{info.reply_count}回复</Text>
				</View>
				<View>
					{info.replies &&
						info.replies.map((item, index) => {
							return <ReplyItem key={item.id} {...item} index={index + 1} />;
						})}
				</View>
			</View>
		);
	}
}

export default Detail;
