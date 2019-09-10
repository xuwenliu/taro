import Taro, { Component } from "@tarojs/taro";
import { ScrollView } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { getTopicListData } from "../../actions/topic";
import TopicItem from "./TopicItem";

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

	render() {
		const { list, currentCata } = this.props;
		return (
			<ScrollView onScrollToLower={this.handleScrollToBottom} scrollY style={{ paddingTop: "40PX", height: "650PX" }}>
				{list.map(item => {
					return <TopicItem key={item.id} {...item} currentCata={currentCata} />;
				})}
			</ScrollView>
		);
	}
}

export default TopicList;
