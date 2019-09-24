import { USER_LOGIN_SUCCESS, GET_USER_DETAIL } from '../constants/user';
import Taro from '@tarojs/taro';

const USER_STATE = {
    userInfo: Taro.getStorageSync('userInfo') ? JSON.parse(Taro.getStorageSync('userInfo')) : {},
    userDetail: {},
    // accesstoken: '2ab4fe41-77ea-418d-b473-e930b3d4c6da'
};

export default (state = USER_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            Taro.setStorageSync('userInfo', JSON.stringify(action.userInfo));
            return {
                ...state,
                userInfo: action.userInfo,
            }
        case GET_USER_DETAIL:
            return {
                ...state,
                userDetail: action.userDetail,
            }
        default:
            return state;
    }
};
