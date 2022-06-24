<template>
  <div id="watchIndex">
    <div class="content-wrap">
      <headerBread
        title="监控管理"
        :bread="[{ path: '/watchM', title: '监控管理' }]"
      ></headerBread>
      <div class="page-header"></div>
      <div class="page-middle">
        <div class="vedioList">
           <div class="vedioBox">
            <video
              class="demo-video"
              ref="player"
              muted
              autoplay="autoplay"
              controls
            >
              <source src="movie.mp4" type="video/mp4" />
              您的浏览器不支持 video 标签。
            </video>
            <div class="vedioDes">
              设备ID:0001
              <p>位置：办公室大门</p>
            </div>
            <el-popover placement="right" width="400" trigger="click">
              <el-table :data="watchList">
                <el-table-column
                 
                  property="content"
                  label="告警内容"
                ></el-table-column>
                <el-table-column
                 
                  property="time"
                  label="发生时间"
                ></el-table-column>
                   <el-table-column
                 
                  property="isDeal"
                  label="是否处理"
                ></el-table-column>
                <el-table-column
                  
                  property="responser"
                  label="负责人"
                ></el-table-column>
                <el-table-column
                  
                  property="phone"
                  label="负责人电话"
                ></el-table-column>
              </el-table>
              <div class="warnTips" slot="reference">22条告警</div>
            </el-popover>
          </div>
          <div class="vedioBox">
            <video
              class="demo-video"
              ref="player"
              muted
              autoplay="autoplay"
              controls
            >
              <source src="movie.mp4" type="video/mp4" />
              您的浏览器不支持 video 标签。
            </video>
            <div class="vedioDes">
              设备ID:0002
              <p>位置：实验室1</p>
            </div>
            <el-popover placement="right" width="400" trigger="click">
              <el-table :data="watchList">
                <el-table-column
                 
                  property="content"
                  label="告警内容"
                ></el-table-column>
                <el-table-column
                 
                  property="time"
                  label="发生时间"
                ></el-table-column>
                   <el-table-column
                 
                  property="isDeal"
                  label="是否处理"
                ></el-table-column>
                <el-table-column
                  
                  property="responser"
                  label="负责人"
                ></el-table-column>
                <el-table-column
                  
                  property="phone"
                  label="负责人电话"
                ></el-table-column>
              </el-table>
              <div class="warnTips" slot="reference">22条告警</div>
            </el-popover>
          </div>
          <div class="vedioBox">
            <video
              class="demo-video"
              ref="player"
              muted
              autoplay="autoplay"
              controls
            >
              <source src="movie.mp4" type="video/mp4" />
              您的浏览器不支持 video 标签。
            </video>
            <div class="vedioDes">
              设备ID:0003
              <p>位置：实验室2</p>
            </div>
            <el-popover placement="right" width="400" trigger="click">
              <el-table :data="watchList">
                <el-table-column
                 
                  property="content"
                  label="告警内容"
                ></el-table-column>
                <el-table-column
                 
                  property="time"
                  label="发生时间"
                ></el-table-column>
                   <el-table-column
                 
                  property="isDeal"
                  label="是否处理"
                ></el-table-column>
                <el-table-column
                  
                  property="responser"
                  label="负责人"
                ></el-table-column>
                <el-table-column
                  
                  property="phone"
                  label="负责人电话"
                ></el-table-column>
              </el-table>
              <div class="warnTips" slot="reference">22条告警</div>
            </el-popover>
          </div>
        </div>
      
      </div>
      <div class="page-foot"></div>
    </div>
  </div>
</template>
<script>
import headerBread from "@/components/comComponents/headerBread";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      // gridData: [
      //   {
      //     date: "2016-05-02",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //   },
      //   {
      //     date: "2016-05-04",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //   },
      //   {
      //     date: "2016-05-01",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //   },
      //   {
      //     date: "2016-05-03",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //   },
      // ],
      watchList: [
        { content: "人员闯入", time: "2022-08-09",responser:'张三',phone:'13123456789',isDeal:'已处理'},
      ],
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      // this._initScroll()
    });
  },
  methods: {
    _initScroll() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.rankContent, {
          scrollY: true,
          click: true,
          scrollbar: {
            fade: false,
            interactive: true, // 1.8.0 新增
          },
          mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: 300,
          },
        });
      } else {
        this.scroll.refresh();
      }
    },
  },
  components: {
    headerBread,
  },
};
</script>
<style lang="scss" scoped>
#watchIndex {
  .page-middle {
    .vedioList {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      // height:600px;
      .vedioBox {
        position: relative;
        width: 30%;
        height: 230px;
        border: 1px solid #ddd;
        border-radius: 6px;
        video {
          width: 100%;
          height: 100%;
        }
        .vedioDes {
          float: left;
          font-size: 12px;
          color: #666;
          p {
            display: inline;
            padding-left: 20px;
          }
        }
        .warnTips {
          position: absolute;
          right: -10px;
          top: -10px;
          background-color: red;
          color: #fff;
          border-radius: 6px;
          padding: 5px;
          cursor: pointer;
        }
      }
    }
    .listBox {
      float: right;
      width: 45%;
      .rank {
        .content {
          border: 1px solid #eee;
          height: 450px;
          overflow: hidden;
        }
        .title {
          background: #dde3ef;
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
              margin-right: 10px;
              border-radius: 4px;
              vertical-align: middle;
            }
          }
        }
        .wrapper-watch {
          margin: 0;
          padding: 10;
          .watch-item {
            height: 50px;
            padding: 10px;
            .avatar {
              width: 50px;
              height: 50px;
              border: 1px solid #888;
              border-radius: 4px;
              vertical-align: bottom;
            }
            .watch-info {
              display: inline-block;
              padding-left: 5px;
              .name {
                color: #999;
              }
              .value {
                color: red;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<style>
.el-scrollbar__bar {
  display: none !important;
}
</style>
