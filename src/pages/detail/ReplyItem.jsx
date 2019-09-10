import Taro, { Component } from "@tarojs/taro";
import { View, RichText, Text } from "@tarojs/components";
import { AtBadge, AtTag } from "taro-ui";

import { formatDate, getRichImg } from "../../utils/lib";
import "../../assets/font/iconfont.css";
import "./ReplyItem.less";

class ReplyItem extends Component {
	handleLike = topicId => {
		console.log("点赞", topicId);
	};
	render() {
		let { create_at, content, ups, author, index, is_uped, id, reply_id } = this.props;
        content = getRichImg(content);
		return (
            <View className={ups && ups.length >= 3 ? "light reply-item" : "reply-item"}>
				<View className="reply-top">
					<Image className="avatar" src={author.avatar_url} />
					<View className="reply-top-right">
						<View>
							<Text className="name">{author.loginname}</Text>
							<Text className="time">
								{index}楼·{formatDate(create_at)}
                            </Text>
                            {
                                reply_id ? <AtTag size="small" active circle type="primary">作者</AtTag> : null
                            }
						</View>
						<View className="zan">
							<AtBadge value={ups ? ups.length : 0} maxValue={99}>
								{is_uped ? <Icon className="iconfont iconzan active"></Icon> : <Icon onClick={this.handleLike.bind(this, id)} className="iconfont iconzan"></Icon>}
							</AtBadge>
							<Icon className="iconfont iconzhuan"></Icon>
						</View>
					</View>
				</View>
				<View className="reply-bottom">
					<RichText nodes={content} />
				</View>
			</View>
		);
	}
}

export default ReplyItem;