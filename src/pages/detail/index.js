import Taro, { Component } from "@tarojs/taro";
import { View, RichText, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { getRichImg } from "../../utils/lib";

import { getTopicInfoData,admireTopic } from "../../actions/topic";
import TopicItem from "../index/TopicItem";
import ReplyItem from "./ReplyItem";

import "./index.less";

const mapStateToProps = state => ({
	info: state.topic.info,
	admireStatus:state.topic.admireStatus,
	user: state.user
});
const mapDispatchToProps = dispatch => ({
	getTopicInfo: params => {
		dispatch(getTopicInfoData(params));
	},
	like:params => {
		dispatch(admireTopic(params));
	}
});

@connect(
	mapStateToProps,
	mapDispatchToProps
)
class Detail extends Component {
	config = {
		navigationBarTitleText: "话题详情",
	};
	componentWillReceiveProps(nextProps){
		if(this.props.admireStatus != nextProps.admireStatus){
			this.getDetail();
		}
	}
	componentDidMount() {
		this.getDetail();
	}
	getDetail(){
		const { getTopicInfo,user } = this.props;
		let params = {
			id:this.$router.params.topicId,
			accesstoken:user.accesstoken
		}
		getTopicInfo(params);
	}
	render() {
		const { info,user,like } = this.props;
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
							return <ReplyItem key={item.id} {...item} index={index + 1} user={user} like={like}/>;
						})}
				</View>
			</View>
		);
	}
}

export default Detail;
