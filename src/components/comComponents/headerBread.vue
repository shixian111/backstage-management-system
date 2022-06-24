<template>
    <div id="headerBread">
        <div class="page-bread">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item v-for="(item,index) in bread" :key="index" :to="item.path">{{item.title}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <!-- <div class="page-mianHeader">
                  <i class="el-icon-arrow-left cp" :style="myStyle" @click="goback"></i><span>{{title}}</span>
            </div> -->
    </div>
</template>
<script>
export default {
     props:{
                'title':String,
                'bread':Array,
                // 'myStyle':String,
            },
    methods:{
        // goback(){
        //     this.$emit('goback');
        // }
    }
}
</script>
<style lang="scss" scoped>
    // .page-mianHeader{
    //     padding:0 0 10px 20px;
    //     border-bottom:1px solid #D2D2D2;
    //     span{
    //         margin-left:20px;
    //         color:#333333;
    //         font-size:18px;
    //         padding-bottom:8px;
    //         border-bottom:3px solid #3A8FF5;
    //     }
    // }
    .page-bread{
        position: absolute;
        // position: fixed;
        // display: inline-block;
        top:52px;
        padding-left:15px;
        cursor: pointer;
       
    }
    // .cp{
    //     cursor: pointer;
    // }
</style>
<style lang="scss">
    
</style>
