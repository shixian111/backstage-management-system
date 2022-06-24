import axios from 'axios';

// import Promise from 'promise-polyfill'
// //解决promise在ie中未定义的问题
// if(!window.Promise){
//     window.Promise = Promise;
// }

const requests = axios.create({
    baseURL:"/api",
    timeout:5000,
});
//请求拦截器
requests.interceptors.request.use((config)=>{
    return config;
});
//返回拦截器
requests.interceptors.response.use((res)=>{
    return res.data;
},(error)=>{
    return Promise.reject(new Error('fail'));
});

export default requests;
// let base='/api';
// let base='';//线上
//export const getMe = params => {return axios.get(`${base}/V3_admin/User/getMe?t=`+new Date().getTime(),params).then(res=> res.data)};//获取登录用户
// export const getRole=params=>{return axios.get(`${base}/role`,params).then(res=>res.data)};//获取角色信息
// export const getMember=params=>{return axios.get(`${base}/member`,params).then(res=>res.data)};//读取成员列表
// export const getMemberRead=params=>{return axios.get(`${base}/member/read`,params).then(res=>res.data)};//读取成员信息
// export const memberSave=params=>{return axios.post(`${base}/member/save`,params).then(res=>res.data)};//添加成员
// export const memberUpdate=params=>{return axios.post(`${base}/member/update`,params).then(res=>res.data)};//更新成员
// export const getMemberdelete=params=>{return axios.get(`${base}/member/delete`,params).then(res=>res.data)};//删除成员
// export const getVenuetype=params=>{return axios.get(`${base}/venuetype`,params).then(res=>res.data)};//读取学校场地类型列表
// export const venuetypeCreate=params=>{return axios.post(`${base}/venuetype/create`,params).then(res=>res.data)};//添加场地类型
// export const getVenuetypeDelete=params=>{return axios.get(`${base}/venuetype/delete`,params).then(res=>res.data)};//删除场地类型
// export const getVenue=params=>{return axios.get(`${base}/venue`,params).then(res=>res.data)};//读取场地列表
// export const getVenueRead=params=>{return axios.get(`${base}/venue/read`,params).then(res=>res.data)};//读取场地信息
// export const venueSave=params=>{return axios.post(`${base}/venue/save`,params).then(res=>res.data)};//添加场地
// export const detailZone=params=>{return axios.get(`${base}/admin/zone/detailZone`,params).then(res=>res.data)};//区域详情
// export const deleteZone=params=>{return axios.post(`${base}/admin/zone/deleteZone`,params).then(res=>res.data)};//区域删除
// export const modifyZone=params=>{return axios.get(`${base}/admin/zone/modifyZone`,params).then(res=>res.data)};//区域修改
// export const zoneList=params=>{return axios.get(`${base}/admin/zone/zoneList`,params).then(res=>res.data)};//区域列表


