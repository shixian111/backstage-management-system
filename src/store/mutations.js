
export const modifySubNav = (state, subNavStatus) => { 
    state.subNavStatus = subNavStatus // 把方法传递过来的参数，赋值给state中的resturantName
}

export const modifyNav=(state,navStatus)=>{
    state.closeNav=navStatus
}

export const modifyUserInfo=(state,userInfo)=>{
    state.userInfo=userInfo
}