import Taro, { Component } from "@tarojs/taro";
import { ScrollView, View } from "@tarojs/components";
import { AtFab, AtIcon } from 'taro-ui';
import { connect } from "@tarojs/redux";

import './TopicList.less';
import TopicItem from "./TopicItem";

import { getTopicListData } from "../../actions/topic";

const mapStateToProps = state => ({
	...state.topic,
	currentCata: state.menu.currentCata,
});
const mapDispatchToProps = dispatch => ({
	getTopicList: postData => {
		dispatch(getTopicListData(postData));
	},
});

@connect(
	mapStateToProps,
	mapDispatchToProps
)
class TopicList extends Component {
	state = {
		isShowTop: false,
		scrollTop: 0,

	}
	componentDidMount() {
		const { page, limit, currentCata } = this.props;
		let postData = {
			page,
			limit,
			tab: currentCata.key,
		};
		this.props.getTopicList(postData);
	}

	//滚动到底部 分页加载 ScrollView必须指定高度
	handleScrollToBottom = () => {
		const { page, limit, currentCata } = this.props;
		let postData = {
			page: page + 1,
			limit,
			tab: currentCata.key,
		};
		this.props.getTopicList(postData);
	};

	handleScroll = (event) => {
		if (event.detail.scrollTop >= 100) {
			this.setState({
				isShowTop: true,
				scrollTop: event.detail.scrollTop // 必须设置 不然点击返回顶部按钮不能返回
			})
		} else {
			this.setState({
				isShowTop: false,
				scrollTop: event.detail.scrollTop // 必须设置 不然点击返回顶部按钮不能返回
			})
		}
	}

	backTop = () => {
		this.setState({
			scrollTop: 0
		})
	}

	render() {
		const { list, currentCata } = this.props;
		return (
			<View>
				<ScrollView
					scrollTop={this.state.scrollTop}
					onScrollToLower={this.handleScrollToBottom}
					scrollY
					style={{ paddingTop: "40PX", height: "650PX" }}
					onScroll={this.handleScroll}
				>
					{list.map(item => {
						return <TopicItem key={item.id} {...item} currentCata={currentCata} />;
					})}
				</ScrollView>
				{
					this.state.isShowTop ?
						<View className="fab">
							<AtFab onClick={this.backTop}>
								<AtIcon value="arrow-up"></AtIcon>
							</AtFab>
						</View> : null
				}
			</View>
		);
	}
}

export default TopicList;
