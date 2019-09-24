import Taro, { Component } from "@tarojs/taro";
import { View, RichText, Text } from "@tarojs/components";
import { AtButton, AtFab, AtIcon, AtModal } from 'taro-ui'
import { connect } from "@tarojs/redux";

import "./index.less";

import TopicItem from "../index/TopicItem";
import ReplyItem from "./ReplyItem";
import ReplyModal from "./ReplyModal";

import { getRichImg, validateIsLogin } from "../../utils/lib";
import {
	getTopicInfoData,
	admireTopic,
	replyContent,
	showReplyModal,
	hideReplyModal,
	deleteTopic,
	collectTopic,
	deCollectTopic,
} from "../../actions/topic";


const mapStateToProps = state => ({
	info: state.topic.info,
	admireStatus: state.topic.admireStatus,
	isShowReplyModal: state.topic.isShowReplyModal,
	userInfo: state.user.userInfo,
});

const mapDispatchToProps = dispatch => ({
	getTopicInfo: params => {
		return dispatch(getTopicInfoData(params));
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
	},
	deleteTopic: params => {
		return dispatch(deleteTopic(params))
	},
	collectTopic: params => {
		return dispatch(collectTopic(params))
	},
	deCollectTopic: params => {
		return dispatch(deCollectTopic(params))
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
	state = {
		replyModalTitle: '',
		currentReply: '',
		isSelf: false,//是否是自己发布的话题
		isShowDeleteModal: false,//是否显示删除确认框
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
		getTopicInfo(params).then(res => {
			this.setState({
				isSelf: res.author && res.author.loginname === userInfo.loginname
			})
		});


	}
	handleLike(params) {
		validateIsLogin(this.props.userInfo).then(res => {
			res && this.props.like(params);
		})
	}

	openReplyModal(title, currentReply) {
		validateIsLogin(this.props.userInfo).then(res => {
			if (res) {
				this.setState({
					replyModalTitle: title,
					currentReply,
				})
				this.props.showReplyModal();
			}
		})
	}

	closeReplyModal() {
		this.props.hideReplyModal();
	}

	//回复话题
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

	//收藏主题和取消收藏
	handleCollect(info) {
		let { collectTopic, deCollectTopic, userInfo } = this.props;
		validateIsLogin(userInfo).then(res => {
			if (res) {
				let is_collect = info.is_collect; //true=已收藏(需要取消收藏) false=未收藏(需要收藏)
				let params = {
					topic_id: info.id,
					accesstoken: userInfo.accesstoken
				}
				//取消
				if (is_collect) {
					deCollectTopic(params).then(res => {
						if (res.success) {
							this.getDetail();
						}
					})
				} else { //收藏
					collectTopic(params).then(res => {
						if (res.success) {
							this.getDetail();
						}
					})
				}
			}
		})

	}

	goEdit() {
		Taro.navigateTo({
			url: '/pages/publish/publish?topicId=' + this.props.info.id
		});
	}

	//删除确认
	openDeleteModal() {
		this.setState({
			isShowDeleteModal: true
		})
	}

	handleCancel = () => {
		this.setState({
			isShowDeleteModal: false
		})
	}
	handleConfirm = () => {
		let params = {
			topic_id: this.props.info.id,
		}
		this.props.deleteTopic(params).then(res => {
			this.handleCancel();
			if (res.success) {
				Taro.navigateBack();
			}
		});
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
								onOpenReplyModal={this.openReplyModal.bind(this, `回复【${item.author.loginname}】的评论`, item)}
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

				<View className="fab">
					{/* 收藏话题 */}
					<AtFab onClick={this.handleCollect.bind(this, info)}>
						{info.is_collect ? <AtIcon value="heart-2"></AtIcon> : <AtIcon value="heart"></AtIcon>}
					</AtFab>
					{
						this.state.isSelf ?
							<View>
								{/* 修改话题 */}
								<View className="edit">
									<AtFab onClick={this.goEdit.bind(this)}>
										<AtIcon value="edit"></AtIcon>
									</AtFab>
								</View>
								{/* 删除话题 */}
								<AtFab onClick={this.openDeleteModal.bind(this)}>
									<AtIcon value="trash"></AtIcon>
								</AtFab>
							</View> : null
					}


				</View>
				{/* 删除确认框 */}
				<AtModal
					closeOnClickOverlay={false}
					isOpened={this.state.isShowDeleteModal}
					title="确定删除"
					cancelText='取消'
					confirmText='确认'
					onCancel={this.handleCancel}
					onConfirm={this.handleConfirm}
				/>


			</View>
		);
	}
}

export default Detail;
