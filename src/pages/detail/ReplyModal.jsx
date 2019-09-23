import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { AtModal, AtTextarea,AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';
import { connect } from "@tarojs/redux";
import './replyModal.less';

const mapStateToProps = state => ({
    test: state.test,
});
const mapDispatchToProps = dispatch => ({
    test: () => {
        dispatch();
    },
});

@connect(
    mapStateToProps,
    mapDispatchToProps
)
class ReplyModal extends Component {
    state = {
        value: ''
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleCancel(){
        this.props.onClose();
        this.setState({
            value:''
        })
    }
    handleOk(){
        if(!this.state.value){
            Taro.showToast({
                title:'请输入评论内容',
                icon:'none'
            })
        }else {
            this.props.onOk(this.state.value);
            this.setState({
                value:''
            })
        }
    }
    render() {
        const { isOpened,title } = this.props;
        const { value } = this.state;
        return <AtModal
            isOpened={isOpened}
            closeOnClickOverlay={false}
        >
            <AtModalHeader>{title}</AtModalHeader>
            <AtModalContent>
                <AtTextarea
                    fixed
                    autoFocus={true}
                    focus={true}
                    value={value}
                    height={200}
                    onChange={this.handleChange.bind(this)}
                    maxLength={200}
                    placeholder='请输入回复内容...' />
            </AtModalContent>
            <AtModalAction>
                <Button onClick={this.handleCancel.bind(this)}>取消</Button>
                <Button onClick={this.handleOk.bind(this)}>确定</Button>
            </AtModalAction>
        </AtModal>
            ;
    }
}

export default ReplyModal;