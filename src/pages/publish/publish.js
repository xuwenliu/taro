import Taro, { Component } from "@tarojs/taro";
import { View, Picker, Button } from "@tarojs/components";
import { AtInput, AtTextarea } from 'taro-ui';
import { connect } from "@tarojs/redux";

import './publish.less';

import { createTopic } from '../../actions/topic';

const mapStateToProps = state => ({
    selectorData: state.menu.cataData,
    userInfo: state.user.userInfo
});
const mapDispatchToProps = dispatch => ({
    createTopic: params => {
        return dispatch(createTopic(params));
    },
});

@connect(
    mapStateToProps,
    mapDispatchToProps
)
class Publish extends Component {
    config = {
        navigationBarTitleText: '发布话题'
    }
    state = {
        title: '',
        selector: [],
        selectorIndex: '',
        content: '',
        disabled: false,
    }
    componentDidMount() {
        let selector = this.props.selectorData.filter((item, index) => index > 1);
        this.setState({
            selector
        })
    }
    onSubmit() {
        let { userInfo, createTopic } = this.props;
        let { title, selector, selectorIndex, content } = this.state;
        let tab = selectorIndex ? selector[selectorIndex].key : '';
        let params = {
            accesstoken: userInfo.accesstoken,
            title,
            content,
            tab,
        }
        if (params.title && params.content && params.tab) {
            this.setState({
                disabled: true
            })
            createTopic(params).then(res => {
                this.setState({
                    disabled: false
                })
                if (res.success) {
                    // Taro.navigateBack(); //返回之前的页面不会使其刷新
                    Taro.redirectTo({ url: '/pages/user/user' });
                }
            })
        } else {
            Taro.showToast({
                title: '分类或者标题内容都不能为空',
                icon: 'none'
            })
        }
    }
    onReset() {
        this.setState({
            title: '',
            selectorIndex: '',
            content: '',
        })
    }
    handleChangeTitle(title) {
        this.setState({
            title
        })
    }
    handleChangeContent(e) {
        this.setState({
            content: e.detail.value
        })
    }
    onChange(e) {
        this.setState({
            selectorIndex: e.detail.value
        })
    }
    render() {
        let { title, selector, selectorIndex, content, disabled } = this.state;
        let selectedValue = selectorIndex ? selector[selectorIndex].value : '';
        return <View>

            <AtInput
                name='title'
                title='话题标题'
                type='text'
                placeholder='标题字数10字以上'
                value={title}
                onChange={this.handleChangeTitle.bind(this)}
            />
            <Picker mode='selector'
                range={selector}
                rangeKey="value"
                value={selectorIndex || 0}
                onChange={this.onChange}
            >
                <AtInput
                    name='value'
                    title='选择板块'
                    type='text'
                    editable={false}
                    placeholder='点击选择发布板块'
                    value={selectedValue}
                />
            </Picker>

            <View className="publish-textarea">
                <AtTextarea
                    height={600}
                    value={content}
                    onChange={this.handleChangeContent.bind(this)}
                    maxLength={3000}
                    placeholder='请输入话题详细信息...'
                />
            </View>
            <View className="publish-btn-group">
                <Button loading={disabled} disabled={disabled} onClick={this.onSubmit.bind(this)} className="btn">发布</Button>
                <Button onClick={this.onReset.bind(this)} className="btn">重置</Button>
            </View>
        </View>;
    }
}

export default Publish;
