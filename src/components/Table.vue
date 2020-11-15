<template>
  <div>
    <el-table
      :data="tableData"
      size="medium"
      highlight-current-row
      height="450"
      style="width: 100%"
      ref="multipleTable"
      :default-sort = "{prop: 'date', order: 'descending'}"  
      show-summary
      @select="select"
      @select-all="selectAll"
      @cell-mouse-enter="cellEnter"
      @row-click="rowClick"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="date" label="日期" sortable></el-table-column>
      <el-table-column prop="name" label="名字"></el-table-column>
      <el-table-column prop="province" label="省份"></el-table-column>
      <el-table-column prop="city" label="城市"></el-table-column>
      <el-table-column prop="address" label="居住地"></el-table-column>
      <el-table-column prop="zip" label="邮政编码"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" @click="handleClick(scope.row)"
            >查看</el-button
          >
        </template>
      </el-table-column>
       <el-table-column label="移除" width="100">
        <template slot-scope="scope">            <!--tableData是定义在data里面的，提供给table渲染的源数据-->
          <el-button type="text" @click.native.prevent="remove(scope.$index,tableData)"    
            >移除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px">
      <el-button @click="setCurrent">取消选择</el-button>
      <el-button @click="cancelMulti">取消多选</el-button>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
      currentRow: null,
      multipleSelection: []
    };
  },
  methods: {
    // tableRowClassName({ el, rowIndex }) {
    //   if (rowIndex % 2 === 0) {
    //     return "warning-row";
    //   } else {
    //     return "success-row";
    //   }
    // },
    // handleClick(el) {
    //   //console.log(el);
    // },
    // handleCurrentChange(el) {
    //   this.currentRow = el;
    // },
    setCurrent(row){
        this.$refs.singleTable.setCurrentRow(row);
    },
    // remove(index, rows){
    //   rows.splice(index,1)
    // },
    // handleSelectionChange(evt){
    //   this.multipleSelection=evt
    //   //console.log(this.multipleSelection)
    // },
    cancelMulti(){
      this.$refs.multipleTable.clearSelection();
    },
    // cellClassName({row, column, rowIndex, columnIndex}){
    //   console.log(row, column, rowIndex, columnIndex)
      
    // },
    // showRow({rowIndex}){
    //   let styleJson = {}
    //   if (rowIndex===2) {
    //         styleJson = {
    //             'color': 'red'
    //         }
    //    } else {
    //         styleJson = {
                
    //         }
    //    }
    //    return styleJson  // 返回对象
    // },
    select(selection){
      //console.log(selection)
    },
    selectAll(selection){
      //console.log(selection)
    },
    cellEnter(row, column, cell, event){
      //console.log(row, column, cell, event)
    },
    rowClick(row, column, event){
      console.log(this)
    }
  },
};
</script>

<style lang="scss">
 .el-table .success-row {
    background: #f0f9;
  }
</style>

