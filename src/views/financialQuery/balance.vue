<template>
  <div class="balance">
    <el-row>
      <el-col :span="24">
        <el-form class="createPost-main-container">
          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple-dark">
                <el-form-item label-width="80px" label="账套名称:" class="postInfo-container-item">
                  <el-select v-model="selectdata.kjdzzbbh.value" placeholder="请选择" size="mini" @change="kjdzzbbhChange" filterable>
                    <el-option
                      v-for="item in selectdata.kjdzzbbh.options"
                      :key="item.index"
                      :label="item.kjdzzbmc"
                      :value="item.kjdzzbbh"
                    />
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-dark">
                <el-form-item label-width="80px" label="年度:" class="postInfo-container-item">
                  <el-select v-model="selectdata.kjnd.value" placeholder="请选择" size="mini" @change="kjndChange">
                    <el-option
                      v-for="item in selectdata.kjnd.options"
                      :key="item.index"
                      :label="item.kjnd + '年'"
                      :value="item.kjnd"
                    />
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-dark">
                <el-form-item label-width="80px" label="开始月份:" class="postInfo-container-item">
                  <el-select v-model="selectdata.kskjyf.value" placeholder="请选择" size="mini">
                    <el-option
                      v-for="item in selectdata.kskjyf.options"
                      :key="item.index"
                      :label="item+ '月'"
                      :value="item"
                    />
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-dark">
                <el-form-item label-width="80px" label="结束月份:" class="postInfo-container-item">
                  <el-select v-model="selectdata.jskjyf.value" placeholder="请选择" size="mini">
                    <el-option
                      v-for="item in selectdata.kskjyf.options"
                      :key="item.index"
                      :label="item + '月'"
                      :value="item"
                    />
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <div class="grid-content bg-purple-dark">
                <el-form-item label-width="80px" label="科目编码:" class="postInfo-container-item">
                  <el-select v-model="selectdata.kjkmbm.value" placeholder="请选择" size="mini">
                    <el-option
                      v-for="item in selectdata.kjkmbm.options"
                      :key="item.index"
                      :label="item.kjkmbm + item.kjkmmc"
                      :value="item.kjkmbm"
                    />
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-dark">
                <el-form-item label-width="80px" label="科目级次:" class="postInfo-container-item">
                  <el-select v-model="selectdata.kjkmjc.value" placeholder="请选择" size="mini">
                    <el-option
                      v-for="item in selectdata.kjkmjc.options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-dark">
                <el-form-item label-width="10px" label="" class="postInfo-container-item">
                  <el-button type="primary" :loading="false" size="mini" @click="query">查询</el-button>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark">
                <el-table style="width: 100%;height:100%" border :data="tableData" stripe size="mini" fit>
                  <template v-for="(item,index) in tableHead">
                    <el-table-column v-if="index === 0 " :key="index" :prop="item.column_name" :label="item.column_comment" fixed />
                    <el-table-column v-else :key="index" :prop="item.column_name" :label="item.column_comment" width="120" />
                  </template>
                </el-table>
              </div>
            </el-col>
            <el-col>
              <pagination
                :total="total"
                :page.sync="listQuery.page"
                :limit.sync="listQuery.limit"
                @pagination="getList"
              />
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getDzzb, getKmbm, getTables } from '@/api/article'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  data() {
    return {
      total: 1000,
      listQuery: {
        page: 1,
        limit: 50
      },
      selectdataAll: [],
      selectdatakjnd: [],
      selectdata: {
        kjdzzbbh: {
          value: '',
          options: [],
          optionsCopy:[]
        },
        kjnd: {
          value: '',
          options: []
        },
        kskjyf: {
          value: '',
          options: []
        },
        jskjyf: {
          value: '',
          options: []
        },
        kjkmjc: {
          value: '100',
          options: [{
            value: '100',
            label: '全部'
          }, {
            value: '1',
            label: '1级'
          }, {
            value: '2',
            label: '2级'
          }, {
            value: '3',
            label: '3级'
          }, {
            value: '4',
            label: '4级'
          }, {
            value: '5',
            label: '5级'
          }]
        },
        kjkmbm: {
          value: '',
          options: []
        }
      },
      // 表格表头
      tableHead: [
        {
          column_name: 'column_name', column_comment: '科目编号'
        },
        {
          column_name: 'column_age', column_comment: '科目名称'
        },
        {
          column_name: 'column_sex', column_comment: '开始期间'
        },
        {
          column_name: 'column_sex', column_comment: '结束期间'
        },
        {
          column_name: 'column_sex', column_comment: '期初借方金额'
        },
        {
          column_name: 'column_sex', column_comment: '期初贷方金额'
        },
        {
          column_name: 'column_sex', column_comment: '借方发生额'
        },
        {
          column_name: 'column_sex', column_comment: '贷方发生额'
        },
        {
          column_name: 'column_sex', column_comment: '期末借方金额'
        },
        {
          column_name: 'column_sex', column_comment: '期末贷方余额'
        },
        {
          column_name: 'column_sex', column_comment: '账套编号'
        },
        {
          column_name: 'column_sex', column_comment: '账套名称'
        }
      ],
      // 表格数据
      tableData: [{
        column_age: '3',
        column_name: '鞠婧祎',
        column_sex: '女'
      },
      {
        column_age: '25',
        column_name: '魏大勋',
        column_sex: '男魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋'
      },
      {
        column_age: '18',
        column_name: '关晓彤',
        column_sex: '女魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋'
      }]
    }
  },
  created() {
    getDzzb().then(response => {
      this.selectdataAll = response.data
      this.selectdata.kjdzzbbh.options = response.data
      this.selectdata.kjdzzbbh.optionsCopy = response.data
    })
  },
  methods: {
    getList(page, limit) {
      // 获取数据
      console.log(page)
      this.listQuery = page
      this.query()
    },
    dataFilter(val) {
      this.selectdata.kjdzzbbh.value = val;
      if (val) { //val存在
        this.selectdata.kjdzzbbh.options = this.selectdata.kjdzzbbh.optionsCopy.filter((item) => {
          if (!!~item.label.indexOf(val) || !!~item.label.toUpperCase().indexOf(val.toUpperCase())) {
            return true
          }
        })
      } else { //val为空时，还原数组
        this.selectdata.kjdzzbbh.options = this.selectdata.kjdzzbbh.optionsCopy;
      }
    },
    // 选择账套编号
    kjdzzbbhChange() {
      for (const index in this.selectdataAll) {
        if (this.selectdata.kjdzzbbh.value === this.selectdataAll[index].kjdzzbbh) {
          this.selectdata.kjnd.options = this.selectdataAll[index].kjqj
          this.selectdatakjnd = this.selectdataAll[index].kjqj
          this.selectdata.kjnd.value = this.selectdatakjnd[0].kjnd
        }
      }
      this.kjndChange()
      console.log(this.selectdata.kjdzzbbh.value)
    },
    // 选择年度
    kjndChange() {
      this.selectdata.kskjyf.options = this.selectdatakjnd.find(item => item.kjnd === this.selectdata.kjnd.value).kjyf
      this.selectdata.kskjyf.value = this.selectdata.kskjyf.options[0]
      this.selectdata.jskjyf.value = this.selectdata.kskjyf.options[this.selectdata.kskjyf.options.length - 1]
      this.getKmbm()
    },
    // 查询
    query() {
      if (this.selectdata.kjdzzbbh.value === '') {
        this.$message({
          showClose: true,
          message: '请选择账套编号',
          type: 'error'
        })
        return
      }
      //加载中
      const load = this.$loading({
      lock: true,
      text: 'Loading...',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
      });

      const queryData = {
        kjdzzbbh: this.selectdata.kjdzzbbh.value,
        kjnd: this.selectdata.kjnd.value,
        kskjyf: this.selectdata.kskjyf.value,
        jskjyf: this.selectdata.jskjyf.value,
        kjkmjc: this.selectdata.kjkmjc.value,
        kjkmbm: this.selectdata.kjkmbm.value,
        listQuery: this.listQuery
      }
      getTables(queryData).then(response => {
        const { data } = response
        console.log(data)
        this.total = data.total
        this.listQuery = data.listQuery
        this.tableHead = data.tableHead
        this.tableData = data.tableData
        load.close()
      }).error(function() {
         load.close()
      });
      console.log(queryData)
    },
    // 获取科目编码
    getKmbm() {
      const kmbmData = {
        kjdzzbbh: this.selectdata.kjdzzbbh.value,
        kjnd: this.selectdata.kjnd.value
      }
      getKmbm(kmbmData).then(response => {
        this.selectdata.kjkmbm.options = response.data
        this.selectdata.kjkmbm.value = this.selectdata.kjkmbm.options[0].kjkmbm
      })
    }
  }
}
</script>
<style lang="scss">
.createPost-main-container{
    padding: 40px 45px 20px 50px;
}
.balance{
  .el-table{
  .cell{
      white-space: nowrap !important;
    }
  }
}

</style>
