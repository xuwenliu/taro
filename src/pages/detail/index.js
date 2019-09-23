import Taro, { Component } from "@tarojs/taro";
import { View, RichText, Text } from "@tarojs/components";
import { AtButton } from 'taro-ui'
import { connect } from "@tarojs/redux";

import "./index.less";

import TopicItem from "../index/TopicItem";
import ReplyItem from "./ReplyItem";
import ReplyModal from "./ReplyModal";

import { getRichImg } from "../../utils/lib";
import {
	getTopicInfoData,
	admireTopic,
	replyContent,
	showReplyModal,
	hideReplyModal,
} from "../../actions/topic";


const mapStateToProps = state => ({
	info: state.topic.info,
	admireStatus: state.topic.admireStatus,
	isShowReplyModal: state.topic.isShowReplyModal,
	userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
	getTopicInfo: params => {
		dispatch(getTopicInfoData(params));
	},
	like: params => {
		dispatch(admireTopic(params));
	},
	replyContent: params => {
		dispatch(replyContent(params));
	},
	showReplyModal: () => {
		dispatch(showReplyModal());
	},
	hideReplyModal: () => {
		dispatch(hideReplyModal());
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
	state = {
		replyModalTitle: '',
		currentReply: ''
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.admireStatus != nextProps.admireStatus) {
			this.getDetail();
		}
	}
	componentDidMount() {
		this.getDetail();
	}
	getDetail() {
		const { getTopicInfo, userInfo } = this.props;
		let params = {
			id: this.$router.params.topicId,
			accesstoken: userInfo.accesstoken
		}
		getTopicInfo(params);
	}
	handleLike(params) {
		if (this.props.userInfo.accesstoken) {
			this.props.like(params);
		} else {
			Taro.navigateTo({ url: '/pages/user/login' });
		}
	}

	openReplyModal(title, currentReply) {
		if (this.props.userInfo.accesstoken) {
			this.setState({
				replyModalTitle: title,
				currentReply,
			})
			this.props.showReplyModal();
		} else {
			Taro.navigateTo({ url: '/pages/user/login' });
		}
	}
	closeReplyModal() {
		this.props.hideReplyModal();
	}
	replyContent(content) {
		// content 评论内容
		// accesstoken 谁评论了
		// topic_id 话题id
		// reply_id 对另一个评论回复的评论id
		let params = {
			content,
			topic_id: this.$router.params.topicId,
			accesstoken: this.props.userInfo.accesstoken,
		}
		let currentReply = this.state.currentReply;
		if (currentReply) {
			params.reply_id = currentReply.id;
			params.content = '@' + currentReply.author.loginname + '  ' + params.content;
		}
		this.props.replyContent(params);
	}
	render() {
		const { info, userInfo, isShowReplyModal } = this.props;
		const { replyModalTitle } = this.state;
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
				<View className="reply-list">
					{info.replies &&
						info.replies.map((item, index) => {
							return <ReplyItem
								key={item.id}
								{...item}
								index={index + 1}
								user={userInfo}
								onLike={this.handleLike.bind(this)}
								onOpenReplyModal={this.openReplyModal.bind(this, '回复评论', item)}
							/>;
						})}
				</View>
				<View className="reply-btn">
					<AtButton type='primary' full onClick={this.openReplyModal.bind(this, '回复话题', null)}>回复话题</AtButton>
				</View>
				<ReplyModal
					isOpened={isShowReplyModal}
					title={replyModalTitle}
					onClose={this.closeReplyModal.bind(this)}
					onOk={this.replyContent.bind(this)} />
			</View>
		);
	}
}

export default Detail;
