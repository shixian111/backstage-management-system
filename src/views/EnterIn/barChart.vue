<template>
  <div></div>
</template>
<script>
import { debounce } from "@/utils";
let echarts = require("echarts/lib/echarts");
require("echarts/lib/component/toolbox");
require("echarts/lib/component/legend");
require("echarts/lib/chart/pie");
//引入echarts随着宽度的变化而变化的组件，而不是窗口改变了才改变
import elementResizeDetectorMaker from "element-resize-detector";
export default {
  name: "bar",
  props: {
    width: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "",
    },
    tiwen: {
      type: Array,
    },
  },
  data() {
    return {
      // optionData: [],
      // xAxisData: [],
    };
  },
  methods: {
    initChart() {
      this.charts = echarts.init(this.$el);
      this.charts.setOption({
        tooltip:{
          trigger:'item',
        },
        label: {
          // 饼图图形上的文本标签
          normal: {
            // normal 是图形在默认状态下的样式
            show: true,
            position: "center",
            color: "#000",
            fontSize: 16,
            fontWeight: "bold",
            // formatter: ‘{c}’ // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
            //formatter: valueList[i]+‘’
          },
        },
        // legend: {
        //   top: 'bottom'
        // },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            // restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            type: "pie",
            radius: [30, 100],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 2, name: "上级领导" },
              { value: 4, name: "无关人员" },
              { value: 10, name: "重要客户" },
              { value: 38, name: "公司员工" },
            ],
          },
        ],
      });
    },
  },
  mounted() {
    let erd = elementResizeDetectorMaker();
    this.$el.style.width = this.width;
    this.$el.style.height = this.height;
    this.initChart();
    this.__resizeHanlder = debounce(() => {
      if (this.charts) {
        this.charts.resize();
      }
    }, 100);
    window.addEventListener("resize", this.__resizeHanlder);
    erd.listenTo(this.$el, this.__resizeHanlder); //只要框的大小变动 echarts表格宽度也跟着变动
  },
};
</script>
