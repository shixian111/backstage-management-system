<template>
    <div class="header-wraper">
        <div class="logoAndName">
            <div class="logo">
                <img src="../../assets/logo.png" alt="">
            </div>
            <p>宝德智慧园区数据管理系统</p>
        </div>
        
        <div class="userAndOperate">
            <div class="user">
              <!-- <el-dropdown @command="changeRole" > 
                <p style="cursor:pointer">{{user.name}}-{{role[user.role_id]}}<i  class="el-icon-caret-bottom el-icon--right"></i></p>
                <el-dropdown-menu slot="dropdown"  >
                    <el-dropdown-item v-for="(item,index) in user.role_arr" :key="index" v-show="item.role_name!=role[user.role_id]" :command="item.role_id">切换角色为：{{role[item.role_id]}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown> -->
            </div>
            <div class="bigScreen" @click="goBigScreen">人脸检测</div>
            <el-tooltip effect="light" content="全屏切换" placement="bottom" class="screenfullClass">
              <screenfull></screenfull>
            </el-tooltip>
            <div class="operate exit" @click="signOut()">
                <p>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;退出登录</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
// import {
  
// } from '../../api/api'
import Screenfull from '@/components/screenfull'
export default {
  data () {
    return {
      role_length:'',//记录当前用户到底有多少个角色 方便后面切换 如果角色大于1就可以切换，否则提示不能切换
      user:[],//用户信息
      role:['教师','区管理员','校管理员']
    }
  },
  created(){
    
  },
  mounted(){
    let that=this;
    that.getMeInfo();
  },
  methods:{
    ...mapActions(
      ['modifyUserInfo']// 相当于this.$store.dispatch('modifyName'),提交这个方法
    ),
    /**
     * 获取个人信息
     */
    getMeInfo(){
       
    },
    signOut(){

         this.$router.push({path:'/login'})
    },
    //切换角色
    changeRole(command) {
      let that=this;
      let params={};
    //   if(that.role_length<=1){
    //     return that.$message.error("当前用户只有一个角色不能切换角色");
    //   }
    //   params.role_id=command;
    //   console.log(command);
    //   changeLogin(params).then(res=>{
    //     if(res.code==200){
    //           if(command==0){
    //             that.$router.push({path:"/personalTableIndex"});
    //           }else{
    //             that.$router.push({path:"/personalInfo"});
    //           }
    //          window.location.reload();
    //     }else if(res.code==100){
    //          that.$notify.error({
    //                   title: '您已处于未登录状态，请先登录',
    //                 });
    //     }
    //   })
    },
    //去可视化大屏
    goBigScreen(){
         this.$router.push({path:'/bigScreen'})
    }
  },
  components:{
    Screenfull
  },
  computed:{
    ...mapGetters(
      ['userInfo']// 动态计算属性，相当于this.$store.getters.closeNav
    )
  },
}
</script>


<style lang="scss" scoped>
.header-wraper{
    position: fixed;
    width: 100%;
    height: 45px;
    line-height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    background-size: 100% 100%;
    background-image: url('../../assets/headerImg.png');
    background-repeat: no-repeat;
}
.logoAndName{
    display: flex;
    align-items: center;
    margin-left:30px;
    p{
        color: #fff;
        font-size: 18px;
        margin-left: 1vw;
        font-weight: bold;
        
    }
    .school{
          font-weight: normal;
          font-size:16px;
        }
}
.logo{
    height: 4.6vh;
    width: 4.6vh;
    border-radius: 2.3vh;
    display: flex;
    flex-direction: row;
    img{
        height: 4.6vh;
        width: 4.6vh;
    } 
}
.userAndOperate{
    display: flex;
    margin-right:30px;
    // flex-direction: row;
    align-items: center;
    // text-align: center;
    font-size: 0.7vw;
    .bigScreen{
      color:#fff;
      border: 1px solid #fff;
      padding:5px;
      margin-right:20px;
      height:20px;
      line-height: 20px;
      border-radius: 5px;
      cursor: pointer;
      &:hover{
        background-color: #344ba5;
        // color:#333333;
        border:1px solid #344ba5;
      }
    }
    .screenfullClass{
      height:20px;
    }
}
.user{
    margin-right: 1.5vw;
    p{
        color: #333333;
    }
}
.operate{
    cursor:pointer;
    p{
        color: #333333;
        padding: 0 1vw;
        border: 1px solid #D2D2D2;
        border-radius: 15px;
    }
}
.userAndOperate .exit p{
      color:#fff;
      border:none;
    }
</style>
<style>
    .el-dropdown-link {
      margin-right:30px;
    }
</style>
