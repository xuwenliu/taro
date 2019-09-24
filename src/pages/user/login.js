import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtInput, AtButton } from 'taro-ui';
import { connect } from "@tarojs/redux";

import './login.less';

import Head from '../../components/user/Head';
import { login } from '../../actions/user';

const mapStateToProps = state => ({
	accesstoken: state.user.accesstoken,
});
const mapDispatchToProps = dispatch => ({
	login: params => {
		return dispatch(login(params));
	},
});

@connect(
	mapStateToProps,
	mapDispatchToProps
)
class Login extends Component {
	config = {
		navigationBarTitleText: '登录'
	}
	state = {
		accesstoken: '',
		disabled: false,
	}
	handleChange(value) {
		this.setState({
			accesstoken: value
		})
		return value;
	}
	login() {
		if (this.state.accesstoken) {
			let params = {
				accesstoken: this.state.accesstoken
			}
			this.setState({
				disabled: true
			})
			this.props.login(params).then(res => {
				this.setState({
					disabled: false
				})
				if (res.success) {
					Taro.navigateBack();
				}
			});
		} else {
			Taro.showToast({
				title: '请输入accesstoken',
				icon: 'none'
			})
		}
	}
	render() {
		let { accesstoken } = this.state;
		return <View>
			<Head />
			<View className="login-body">
				<AtInput
					type='text'
					value={accesstoken}
					placeholder="请输入accesstoken验证"
					onChange={this.handleChange.bind(this)}
				/>
				<AtButton
					full
					type="primary"
					className="login-btn"
					loading={this.state.disabled}
					disabled={this.state.disabled}
					onClick={this.login.bind(this)}
				>登录</AtButton>
			</View>
		</View>;
	}
}

export default Login;
