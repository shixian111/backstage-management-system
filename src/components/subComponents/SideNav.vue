<template>
    <div id="sideNav">
        <el-row>
            <el-col>
                <el-menu router
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                background-color="#E7E8EB"
                text-color="#474747"
                active-text-color="#3A8FF5"
                :unique-opened="true"
                >
                <!-- <sidebar-item v-for="router of routers" :key="router.path" :item="router" :base-path="router.path"></sidebar-item> -->
               
                   <!-- <el-submenu :index="item.path" v-for="(item,index) in Info" :key="index">
                      <template slot="title">
                        <svg-icon :icon-class="item.svg" />
                         <span>{{item.name}}</span>
                      </template>
                      <template v-if="item.child">
                      <el-menu-item-group  v-for="(item1,index1) in item.child" :key="index1">
                        <el-menu-item :index="item1.path">
                            <svg-icon :icon-class="item1.svg" />
                            <span>{{item1.name}}</span>
                        </el-menu-item>
                      </el-menu-item-group>
                      </template>
                    </el-submenu> -->
                    <el-menu-item index="/EnterIn">
                        <svg-icon icon-class="home" />
                            <span>首页</span>
                    </el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                            <svg-icon icon-class="AIface" />
                            <span>AI刷脸管理</span>
                        </template>
                        <el-menu-item index="/AIface">
                        <svg-icon icon-class="menjin" />
                            <span>员工刷脸信息</span>
                        </el-menu-item>
                        <el-menu-item index="/faceM">
                        <svg-icon icon-class="faceIdentity" />
                            <span>人脸信息管理</span>
                        </el-menu-item>
                    </el-submenu>
                    
                    <!-- </el-menu-item> -->
                    <el-submenu index="2">
                        <template slot="title">
                        <svg-icon icon-class="shebei" />
                            <span>设备管理</span>
                        </template>
                        
                        <el-menu-item index="/watchM">
                        <svg-icon icon-class="jiankong" />
                            <span>监控管理</span>
                        </el-menu-item>
                        <el-menu-item index="/watchList">
                        <svg-icon icon-class="menjin" />
                            <span>告警记录</span>
                        </el-menu-item>
                    </el-submenu>
                     <el-submenu index="3">
                        <template slot="title">
                        <svg-icon icon-class="carM" />
                            <span>车辆管理</span>
                        </template>
                        <el-menu-item index="/carIn">
                        <svg-icon icon-class="carIn" />
                            <span>车辆进入信息</span>
                    </el-menu-item>
                     </el-submenu>
                   
                     
                </el-menu> 
                
            </el-col>
        </el-row>
    </div>
</template>
<style lang="scss">
    
</style>
<script>
// import {} from "../../api/api"
// import { mapGetters } from "vuex"
export default {
    data(){
        return{
            // Info:[
            //         {"svg":'home',"name":'首页','path':'/home'},
            //         {"svg":'fangyi',"name":'防疫管理','path':'/fangyi'},
            //         {"svg":'menjin',"name":'仓库门禁','path':'/stockM',child:{"svg":'menjin',"name":'测试','path':'/stockM1'}},
            //      ],
       
        }
    },
    created(){
        let that=this;
        that.getNav();
    },
    mounted(){
        let that=this;
        that.getNav();
    },
    methods:{
        getNav(){
            let that=this;
            //0普通用户 1超级管理员 2校管理员
            // getMe().then(res=>{
            //     let user=res.data.dataObj;
            //     if(user.role_id==1){
            //         that.Info=[{"icon":'el-icon-s-custom',"name":'校长信息','path':'/masterInfoIndex'},
            //         {"icon":'el-icon-s-check',"name":'职称评定','path':'/academicEvalIndex'},
            //         {"icon":'el-icon-share',"name":'流程管理','path':'/processMIndex'},
            //         {"icon":'el-icon-office-building',"name":'单位管理','path':'/unitMIndex'},
            //         {"icon":'el-icon-school',"name":'区域管理','path':'/areaMIndex'},
            //         {"icon":'el-icon-s-tools',"name":'角色配置','path':'/roleSetIndex'},
            //         {"icon":'el-icon-lock',"name":'权限管理','path':'/roleMIndex'},
            //         {"icon":'el-icon-tickets',"name":'模板配置','path':'/templateMIndex'},
            //         ];
            //     }
            //     else if(user.role_id==2){
            //         that.Info=[{"icon":'el-icon-s-custom',"name":'校长信息','path':'/masterInfoIndex'},
            //         {"icon":'el-icon-s-check',"name":'职称评定','path':'/academicEvalIndex'},];
            //     }else if(user.role_id==0){
            //         that.Info=[{"icon":'el-icon-user-solid',"name":'个人信息','path':'/myInfoIndex'},
            //         {"icon":'el-icon-s-check',"name":'职称评定','path':'/academicEvalIndex'},]
            //     }
            // })
        },
        // hasChild(info){
        //     let newInfo=info.filter(item=>item.children===true);
        //     console.log(info);
        // }
    },
   
    // computed:{
    //     ...mapGetters([
    //        'routers'
    //      ])
    // }
}
</script>
<style lang="scss" scoped>
#sideNav{
    position: fixed;
    width:inherit;
    height:100%;
    background-color: #e7e7e7;
     .is-active{
        background-color:#fff !important;
    }
}
</style>
