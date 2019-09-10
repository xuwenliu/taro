import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Button } from "@tarojs/components";
import { formatDate, getDesc } from "../../utils/lib";
import "./TopicItem.less";

class TopicItem extends Component {
    goDetail = id => {
        const { isDetail } = this.props;
        if (!isDetail) {
            Taro.navigateTo({
                url: "/pages/detail/index?topicId=" + id,
            });
        }
	};
	render() {
		const { title, author, reply_count, visit_count, last_reply_at, top, tab, good, id, isDetail } = this.props;
		let [item_btn_class, item_btn_content] = getDesc(top, good, tab);
		return (
			<View onClick={this.goDetail.bind(this, id)} className="topic-item">
				<Image className="avatar" src={author.avatar_url} />
				<View className="item-right">
					<View>
						<Button size="mini" className={item_btn_class}>
							{item_btn_content}
						</Button>
						<Text className="title">{title}</Text>
					</View>
					{isDetail ? (
                        <View className="item-desc">
                            <Text>{last_reply_at ? formatDate(last_reply_at) : ''}</Text>
							<Text>{author.loginname}</Text>
							<Text>
                                {visit_count ? visit_count : 0}次浏览
							</Text>
							
						</View>
					) : (
						<View className="item-desc">
							<Text>{author.loginname}</Text>
							<Text>
								{reply_count}/{visit_count}
							</Text>
							<Text>{formatDate(last_reply_at)}</Text>
						</View>
					)}
				</View>
			</View>
		);
	}
}

export default TopicItem;
