import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtCard, AtAvatar } from "taro-ui";

import './Panel.less';
import { formatDate, getDesc } from '../../utils/lib';

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
                        // 20/30(访问量/回复数)
                        let note = '';
                        if (item.visit_count) {
                            note = `${item.visit_count}(访问量)`;
                        }
                        if (item.reply_count) {
                            note = `${item.reply_count}(回复数)`;
                        }

                        if (item.visit_count && item.reply_count) {
                            note = `${item.reply_count}/${item.visit_count}(回复数/访问量)`;
                        }

                        let tabStr = item.tab && getDesc(null, null, item.tab)[1];


                        return <View key={item.id} className="panel-item">
                            <AtCard
                                title={item.title}
                                extra={tabStr}
                                note={note}
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
