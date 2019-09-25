const rootPath_v1 = 'https://cnodejs.org/api/v1';
const requestApi = {
    rootPath_v1,
    get_topics: '/topics', // get 主题首页
    get_topic_info: '/topic/', // get 主题详情 /topic/:id

    topic_collect: '/topic_collect/collect', // post 收藏主题
    topic_de_collect: '/topic_collect/de_collect', // post 取消主题

    get_user_topic: '/topic_collect/', // get /topic_collect/:loginname 用户所收藏的主题

    check_user_token: '/accesstoken', // post 验证用户token
    get_user_info: '/user/',  // get /user/:loginname 用户详情

    create_topic: '/topics',// post 新建话题
    delete_topic: '/topics/delete', // post 删除话题 官方未提供接口
    update_topic: '/topics/update',//post 修改话题
    reply_topic: '/topic/', // post /topic/:topic_id/replies 回复评论
    up_reply: '/reply/', // post /reply/:reply_id/ups 点赞

    get_unred_msg_count: '/message/count',// get /message/count 获取未读消息数
    get_msg: '/messages', // get /messages 获取已读和未读消息

    mark_all: '/message/mark_all',// post /message/mark_all 标记全部已读
    mark_one: '/message/mark_one', // post /message/mark_one/:msg_id 标记单个消息为已读

}

const api = {};
for (let key in requestApi) {
    api[key] = rootPath_v1 != requestApi[key] ? rootPath_v1 + requestApi[key] : rootPath_v1;
}
export default api;