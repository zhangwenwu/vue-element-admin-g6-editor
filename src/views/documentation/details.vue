<template>
  <div class="knowledgeDetails">
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple-dark"> 
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>------</span>
            </div>
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" default-expand-all = "true">
              <span slot-scope="{ node}" class="custom-tree-node">
                <span>
                  <i class="fa fa-file-o fa-fw" />{{ node.label }}
                </span>
              </span>
            </el-tree>
          </el-card>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-dark" style="border-left:0;border-right:0;"> 
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>关键字</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-dark"> 
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>文章标题</span>
            </div>
            <div class="article">
              中赢智数（广东）科技有限公司成立于2015年，以为政府及国有企业进行数据治理及大数据分析、数据咨询服务为核心业务及发展目标，为审计机关、检察院、纪委、财政、政府办公厅、工商等政府部门及国资委企业客户提供数据治理及数据分析产品及服务整体解决方案.公司成立产品研发中心、数据分析服务中心、实施交付中心等技术部门。用精湛的技术服务于广大客户并不断累积丰富的经验，为审计机关、教育从审计产品开发、实施及数据服务提供全方位的解决方案。
              </br>中赢智数（广东）科技有限公司成立于2015年，以为政府及国有企业进行数据治理及大数据分析、数据咨询服务为核心业务及发展目标，为审计机关、检察院、纪委、财政、政府办公厅、工商等政府部门及国资委企业客户提供数据治理及数据分析产品及服务整体解决方案。
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-dialog :visible.sync="dialogPvVisible" title="title">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pv" label="Pv" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pvData: '',
      search: '',
      data: [{
        label: '法规库',
        children: [{
          label: '审计法规'
        }]
      }, {
        label: '案例库',
        children: [{
          label: '审计案例'
        }, {
          label: '审计案例3'
        }]
      }, {
        label: '刑法库',
        children: [{
          label: '审计案例'
        }, {
          label: '审计案例'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created() {
    this.dialogPvVisible = false
  },
  methods: {
    // 搜索事件
    enterSearch() {
      this.$router.push({ path: '/documentation/details/1' })
    },
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>
<style lang="scss" scoped>
  .knowledgeDetails {
      padding-top: 10px;
      .fa-fw{
        margin-right: 5px;
      }
      .grid-content{
        height: calc(100vh - 80px);
          .article{
            text-indent: 30px;
            line-height: 25px;
            font-size: 14px;
          }
          .el-card{
            height: 100%;
          }
          .el-tree {
            font-size: 14px;
          }
          .text {
            font-size: 14px;
          }

          .item {
            margin-bottom: 18px;
          }

          .clearfix:before,
          .clearfix:after {
            display: table;
            content: "";
          }
          .clearfix:after {
            clear: both
          }
      }
      .lists{
        li{
          list-style: none;
          margin-bottom: 10px;
        }
      }
      h3{
        text-align: center;
        span{
          font-size: 20px;
        }
      }
       .el-row {
         margin-bottom: 20px;
       }
  }
</style>
