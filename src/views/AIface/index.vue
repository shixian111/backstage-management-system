<template>
  <div id="AIface">
    <div class="content-wrap">
      <headerBread
        title="员工刷脸信息"
        :bread="[{ path: '/AIface', title: '员工刷脸信息' }]"
      ></headerBread>
      <div class="page-header">
        <div class="left-choose">
          <el-form :inline="true" class="demo-form-inline">
            <!-- <el-form-item label="单位">
                      <el-input v-model="unitSelect" placeholder="请输入单位名称"></el-input>
                    </el-form-item> -->
            <el-form-item label="姓名">
              <el-input
                v-model="nameSelect"
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
        <!-- <div class="right-export">
                    <el-button type="default" size="medium" style="border-color:#3A8FF5;color:#3A8FF5">导出excel</el-button>
                </div> -->
      </div>
      <div class="page-middle">
        <div class="mainContainer">
          <!-- <el-row> -->
          <!-- <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="23"> -->
          <el-table
            :data="
              tableData.filter(
                (data) =>
                  !nameSelect ||
                  data.name.toLowerCase().includes(nameSelect.toLowerCase())
              )
            "
            border
          >
            <el-table-column prop="ID" label="ID"> </el-table-column
            ><el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="department" label="部门"> </el-table-column>
            <el-table-column prop="job" label="职务"> </el-table-column>
            <el-table-column prop="deviceID" label="设备ID"> </el-table-column>
            <el-table-column prop="deviceLocal" label="设备位置">
            </el-table-column>
            <el-table-column prop="enterTime" label="进入时间">
            </el-table-column>
            <el-table-column prop="picture" label="抓拍照片">
              <template slot-scope="scope">
                <img
                  :src="scope.row.img"
                  width="40"
                  height="40"
                  class="head_pic"
                />
              </template>
            </el-table-column>
            
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
import headerBread from "@/components/comComponents/headerBread";
import pageNav from "@/components/pagenav/pagenav";
export default {
  data() {
    return {
      tableData: [
        {
          ID: 1,
          deviceID: "0001",
          deviceLocal: "办公室大门",
          name: "王小虎",
          degree: "36.1℃",
          date: "2022-05-21 9:00",
          department: "测试部",
          job: "SIT测试",
          enterTime: "2022-05-21 9:00",
          img: "/static/image/avatar/0.jpg",
        },
      ],
      nameSelect: "",
      curPage: 1,
    };
  },
  created() {},
  methods: {
    lookName() {
      console.log("ces");
      this.tableData.filter(
        (data) =>
          !this.nameSelect ||
          data.name.toLowerCase().includes(this.nameSelect.toLowerCase())
      );
    },
    getCurPage(curPage) {
      this.curPage = curPage;
      console.log(this.curPage);
    },
  },
  components: {
    headerBread,
    pageNav,
  },
};
</script>

<style lang="scss" scoped>
#AIface {
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