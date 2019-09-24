import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtNoticebar, AtButton } from 'taro-ui';
import { connect } from "@tarojs/redux";

import './user.less';

import { Head } from '../../components/user/Head';
import { Panel } from '../../components/user/Panel';
import { getUserDetail } from '../../actions/user';
import { formatDate } from '../../utils/lib';

const mapStateToProps = state => ({
	userDetail: state.user.userDetail,
	userInfo: state.user.userInfo,
});
const mapDispatchToProps = dispatch => ({
	getUserDetail: params => {
		dispatch(getUserDetail(params));
	},
});

@connect(
	mapStateToProps,
	mapDispatchToProps
)
class User extends Component {
	config = {
		navigationBarTitleText: '个人信息'
	}
	componentDidMount() {
		let params = {
			loginname: this.props.userInfo.loginname
		}
		this.props.getUserDetail(params);
	}

	goCreateTopic() {
		if (this.props.userInfo.accesstoken) {
			Taro.redirectTo({ url: '/pages/publish/publish' });
		} else {
			Taro.navigateTo({ url: '/pages/user/login' });
		}
	}
	render() {
		const { userDetail, userInfo } = this.props;
		return <View className="user">
			<Head userInfo={userInfo} />
			<AtNoticebar>
				<View className="user-jf">
					<Text>{userDetail.score}积分</Text>
					<Text>注册时间：{formatDate(userDetail.create_at)}</Text>
				</View>
			</AtNoticebar>
			<Panel title="最近创建的话题" list={userDetail.recent_topics} />
			<Panel title="最近参与的话题" list={userDetail.recent_replies} />
			<View className="reply-btn">
				<AtButton type='primary' full onClick={this.goCreateTopic.bind(this)}>发布话题</AtButton>
			</View>
		</View>;
	}
}

export default User;
