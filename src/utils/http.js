'use strict'

import axios from 'axios'
import qs from 'qs'
import handleResponse from './handleResponse'

var baseApiUrl = process.env.baseApiUrl

//请求拦截器
axios.interceptors.request.use(config => {    // 这里的config包含每次请求的内容
    return config;
}, err => {
    return Promise.reject(err);
});

//响应拦截器
axios.interceptors.response.use(response => {
    handleResponse.handleResponse(response);//处理错误信息
    return response
}, error => {
    return Promise.resolve({ statusText : '网络异常，请稍后重试' })
});

// function checkStatus (response) {
//     // 如果http状态码正常，则直接返回数据
//     if (response && (response.status === 200 || response.status === 304 ||
//             response.status === 400)) {
//         return response
//     }
//     // 异常状态下，把错误信息返回去
//     return {
//         status: response ? response.status : 404,
//         msg: '网络异常'
//     }
// }

// function checkCode (res) {
//     // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
//     if (res.status !== 200) {
//         alert(res.msg)
//     }
//     if (res.data && res.data.ResultCode != "200") {
//         alert(res.data.ResultMessage)
//     }
//     return res
// }
// 请求方式的配置
export default {
    post (url, data) {  //  post
        return axios({
            method: 'post',
            baseURL: baseApiUrl,
            url,
            data: qs.stringify(data),
            timeout: 5000,
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        })
    },
    postApi (url, data) {  //  postapi 发现发送options 请求进行预检 以获知服务器是否允许该实际请求
        return axios({
            method: 'post',
            baseURL: baseApiUrl,
            url,
            data: JSON.stringify(data),
            timeout: 5000,
            headers:{
                'Content-Type':'application/json; charset=utf-8',
                'Token':localStorage.getItem('Token')?localStorage.getItem('Token'):'',
                'AuthCode':localStorage.getItem('AuthCode')?localStorage.getItem('AuthCode'):'',
                'EnterpriseId':localStorage.getItem('EnterpriseId')?localStorage.getItem('EnterpriseId'):'',
                'TerminalType':localStorage.getItem('TerminalType')?localStorage.getItem('TerminalType'):''
            }
        })
    },
    get (url, params) {  // get
        return axios({
            method: 'get',
            baseURL: baseApiUrl,
            url,
            params, // get 请求时带的参数
            timeout: 5000
        })
    },
    getApi (url, params) {  // get
        return axios({
            method: 'get',
            baseURL: baseApiUrl,
            url,
            params, // get 请求时带的参数
            timeout: 5000,
            headers:{
                'Content-Type':'application/json; charset=utf-8',
                'Token':localStorage.getItem('Token')?localStorage.getItem('Token'):'',
                'AuthCode':localStorage.getItem('AuthCode')?localStorage.getItem('AuthCode'):'',
                'EnterpriseId':localStorage.getItem('EnterpriseId')?localStorage.getItem('EnterpriseId'):'',
                'TerminalType':localStorage.getItem('TerminalType')?localStorage.getItem('TerminalType'):''
            }
        })
    }
}