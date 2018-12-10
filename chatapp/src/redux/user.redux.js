import axios from "axios"

import {getRediectUrl} from "../util"

const AUTH_SUCCESS = "AUTH_SUCCESS"
const INFO_UPDATE = "INFO_UPDATE"
const ERROR_MSG = "ERROR_MSG"
const LOGOUT = "LOGOUT"

const initstate = {
    user : "",
    type : "",
    redirectTo : "",

}

export function user (state = initstate, action){
    switch (action.type){
        case AUTH_SUCCESS :
            return {...state ,redirectTo : getRediectUrl(action.payload) ,...action.payload}
        case ERROR_MSG :
            return {...state , msg : action.msg }
        case INFO_UPDATE : 
            return {...state }
        case LOGOUT : 
            return {...initstate}
        default : 
            return state
    }
}

export function authSuccess (data){
    return {type : AUTH_SUCCESS ,payload : data}
}

function errorMsg (msg){
    return {type : ERROR_MSG ,msg}
}

function update(data){
    return {type : INFO_UPDATE , payload : data}
}

// authRoute认证
export function loadData (data){
    return {type:AUTH_SUCCESS ,payload : data}
}

// 注册
export function register ({user,pwd,repeatpwd,type}){
    if(!user || !pwd || !repeatpwd){
        return errorMsg("用户名或口令为空！")
    }
    if(pwd !== repeatpwd){
        return errorMsg("两次输入的口令不一致！")
    }
    return dispatch => {
        axios.post("/user/register",{user,type,pwd})
            .then( res => {
                if(res.status === 200 && res.data.code  === 0){
                    console.log(res.data.data)
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}

//  登录
export function login ({user,pwd}){
    if(!user || !pwd ){
        return errorMsg("用户名或口令为空！")
    }
    return dispatch => {
        axios.post("/user/login",{user,pwd})
            .then( res => {
                if(res.status === 200 && res.data.code  === 0){
                    console.log(res.data.data)
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}

// 信息更新
export function infoUpdate(data){
    return dispatch => {
        axios.post("/user/update",data)
            .then( res => {
                if(res.status === 200 && res.data.code  === 0){
                    console.log(res.data.data)
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}

// 退出登录
export function logout(){
    return {type : LOGOUT}
}