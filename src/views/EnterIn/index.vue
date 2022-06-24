<template>
  <div id="masterIndex">
    <div class="content-wrap">
      <!-- <headerBread
        title="设置大屏数据"
        myStyle="display:none"
        :bread="[{ path: '/home', title: '首页' }]"
      ></headerBread> -->
      <div class="page-header"></div>
      <div class="page-middle">
        <div class="mainContainer">
          <div class="videoM">
            <video controls>
              <source src="movie.mp4" type="video/mp4" />
              您的浏览器不支持 video 标签。
            </video>
          </div>
          <!-- <el-row class="home-part2" :gutter="0"> -->
          <!--  -->
          <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12"> -->
          <!-- <div class="statisticM"> -->
          <el-row class="home-part2" :gutter="0">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="watchStatistic">
                <div class="title">
                  <p class="title-value">人员刷脸统计</p>
                </div>
                <div class="content">
                  <near-six-month
                    width="100%"
                    height="100%"
                    :EnterPeople="EnterPeople"
                  ></near-six-month>
                </div>
              </div>
            </el-col>

            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="watchStatistic" style="margin-top: 16px">
                <div class="title">
                  <p class="title-value">人员分析</p>
                </div>
                <div class="content">
                  <bar-chart width="100%" height="100%"></bar-chart>
                </div>
              </div>
            </el-col>
          </el-row>

          <!-- </div> -->
        </div>
      </div>
      <div class="page-foot"></div>
    </div>
  </div>
</template>
<script>
import headerBread from "@/components/comComponents/headerBread";
import * as echarts from "echarts";
//引入lottie的动图
// import lottie from "lottie-web";
// import washHandJson from "@/assets/lottie-json/washHand.json";
//最近六个月的记录
import NearSixMonth from "@/views/home/near-six-month";
//体温统计
import BarChart from "@/views/EnterIn/barChart";

export default {
  data() {
    return {
      EnterPeople: [
        234, 433, 222, 213, 123, 143, 190, 89, 23, 34, 5, 6, 123, 54, 87, 98,
        32, 43, 97, 10,
      ],
    };
  },
  created() {},
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
    BarChart,
  },
};
</script>

<style lang="scss" scoped>
#masterIndex {
    .content-wrap{

    margin-top:0;
  #userMul {
    width: 400px;
    height: 350px;
    border: 1px solid #eee;
    margin: 20px 40px;
  }
  .page-middle {
    .mainContainer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      min-height: 82vh;
      .videoM {
        width: 50%;
        border: 1px solid #eee;
        // padding: 10px 0;
        margin-right: 10px;
        video{
            width: 100%;
            height: 100%;
        }
      }
      .home-part2 {
        width: 50%;
        display: flex;
        flex-direction: column;
        .watchStatistic {
          border: 1px solid #eee;
          height: 41vh;
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
            padding-top: 10px;
            width: 100%;
            height: 33vh;
          }
        }
      }
    }
  }
    }
}
</style>