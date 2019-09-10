import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Button } from "@tarojs/components";
import { formatDate, getDesc } from "../../utils/lib";
import "./TopicItem.less";

class TopicItem extends Component {
    goDetail = (id) => {
        Taro.navigateTo({
            url: '/pages/detail/index?topicId=' + id
        })
    }
	render() {
		const { title, author, reply_count, visit_count, last_reply_at, top, tab, good,id } = this.props;
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
					<View className="item-desc">
						<Text>{author.loginname}</Text>
						<Text>
							{reply_count}/{visit_count}
						</Text>
						<Text>{formatDate(last_reply_at)}</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default TopicItem;
