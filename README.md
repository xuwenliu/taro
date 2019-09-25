# taro

学习小程序框架 taro

`Taro` [https://taro-docs.jd.com/taro/docs/GETTING-STARTED.html](https://taro-docs.jd.com/taro/docs/GETTING-STARTED.html)

`Taro-ui` [https://taro-ui.jd.com/#/docs/quickstart](https://taro-ui.jd.com/#/docs/quickstart)

# 1.安装 CLI

$ npm install -g @tarojs/cli

$ yarn global add @tarojs/cli

$ cnpm install -g @tarojs/cli

# 2.初始化项目

taro init myApp

# 3.运行和打包

$ yarn dev:weapp

$ yarn build:weapp

$ yarn dev:h5

$ yarn build:h5

# 4.遇到的坑
### A.弹框中有原生组件（Input,Textarea）时，若设置了placeholder会直接显示在页面上（Android会出现）并且点击会唤起输入框。解决方法：根据是否显示弹框变量 来判断是否渲染弹框中的原生组件
```jsx
	<AtModal
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

```
### B.Taro-ui 组件样式不能自定义，只有自己用原生的写啦
### C.容易忘记导入Taro的组件，但是小程序里面是能识别，h5就会报错。
### D.post 请求在h5端默认请求参数类型未设置。需要加上
	header: {
		'content-type': 'application/json'
	}
	
	
```js

	export function postJSON(url, data) {
		Taro.showLoading();
		return Taro.request({
			url,
			data,
			method: "POST",
			header: {
				'content-type': 'application/json'
			}
		}).finally(() => {
			Taro.hideLoading();
		});
	}
```
### E.字体图标文件需要在每个组件里面单独引入，无法全局引入 本项目例如:Menu.jsx
### F.页面跳转和参数传递，返回
```js
	Taro.navigateTo({
    	url: "/pages/detail/index?topicId=" + id,
    });
	
	Taro.redirectTo({
    	url: "/pages/detail/index?topicId=" + id,
    });
	navigateTo ===> push
	redirectTo ===> replace
	
	Taro.navigateBack(); 返回
	

```
### G.使用本地图片需要采用require/import 的方式

```jsx
	<Image className="login-bg" src={require('../../assets/img/login_bg.jpg')} />
```
