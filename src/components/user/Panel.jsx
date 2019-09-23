import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtCard, AtAvatar } from "taro-ui";

import './Panel.less';
import { formatDate } from '../../utils/lib';

class Panel extends Component {
    goDetail = id => {
        Taro.navigateTo({
            url: "/pages/detail/index?topicId=" + id,
        });
    };
    render() {
        const { title, list } = this.props;
        return <View>
            <View className="panel-title">
                {title}
            </View>
            {
                list && list.length > 0
                    ?
                    list.map(item => {
                        return <View key={item.id} className="panel-item">
                            <AtCard
                                title={item.title}
                                onClick={this.goDetail.bind(this, item.id)}
                            >
                                <View className="panel-body">
                                    <View className="panel-avatar">
                                        <AtAvatar size="small" image={item.author.avatar_url}></AtAvatar>
                                        <Text className="loginname">{item.author.loginname}</Text>
                                    </View>
                                    <Text>{formatDate(item.last_reply_at)}</Text>
                                </View>
                            </AtCard>
                        </View>
                    })
                    :
                    <View className="panel-nodata">无话题</View>
            }
        </View>;
    }
}

export default Panel;
