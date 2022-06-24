<template>
    <div id="tables">
    <div class="tips">{{tip}}</div>
    <el-table
        :data="listData"
        style="width:100%"
        border
    >
    <el-table-column
        v-for="(item,index) in listLable"
        :key="index"
        :prop="item.prop"
        :label="item.label"
    >
    <template  slot-scope="scope" >
           <el-input v-if="editInputStyle" size="small" v-model="scope.row[item.prop]" placeholder="请输入内容" @change="handleEdit(scope.$index, scope.row)"></el-input> <span v-if="!editInputStyle">{{scope.row[item.prop]}}</span>
    </template>
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="100"
      v-if="operateStyle">
     <template slot-scope="scope" >
         <el-button v-show="downLoadStyle" @click="downLoad(scope.$index,scope.row)" type="text" size="small">下载</el-button>
         <el-button v-show="lookStyle" @click="look(scope.$index,scope.row)" type="text" size="small">查看</el-button>
         <el-button v-show="editStyle" @click="edit(scope.$index,scope.row)" type="text" size="small" >编辑</el-button>
         <el-button v-show="delStyle" @click="del(scope.$index,scope.row)" type="text" size="small" class="red">删除</el-button>
     </template>
     </el-table-column>
    </el-table>
    </div>
</template>
<script>
export default {
   props:{
       'listData':Array,
       'listLable':Array, 
       'tip':String,
       'operateStyle':{
           type:Boolean,
           default:()=>false,
       },
       'lookStyle':{
           type:Boolean,
           default:()=>false,
       },
       'editStyle':{
           type:Boolean,
           default:()=>false,
       },
       'delStyle':{
           type:Boolean,
           default:()=>false,
       },
       'downLoadStyle':{
           type:Boolean,
           default:()=>false,
       },
       'editInputStyle':{
           type:Boolean,
           default:()=>false,
       }
   },
   methods:{
       look(index,row){
           this.$emit('look',index,row);
       },
       edit(index,row){
           this.$emit('edit',index,row);
       },
       del(index,row){
           this.$emit('del',index,row);
       },
       downLoad(index,row){
           this.$emit('downLoad',index,row);
       },
       handleEdit(index,row){
           this.$emit('handleEdit',index,row);
       }
   }
}
</script>
<style lang="scss" scoped>
    .tips{
        font-size: 13px;
        color:#666666;
        margin-bottom: 10px;
    }
    .red{
        color:#F9513F;
    }
</style>