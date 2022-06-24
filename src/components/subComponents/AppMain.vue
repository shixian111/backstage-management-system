<template>
<el-scrollbar class="app-wrapper">
  <div class="app-container">
    <div class="app_header">
      <main-header></main-header>
    </div>
    <div class="app_content">
      <div :class="closeNav? 'app_nav':'app_animateNav'">
        <side-nav v-if="closeNav"></side-nav>
      </div>

      <div :class="closeNav? 'show':'close'" @click="modifyNav(!closeNav)">
          <i :class="closeNav? 'el-icon-caret-left':'el-icon-caret-right'"></i>
      </div>
      
      <div class="app_right">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    
    </div>
  </div>
</el-scrollbar>
</template>

<script>
import mainHeader from '../../components/subComponents/mainHeader.vue'
import sideNav from '../../components/subComponents/SideNav.vue'
import {mapActions,mapGetters} from 'vuex'
// import {
//   getMe,
//   loginOut
// } from '../../api/api'
export default {
  
  data () {
    return {
      pathName: this.$route.name,
      screenWidth: document.body.clientWidth
    }
  },

  created(){
    this.getMeInfo()
  },
  mounted(){
    let that=this
    window.onresize = function windowResize () {
      // 通过捕获系统的onresize事件触发我们需要执行的事件
      that.modifyNav(false)
    }

  },
  methods:{
    ...mapActions(
      ['modifyNav','modifyUserInfo']// 相当于this.$store.dispatch('modifyName'),提交这个方法
    ),
    /**
     * 获取个人信息
     */
    getMeInfo(){
      let that=this
      // getMe().then(res=>{
      //   if(res.code==200){
      //     let user=res.data.dataObj;
      //     that.modifyUserInfo(user);
      //     if(user.role_id==0){
      //         that.role="教师"
      //     }
      //     else if(user.role_id==1){
      //         that.role="区管理员"
      //     }else{
      //        that.role="校管理员"
      //     }
      //   }
      // })
    }
  },
  computed:{
    ...mapGetters(
      ['closeNav','userInfo']// 动态计算属性，相当于this.$store.getters.closeNav
    )
  },
  components:{
    mainHeader,
    sideNav,
  },
  watch: {
    '$route': function(){
      this.pathName = this.$route.name;

    }
  }
}
</script>

<style lang="scss" scoped>
  // *{
  //   padding: 0;
  //   margin: 0;
  // }
  .app-wrapper{
        position:absolute;
        width:100%;
        height:100vh;
        /deep/ .el-scrollbar__wrap{
        overflow-x:hidden;
        }
        /deep/ .el-scrollbar__view{
          height:100%;
        }
        .app-container{
          height:100%;
          
        }
  }
  // #app{
  //   height: 100%;
  //   display: flex;
  //   flex-flow: column;
  // }
  .app_header{
    position: relative;
    flex: 0 0 auto;
    z-index: 2;
  }
  .app_content{
    // padding-top:65px;
    display: flex;
    flex-flow: row;
    position: relative;
    height:100%;
    }
  .app_nav{
    position: relative;
    width: 210px;
    margin-top:45px;
    height: inherit;
    // min-height:544px;
    // overflow-y:scroll ;
    padding-top:20px;
    background: #E7E8EB;
    animation: animateIn 0.5s;
  }
  .app_animateNav{
    animation: animateOut 0.5s;
    position: relative;
    padding-top:20px;
    height: inherit;
    background: #E7E8EB;
    // left: -210px;
  }
  @keyframes animateOut
  {
    from {
      left: 0;
      width: 210px;
    }
    to {
      left: -210px;
      width: 0;
    }
  }
  @keyframes animateIn
  {
    from {
      left: -210px;
      width: 0;
    }
    to {
      left: 0px;
      width: 210px;
    }
  }
  .app_right{
    flex: 1;
    // overflow: hidden;

  }
  .breadcrumb{
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }

.show{
    position: fixed;
    animation: showOut 0.5s;
    height: 120px;
    width: 15px;
    top: 45vh;
    left: 196px;
    background-color: #c2c8d9;
    z-index: 1200;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    i{
        color: white;
        font-size: 15px;
    }
}
.close{
    animation: showIn 0.5s;
    position: fixed;
    height: 120px;
    width: 15px;
    top: 45vh;
    left: 0px;
    // background-color: rgba(71,104,228,1);
    background-color: #c2c8d9;
    z-index: 1200;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    i{
        color: white;
        font-size: 15px;
    }
}
@keyframes showOut
  {
    from {
      left: 0;
    }
    to {
      left: -210px;
    }
  }
  @keyframes showIn
  {
    from {
      left: -210px;
    }
    to {
      left: 0px;
    }
  }
 
</style>
