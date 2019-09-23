import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import './Head.less';
class Head extends Component {
    render() {
        const { userInfo } = this.props;
        return <View className="login-head">
            <Image className="login-bg" src={require('../../assets/img/login_bg.jpg')} />
            <Image
                className="login-avatar"
                src={userInfo.avatar_url ? userInfo.avatar_url : require('../../assets/img/avatar.jpeg')} />
            {
                userInfo.loginname ? <Text className="login-name">{userInfo.loginname}</Text> : null
            }
        </View>
    }
}

Head.defaultProps = {
    userInfo:{
        avatar_url:'',
        loginname:'',
    }
}

export default Head;
