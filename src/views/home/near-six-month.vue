<template>
  <div ></div>
</template>
<script>
import { debounce } from "@/utils";
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
require("echarts/lib/component/tooltip");
//引入echarts随着宽度的变化而变化的组件，而不是窗口改变了才改变
import elementResizeDetectorMaker from "element-resize-detector";
export default {
  name: "near-six-month",
  props: {
    width: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "",
    },
    EnterPeople: {
      type: Array,
      default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  },
  data() {
    return {
      optionData: [],
      legendData: ["刷脸人数"],
      xAxisData: this.getNearSixMonth(),
    };
  },
  methods: {
    getNearSixMonth() {
      let value = [];
      let dottedBase = +new Date();
      for (let i = 0; i < 20; i++) {
        let date = new Date((dottedBase -= 3600 * 24 * 1000));
        value.push(
          [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
        );
      }
      return value;
    },
    initChart() {
      this.charts = echarts.init(this.$el);
      this.charts.setOption({
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "50px",
          right: "10px",
          bottom: "30px",
          top: "10px",
        },
        legend: {
          data: this.legendData,
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: this.xAxisData,
        },
        yAxis: {
          type: "value",
          // splitLine:{show:false},
        },
        series: [
          {
            name: "刷脸人数",
            // itemStyle: {
            //   normal: { label: { show: true, position: "top", distance: 6 , color:'#a6cdff'} },
            // },
            type: "line",
            stack: "总量",
            data: this.EnterPeople,
          },
        ],
      });
    },
  },
  mounted() {
    let erd=elementResizeDetectorMaker();
    this.$el.style.width = this.width;
    this.$el.style.height = this.height;
    this.initChart();
    this.__resizeHanlder = debounce(() => {
      if (this.charts) {
        this.charts.resize();
      }
    }, 100);
    window.addEventListener("resize", this.__resizeHanlder);
    erd.listenTo(this.$el,this.__resizeHanlder) //只要框的大小变动 echarts表格宽度也跟着变动
  },
};
</script>
