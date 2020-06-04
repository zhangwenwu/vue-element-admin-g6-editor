<template>
  <div class="knowledge">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"> 
          <h3 class="title">数据<span>·</span>知识<span>·</span>智能</h3>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
          <div>
            <el-input v-model="search" placeholder="请输入内容" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="enterSearch" />
            </el-input>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-button type="primary" size="mini">法律</el-button>
        <el-button type="primary" size="mini">法规</el-button>
        <el-button type="primary" size="mini">审计</el-button>
        <el-button type="primary" size="mini">工商</el-button>
        <el-button type="primary" size="mini">公司</el-button>
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
      search: ''
    }
  },
  created() {
    this.dialogPvVisible = false
  },
  methods: {
    // 搜索事件
    enterSearch() {
      this.$router.push({ path: '/documentation/details/1' })
    }
  }
}
</script>
<style lang="scss" scoped>
  .knowledge {
      padding-top: 50px;
      h3{
        text-align: center;
        span{
          font-size: 20px;
        }
      }
       .el-row {
         margin-bottom: 20px;
       }
      .el-button--primary{
        background-color: #0d5391;
        border-color: #0d5391;
      }
  }
</style>
