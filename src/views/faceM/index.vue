<template>
  <div id="faceM">
    <div class="content-wrap">
      <headerBread
        title="人脸信息管理"
        :bread="[{ path: '/faceM', title: '人脸信息管理' }]"
      ></headerBread>
      <div class="page-header">
        <div class="left-choose">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="姓名">
              <el-input
                v-model="nameSelect"
                placeholder="请输入姓名搜索"
                size="medium"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="right-btn">
                    <el-button type="primary" size="medium">+ 添加人脸信息</el-button>
                </div>
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
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="department" label="部门"> </el-table-column>
            <el-table-column prop="job" label="职务"> </el-table-column>

            <el-table-column prop="picture" label="人脸照片" width="180">
              <template slot-scope="scope">
                <img
                  v-for="(item, index) in scope.row.imgs"
                  :key="index"
                  :src="item"
                  width="40"
                  height="40"
                  class="head_pic"
                />
              </template>
            </el-table-column>
            <el-table-column prop="enterTime" label="照片上传时间">
            </el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  >查看</el-button
                >
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
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
          name: "王小虎",

          date: "2022-05-21 9:00",
          department: "测试部",
          job: "Linux开发工程师",
          enterTime: "2022-05-21 9:00",
          imgs: [
            "/static/image/avatar/0.jpg",
            "/static/image/avatar/1.jpg",
            "/static/image/avatar/2.jpg",
          ],
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
#faceM {
  .page-header {
    position: relative;
    margin-left: 65px;
    margin-top: 10px;
    height: 50px;
    .right-btn{
        position: absolute;
        // float: right;
        top:5px;
        right:6%;
    }
  }
  .page-middle {
    .mainContainer {
      margin: 0 auto;
      .el-table {
        width: 96%;
        margin: 0 auto;
      }
      .head_pic {
        margin-left: 10px;
      }
    }
  }
}
</style>
