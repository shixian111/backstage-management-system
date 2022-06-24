<template>
  <div class="pagination">
    <button :disabled="currentPage==1" @click="sendCurPage(currentPage-1)">上一页</button>
    <button v-if="startAndend.start>1" @click="sendCurPage(1)" :class="{active:currentPage==1}">1</button>
    <button v-if="startAndend.start>2">...</button>

    <!-- 中间连续页码的地方:v-for、数组、对象、数字、字符串 -->
    <button v-for="(page,index) in startAndend.end" :key="index" v-if="page>=startAndend.start" @click="sendCurPage(page)" :class="{active:currentPage==page}">{{page}}</button>

    <button v-if="startAndend.end<totalPage-1">...</button>
    <button v-if="startAndend.end<totalPage" @click="sendCurPage(totalPage)" :class="{active:currentPage==totalPage}">{{totalPage}}</button>

    <button :disabled="currentPage==totalPage" @click="sendCurPage(currentPage+1)">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:['total','pageSize','currentPage','continuePage'],//total表示总数 pageSize:表示每页多少个 currentPage:表示当前是多少 continuePage 是连续的页码
  methods:{
    sendCurPage(curPage){
       this.$emit("getCurPage",curPage)
    }
  },
  computed: {
      totalPage(){
        return Math.ceil(this.total/this.pageSize);
      },
      startAndend(){
        let start=0,end=0;
        const {total,currentPage,continuePage,totalPage}=this;
        if(total<currentPage){
           start=1;
           end=total;
        }else{
           start=currentPage-(continuePage-1)/2;
           end=currentPage+(continuePage-1)/2;
        }
        if(start<1){
             start=1;
             end=continuePage
        }
        if(end>totalPage){
           start=totalPage-continuePage+1;
           end=totalPage
        }
        return {start,end};
      }
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>