import request from '@/utils/request.js'
// 获取首页帖子列表数据
export const getTopics = data => {
    return request({
         url:'/topics',
         method:'get',
         params: data
    })
}
// 获取帖子详情数据
export const getTopicById = id => {
    return request({
      url: `/topic/${id}`,
      method: 'get'
    })
}
//获取用户数据详情
export const getUserByName = loginname => {
    return request({
        url:`/user/${loginname}`,
        method:'get'
    })
}