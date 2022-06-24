<template>
  <div id="masterIndex">
    <div class="content-wrap">
      <headerBread
        title="设置大屏数据"
        myStyle="display:none"
        :bread="[{ path: '/home', title: '首页' }]"
      ></headerBread>
      <div class="page-header">
        
        <div class="fangyiM">
          <!-- <div id="lottieCeshi" ref="lottieCeshi"></div>
          <div class="fangyiImg"><img src="../../assets/做核酸啦.png" /></div>
          <div class="fangyiImg"><img src="../../assets/核酸检测.png" /></div>
          <div class="fangyiImg"><img src="../../assets/消毒.png" /></div>
          <div class="fangyiImg"><img src="../../assets/战胜疫情.png" /></div> -->
        </div>
      </div>
      <div class="page-middle">
        <el-row class="home-part2" :gutter="0">
          <!--  -->
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="watchStatistic">
              <div class="title">
                <p class="title-value" >人员进入刷脸统计</p>
              </div>
              <div class="content">
               <near-six-month width="100%" height="100%" :EnterPeople="EnterPeople"></near-six-month>
               </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <div class="watchStatistic" style="margin-left:20px">
                <div class="title">
                  <p class="title-value">体温统计</p>
                </div>
                <div class="content">
                    <bar-chart width="100%" height="100%" :EnterPeople="EnterPeople"></bar-chart>
                </div>
              </div>
            </el-col>
        </el-row>
      </div>
      <div class="page-foot"></div>
    </div>
  </div>
</template>
<script>
import headerBread from "@/components/comComponents/headerBread";
import * as echarts from "echarts";
// //引入lottie的动图
// import lottie from "lottie-web";
// import washHandJson from "@/assets/lottie-json/washHand.json";
//最近六个月的记录
import NearSixMonth from '@/views/home/near-six-month';
//体温统计
import BarChart from '@/views/home/barChart'

export default {
  data() {
    return {
      EnterPeople: [234, 433, 222, 213, 123, 143, 190,89,23,34,5,6,123,54,87,98,32,43,97,10]
    };
  },
  created() {
    
  },
  mounted() {
    // this.$nextTick(function () {
    //   this.drawpictorialBar("userMul");//加载条形图
    // });
    //加载lottie动画
    // lottie.loadAnimation({
    //   container: this.$refs.lottieCeshi, // the dom element that will contain the animation
    //   renderer: "svg",
    //   loop: true,
    //   autoplay: true,
    //   animationData: washHandJson, // the path to the animation json
    // });
  },
  methods: {

    // drawpictorialBar(id) {
    //   this.charts = echarts.init(document.getElementById(id));
    //   let option;

    // },
  },
  components: {
    headerBread,
    NearSixMonth,
    BarChart
  },
};
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
#masterIndex {
  #userMul {
    width: 400px;
    height: 350px;
    border: 1px solid #eee;
    margin: 20px 40px;
  }
  .fangyiM {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    border: 1px solid #eee;
    margin:10px 40px;
    padding:10px 0;
    #lottieCeshi {
      width: 200px;
      height: 200px;
      // border: 1px solid #eee;
    }
    .fangyiImg{
      // border: 1px solid #eee;
       position: relative;
       height:150px;
       width: 150px;
      img {
        // padding:10px;
        position: absolute;
        top:50%;
        margin-top:-53px;
        height:150px;
        width: 150px;
        display:table-cell;        
        // border: 1px solid #eee;
       }
    }
    
  }

  .home-part2 {
    .watchStatistic {
      border: 1px solid #eee;
      height: 300px;
      margin-top:5px;
      .title {
        //  background: #dde3ef;
        border-bottom: 1px solid #dde3ef;
        padding: 10px 0;
        .title-value {
          margin-left: 4px;
          text-indent: 4px;
          color: #666;
          &:before {
            display: inline-block;
            content: "";
            width: 4px;
            height: 16px;
            background: blue;
            margin-right: 4px;
            border-radius: 4px;
            vertical-align: middle;
          }
        }
      }
      .content {
        width: 100%;
        height: 260px;
      }
    }
  }
}
</style>