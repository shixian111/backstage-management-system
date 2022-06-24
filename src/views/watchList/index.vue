<template>
    <div id="watchListIndex">
        <div class="content-wrap">
            <headerBread title="告警记录"  :bread="[{'path':'/watchList','title':'告警记录'}]"></headerBread>
            <div class="page-header">
                
             <div class="left-choose">
          <el-form :inline="true" class="demo-form-inline">
            <!-- <el-form-item label="单位">
                      <el-input v-model="unitSelect" placeholder="请输入单位名称"></el-input>
                    </el-form-item> -->
            <el-form-item label="姓名">
              <el-input
                v-model="deviceSelect"
                placeholder="请输入姓名搜索"
                size="medium"
              ></el-input>
            </el-form-item>
            <!-- <el-form-item>
              <el-button type="primary" size="medium" @click="lookName"
                >查询</el-button
              >
            </el-form-item> -->
          </el-form>
        </div>
            </div>
        <!-- <div class="right-export">
                    <el-button type="default" size="medium" style="border-color:#3A8FF5;color:#3A8FF5">导出excel</el-button>
                </div> -->
      
      <div class="page-middle">
        <div class="mainContainer">
          <!-- <el-row> -->
          <!-- <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23"> -->
          <el-table
            :data="
              tableData.filter(
                (data) =>
                  !deviceSelect ||
                  data.name.toLowerCase().includes(deviceSelect.toLowerCase())
              )
            "
            border
          >
            <el-table-column prop="deviceID" label="设备ID"> </el-table-column>
            <el-table-column prop="deviceLocal" label="设备位置"></el-table-column>
            <el-table-column prop="warnContent" label="告警内容"> </el-table-column>
            <el-table-column prop="charge" label="负责人"> </el-table-column>
            <!-- <el-table-column prop="department" label="部门"> </el-table-column> -->
            <el-table-column prop="job" label="职务"> </el-table-column>
            <el-table-column prop="phone" label="联系方式"></el-table-column>
            <el-table-column prop="warnDate" label="告警时间"> </el-table-column>
            <el-table-column prop="dealDate" label="处理时间"> </el-table-column>
           
           
            
          </el-table>
          <!-- </el-col> -->
          <!-- </el-row> -->
        </div>
      </div>
      <div class="page-foot">
        <pageNav
          :total="20"
          :pageSize="2"
          :currentPage="curPage"
          :continuePage="5"
          @getCurPage="getCurPage"
        ></pageNav>
      </div>
            
       </div>
    </div>
</template>
<script>
import headerBread from '@/components/comComponents/headerBread'
import pageNav from "@/components/pagenav/pagenav";
export default {
    data(){
        return {
            tableData: [
          {
         
          deviceID: "0001",
          deviceLocal: "办公室大门",
          charge: "王小虎",
          warnContent: "人员闯入",
          warnDate: "2022-05-21 9:00",
          dealDate: "2022-05-21 10:00",
          // department: "测试部",
          job:"安保人员",
          phone:"13123456789"
        },
      ],
      curPage: 1,
      deviceSelect:'',
        }
    },
    created(){

    },
    methods:{
      getCurPage(curPage) {
      this.curPage = curPage;
      console.log(this.curPage);
    },
        
    },
    components:{
        headerBread,
        pageNav
    }
}
</script>
<style lang="scss" scoped>
     #watchListIndex{
         .page-header {
    margin-left: 65px;
    margin-top: 10px;
    height: 50px;
  }
  .page-middle {
    .mainContainer {
      margin: 0 auto;
      .el-table {
        width: 96%;
        margin: 0 auto;
      }
    }
  }
    }
</style>