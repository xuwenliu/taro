
import { USER_LOGIN_SUCCESS,GET_USER_DETAIL } from '../constants/user';

import { getJSON, postJSON } from "../utils/request";
import api from "../constants/api";
import Taro from '@tarojs/taro';

const loginSuccess = (userInfo) => {
    return {
        type:USER_LOGIN_SUCCESS,
        userInfo,
    }
}

const getUserDetailData = (userDetail) => {
    return {
        type:GET_USER_DETAIL,
        userDetail,
    }
}

// 登录
export const login = (params) => {
    return async dispatch => {
        let result = await postJSON(api.check_user_token, params);
        if (result && result.data && result.data.success) {
            let userInfo = {
                accesstoken:params.accesstoken,
                ...result.data
            }
            dispatch(loginSuccess(userInfo));
            Taro.setStorageSync('userInfo',JSON.stringify(userInfo));
            return result.data;
        } else {
            Taro.showToast({
                title: result.data.error_msg,
                icon: 'none',
            })
        }
        return false;
    }
}

//获取用户信息
export const getUserDetail = (params) => {
    return async dispatch => {
        let result = await getJSON(api.get_user_info + params.loginname,);
        if (result && result.data && result.data.success) {
            dispatch(getUserDetailData(result.data.data));
        } else {
            Taro.showToast({
                title: result.data.error_msg,
                icon: 'none',
            })
        }
    }
}