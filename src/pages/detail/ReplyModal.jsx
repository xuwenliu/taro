import Taro, { Component } from "@tarojs/taro";
import { Button } from "@tarojs/components";
import { AtModal, AtTextarea, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui';

class ReplyModal extends Component {
    state = {
        value: ''
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleCancel() {
        this.props.onClose();
        this.setState({
            value: ''
        })
    }
    handleOk() {
        if (!this.state.value) {
            Taro.showToast({
                title: '请输入评论内容',
                icon: 'none'
            })
        } else {
            this.props.onOk(this.state.value);
            this.setState({
                value: ''
            })
        }
    }
    render() {
        const { isOpened, title } = this.props;
        const { value } = this.state;
        return <AtModal
            isOpened={isOpened}
            closeOnClickOverlay={false}
        >
            <AtModalHeader>{title}</AtModalHeader>
            <AtModalContent>
                {
                    // 这里判断是因为modal里面有textarea placeholder会直接显示在页面上
                    isOpened ? <AtTextarea
                        fixed={true}
                        value={value}
                        height={200}
                        onChange={this.handleChange.bind(this)}
                        maxLength={200}
                        placeholder='请输入回复内容...' /> : null
                }

            </AtModalContent>
            <AtModalAction>
                <Button onClick={this.handleCancel.bind(this)}>取消</Button>
                <Button onClick={this.handleOk.bind(this)}>确定</Button>
            </AtModalAction>
        </AtModal>
    }
}

export default ReplyModal;
