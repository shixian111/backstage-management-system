
export function modifySubNav({commit}, subNavStatus) { // commit 提交；name即为点击后传递过来的参数，此时是 'A餐馆'
    return commit ('modifySubNav', subNavStatus)
}

export function modifyNav({commit}, navStatus){
    return commit('modifyNav',navStatus)
}

export function modifyUserInfo({commit}, userInfo){
    return commit('modifyUserInfo',userInfo)
}
