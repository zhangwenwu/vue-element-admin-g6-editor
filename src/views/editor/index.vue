<template>
  <div id="vue-g6-editor">
    <!-- 工具栏 -->
    <el-row>
      <el-col :span="24">
        <div id="toolbar">
          <i data-command="save" class="command fa fa-floppy-o" title="保存" />
          <i class="fa fa-history" title="历史数据" @click="readHistoryData" />
          <i class="fa fa-hdd-o" title="上传数据" @click="readUploadData" />
          <i class="fa fa-download" title="另存为文件" @click="saveAsFile" />
          <i class="fa fa-picture-o" title="另存为图片" @click="openSaveAsImageDialog" />
          <i data-command="undo" class="command fa fa-undo" title="撤销" />
          <i data-command="redo" class="command fa fa-repeat" title="重做" />
          <i data-command="delete" class="command fa fa-trash-o" title="删除" />
          <i data-command="zoomOut" class="command fa fa-search-minus" title="缩小" />
          <i data-command="zoomIn" class="command fa fa-search-plus" title="放大" />
          <i data-command="clear" class="command fa fa-eraser" title="清除画布" />
          <i data-command="toFront" class="command fa fa-arrow-up" title="提升层级" />
          <i data-command="toBack" class="command fa fa-arrow-down" title="下降层级" />
          <i data-command="selectAll" class="command fa fa-check-square-o" title="全选" />
          <i data-command="copy" class="command fa fa-files-o" title="复制" />
          <i data-command="paste" class="command fa fa-clipboard" title="粘贴" />
          <i data-command="autoZoom" class="command fa fa-expand" title="实际大小" />
          <i data-command="resetZoom" class="command fa fa-compress" title="适应页面" />
          <i data-command="addGroup" class="command fa fa-object-group" title="组合" />
          <i data-command="unGroup" class="command fa fa-object-ungroup" title="取消组合" />
          <i data-command="multiSelect" class="command fa fa fa-crop" title="多选" />
        </div>
      </el-col>
    </el-row>
    <!-- 元素面板 + 画布 + 属性栏 -->
    <el-row>
      <!-- 元素面板 -->
      <el-col :span="4">
        <div id="itempannel" class="database itempannel">
          <!-- 开始节点 -->
          <ul>
            <h6><i class="el-icon-copy-document" />数据源</h6>
            <li class="getItem" data-shape="k-means" data-type="node" data-size="170*34" data-label="数据表">
              <span class="icon" />数据表
            </li>
            <li class="getItem" data-shape="k-means" data-type="node" data-size="170*34" data-label="数据表2">
              <span class="icon" />数据表2
            </li>
            <li class="getItem" data-shape="k-means" data-type="node" data-size="170*34" data-label="数据表3">
              <span class="icon" />数据表3
            </li>
            <li class="getItem" data-shape="k-means" data-type="node" data-size="170*34" data-label="数据表4">
              <span class="icon" />数据表4
            </li>
          </ul>
          <ul>
            <h6><i class="el-icon-cloudy" />过滤条件</h6>
            <li class="getItem" data-shape="k-means" data-type="node" data-size="100*34" data-label="条件1">
              <span class="icon" />条件1
            </li>
            <li class="getItem" data-shape="k-means" data-type="node" data-size="100*34" data-label="条件2">
              <span class="icon" />条件2
            </li>
            <li class="getItem" data-shape="k-means" data-type="node" data-size="100*34" data-label="条件3">
              <span class="icon" />条件3
            </li>
            <li class="getItem" data-shape="k-means" data-type="node" data-size="100*34" data-label="条件4">
              <span class="icon" />条件4
            </li>
          </ul>
        </div>
      </el-col>
      <!-- 画布 -->
      <el-col :span="16">
        <el-col :span="24">
          <div id="page" />
        </el-col>
        <!-- 表格 -->
        <div class="datatable">
          <el-table style="width: 100%" border :data="tableData" height="250">
            <template v-for="(item,index) in tableHead">
              <el-table-column v-if="item.column_name != 'id'" :key="index" :prop="item.column_name" :label="item.column_comment" />
            </template>
          </el-table>
          <el-col :span="24">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000"
            />
          </el-col>
        </div>
      </el-col>
      <!-- 属性栏 -->
      <el-col :span="4">
        <section class="right-part">
          <div id="detailpannel">
            <!-- 节点属性栏 -->
            <div id="nodeAttributeBar" class="pannel" data-status="node-selected">
              <div class="title">节点属性</div>
              <div class="main">
                <el-form :model="nodeAttributeForm" label-position="top" label-width="80px">
                  <el-form-item label="数据库">
                    <el-select v-model="value" clearable placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </el-form-item>
                  <el-form-item label="数据表">
                    <el-select v-model="value" clearable placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <!-- 边属性栏 -->
            <div id="edgeAttributeBar" class="pannel" data-status="edge-selected">
              <div class="title">边属性</div>
              <div class="main">
                <el-form :model="edgeAttributeForm" label-position="top" label-width="80px">
                  <el-form-item label="边文本">
                    <el-input
                      v-model="edgeAttributeForm.label"
                      @change="saveEdgeAttribute"
                    />
                  </el-form-item>
                  <el-form-item label="边文本">
                    <el-select v-model="edgeAttributeForm.shape" @change="saveEdgeAttribute">
                      <el-option label="流程图折线" value="flow-polyline" />
                      <el-option label="流程图圆⻆折线" value="flow-polyline-round" />
                      <el-option label="流程图曲线" value="flow-smooth" />
                    </el-select>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <div id="groupAttributeBar" class="pannel" data-status="group-selected">
              <div class="title">群组属性栏</div>
            </div>
            <div id="canvasAttributeBar" class="pannel" data-status="canvas-selected">
              <div class="title">画布属性栏</div>
              <div class="main">
                <el-form label-width="80px" label-position="right">
                  <el-form-item label="网格对齐">
                    <el-checkbox
                      v-model="canvasAttributeForm.grid"
                      @change="toggleGridShowStatus"
                    />
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <div id="multiAttributeBar" class="pannel" data-status="multi-selected">
              <div class="title">多选时属性栏</div>
            </div>
          </div>
          <!-- 缩略图 -->
          <div id="minimap">
            <div class="title">缩略图</div>
          </div>
        </section>
      </el-col>
    </el-row>
    <!-- 弹窗 -->
    <article>
      <!-- 下载图片 -->
      <section class="save-as-image-dialog">
        <el-dialog title="下载图片" :visible.sync="saveAsImageDialogVisible" width="360px">
          <el-form label-width="100px" label-position="top">
            <el-form-item label="选择图片格式">
              <el-select v-model="saveAsImageFormat">
                <el-option label="jpg" value="jpg">
                  <span style="float: left;">jpg</span>
                  <span style="float: right; color: #8492a6; font-size: 13px;">白色背景</span>
                </el-option>
                <el-option label="png" value="png">
                  <span style="float: left;">png</span>
                  <span style="float: right; color: #8492a6; font-size: 13px;">透明背景</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <span slot="footer">
            <el-button @click="saveAsImageDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="saveAsImage">确 定</el-button>
          </span>
        </el-dialog>
      </section>
    </article>
    <!-- 右键菜单 -->
    <section>
      <div id="contextmenu">
        <div data-status="node-selected" class="menu">
          <el-button data-command="copy" class="command">复制</el-button>
          <el-button data-command="paste" class="command">粘贴</el-button>
          <el-button data-command="delete" class="command">删除</el-button>
        </div>
        <div data-status="edge-selected" class="menu">
          <el-button data-command="delete" class="command">删除</el-button>
        </div>
        <div data-status="group-selected" class="menu">
          <el-button data-command="copy" class="command">复制</el-button>
          <el-button data-command="paste" class="command">粘贴</el-button>
          <el-button data-command="unGroup" class="command">取消组合</el-button>
          <el-button data-command="delete" class="command">删除</el-button>
        </div>
        <div data-status="canvas-selected" class="menu">
          <el-button data-command="undo" class="command">撤销</el-button>
          <el-button data-command="redo" class="command disable">重做</el-button>
        </div>
        <div data-status="multi-selected" class="menu">
          <el-button data-command="copy" class="command">复制</el-button>
          <el-button data-command="paste" class="command">粘贴</el-button>
          <el-button data-command="addGroup" class="command">组合</el-button>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import G6Editor from '@antv/g6-editor'
import mixin from './mixin'
import { construct } from 'netflix-conductor-json-tree/dist/index'
export default {
  name: 'VueG6Editor',
  mixins: [mixin],
  data() {
    return {
      total: 1000, // 默认数据总数
      // 表格数据
      tableHead: [
        {
          column_name: 'column_name', column_comment: '姓名'
        },
        {
          column_name: 'column_age', column_comment: '年龄'
        },
        {
          column_name: 'column_sex', column_comment: '性别'
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
        column_sex: '男'
      },
      {
        column_age: '18',
        column_name: '关晓彤',
        column_sex: '女'
      }],
      search: '',
      options: [{
        value: '选项1',
        label: '数据库1'
      }, {
        value: '选项2',
        label: '数据库2'
      }, {
        value: '选项3',
        label: '数据库3'
      }, {
        value: '选项4',
        label: '数据库4'
      }, {
        value: '选项5',
        label: '数据库5'
      }],
      value: '',
      // 节点属性表单
      nodeAttributeForm: {
        label: '',
        width: '',
        height: ''
      },
      // 节点属性表单
      edgeAttributeForm: {
        label: ''
      },
      // 画布属性栏表单
      canvasAttributeForm: {
        grid: false,
        cell: 20
      },
      // 编辑器
      editor: null,
      saveAsImageDialogVisible: false,
      saveAsImageFormat: 'jpg'
    }
  },
  mounted() {
    this.initG6Editor()
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    // 初始化
    initG6Editor() {
      const _this = this
      const editor = new G6Editor()
      this.editor = editor
      G6Editor.track(false)
      const Command = G6Editor.Command
      // 注册新命令save
      Command.registerCommand('save', {
        // 禁止保存命令进入队列
        queue: false,
        // 命令是否可用
        enable: (editor) => {
          return true
        },
        // 正向命令
        execute(editor) {
          const needSaveData = editor.getCurrentPage().save()
          console.log(needSaveData)
          localStorage.setItem('flowData', JSON.stringify(needSaveData))
          _this.save(needSaveData)
          _this.$message.success('数据已保存')
        },
        // 反向命令
        back(editor) {
          console.log('反向命令')
          console.log(editor)
        },
        // 快捷键：Ctrl + S
        shortcutCodes: [
          ['metaKey', 's'],
          ['ctrlKey', 's']
        ]
      })
      // 画布
      const flow = new G6Editor.Flow({
        graph: {
          container: 'page'
        },
        align: {
          line: {
            // 对齐线颜色
            stroke: '#FA8C16',
            // 对齐线粗细
            lineWidth: 1
          },
          // 开启全方位对齐
          item: false,
          // 网格对齐
          grid: true
        },
        grid: {
          // 网孔尺寸
          cell: 0
        },
        shortcut: {
          // 开启自定义命令保存的快捷键
          save: true
        }
      })
      window.flow = flow

      // 设置边
      flow.getGraph().edge({
        shape: 'flow-polyline'
      })

      // 元素面板栏
      const itempannel = new G6Editor.Itempannel({
        container: 'itempannel'
      })
      // 工具栏
      const toolbar = new G6Editor.Toolbar({
        container: 'toolbar'
      })
      // 属性栏
      const detailpannel = new G6Editor.Detailpannel({
        container: 'detailpannel'
      })
      // 缩略图
      let minimapWidth = getComputedStyle(document.querySelector('.right-part')).width
      minimapWidth = Number(minimapWidth.replace(/px$/, ''))
      const minimap = new G6Editor.Minimap({
        container: 'minimap',
        width: minimapWidth,
        height: 200
      })
      // 右键菜单
      const contextmenu = new G6Editor.Contextmenu({
        container: 'contextmenu'
      })
      // 挂载以上组件到Editor
      editor.add(flow)
      editor.add(itempannel)
      editor.add(toolbar)
      editor.add(detailpannel)
      editor.add(minimap)
      editor.add(contextmenu)
      // 挂载到window，方便调试
      window.editor = editor
      // 默认关闭网格
      editor.getCurrentPage().hideGrid()
      // 获取当前画布
      const currentPage = editor.getCurrentPage()
      currentPage.on('afterchange', (e) => {
        if (e.action === 'add') {
          if (e.model.nodetype === 'startNode' || e.model.nodetype === 'endNode') {
            const nodes = this.editor.getCurrentPage().getNodes()
            for (const item of nodes) {
              if (item.model.nodetype === e.model.nodetype && item.model.id !== e.model.id) {
                this.editor.getCurrentPage().remove(e.item)
                this.$message.warning('只能有一个开始节点或结束节点')
              }
            }
          }
        }
      })
      currentPage.on('node:click', function(evt) {
        // 获取当前节点数据信息
        console.log(evt)
      })
      currentPage.on('node:dblclick', function(evt) {
        // 获取当前节点数据信息
        console.log('双击事件')
      })
      currentPage.on('node:contextmenu', function(evt) {
        // 右键事件
        console.log(evt)
      })
      // 监听（选择对象后）事件
      currentPage.on('afteritemselected', (ev) => {
        console.log('打印所选对象属性', ev.item)
        console.log('打印所选对象数据模型', ev.item.model)
        const selectedItemDataModel = ev.item.model
        // 如果选择的对象是节点
        if (ev.item.isNode) {
          this.nodeAttributeForm.label = selectedItemDataModel.label
          this.nodeAttributeForm.width = selectedItemDataModel.size.split('*')[0]
          this.nodeAttributeForm.height = selectedItemDataModel.size.split('*')[1]
          this.nodeAttributeForm.color = selectedItemDataModel.color
        }
        // 如果选择的对象是边
        if (ev.item.isEdge) {
          ev.item.graph.edge({
            shape: 'flow-polyline-round'
          })
          this.edgeAttributeForm.label = selectedItemDataModel.label
          this.edgeAttributeForm.shape = selectedItemDataModel.shape
        }
      })
      // 监听（删除后）事件
      currentPage.on('afterdelete', (ev) => {})
    },
    // 打开保存为图片弹窗
    openSaveAsImageDialog() {
      this.saveAsImageDialogVisible = true
    },
    // 开启/关闭网格对齐
    toggleGridShowStatus(value) {
      if (value) {
        this.editor.getCurrentPage().showGrid()
      } else {
        this.editor.getCurrentPage().hideGrid()
      }
    },
    // 保存为图片
    saveAsImage() {
      let newCanvas
      if (this.saveAsImageFormat === 'jpg') {
        const canvas = this.editor.getCurrentPage().saveImage()
        newCanvas = document.createElement('canvas')
        newCanvas.width = canvas.width
        newCanvas.height = canvas.height
        const newContext = newCanvas.getContext('2d')
        newContext.fillStyle = '#fff'
        newContext.fillRect(0, 0, newCanvas.width, newCanvas.height)
        newContext.drawImage(canvas, 0, 0)
      }
      if (this.saveAsImageFormat === 'png') {
        newCanvas = this.editor.getCurrentPage().saveImage()
      }
      const imageDataURL = newCanvas.toDataURL()
      const downloadLink = document.createElement('a')
      downloadLink.download = '图片.jpg'
      downloadLink.href = imageDataURL
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
      this.saveAsImageDialogVisible = false
    },
    // 保存为文件
    saveAsFile() {
      const jsonString = JSON.stringify(this.editor.getCurrentPage().save())
      const blob = new Blob([jsonString])
      const blobURL = URL.createObjectURL(blob)
      const downloadLink = document.createElement('a')
      downloadLink.download = '数据.json'
      downloadLink.href = blobURL
      document.body.appendChild(downloadLink)
      downloadLink.click()
      URL.revokeObjectURL(blobURL)
      document.body.removeChild(downloadLink)
    },
    // 读取历史数据
    readHistoryData() {
      const stringData = localStorage.getItem('flowData')
      if (stringData === '' || stringData === '{}' || stringData === null) {
        this.$message.warning('无历史数据')
        return
      }
      const jsonData = JSON.parse(stringData)
      this.editor.getCurrentPage().read(jsonData)
    },
    // 读取上传数据
    readUploadData() {
      const uploadButton = document.createElement('input')
      uploadButton.setAttribute('type', 'file')
      uploadButton.setAttribute('accept', '.json')
      uploadButton.addEventListener('change', (e) => {
        console.dir(uploadButton)
        const file = uploadButton.files[0]
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
          console.log(event)
          const text = JSON.parse(event.target.result)
          console.log(text)
          this.editor.getCurrentPage().read(text)
        }
        fileReader.readAsText(file)
      })
      uploadButton.click()
    },
    //
    save(source) {
      const res = construct(source)
      console.log(JSON.stringify(res, null, 2))
    }
  }
}
</script>

<style lang="scss">

#vue-g6-editor {
  .database{
    overflow:hidden;
  }
  .el-menu{
    background-color: #fbfbfb
  }
  .el-submenu__title{
    height:35px;
    line-height:35px;
  }
  header:nth-of-type(1) {
    background: #fbfbfb;
    line-height: 40px;
    padding-left: 20px;
    border-bottom: 1px solid #dadce0;
    box-sizing: border-box;
  }
  #toolbar {
    background: #fbfbfb;
    border-bottom: 1px solid #dadce0;
    padding: 4px 14px;
    i {
      font-size: 15px;
      padding: 4px;
      margin-right: 8px;
      color: #333;
      &:hover {
        cursor: pointer;
        background-color: #eeeeee;
        color: #5cb6ff;
      }
    }
  }
  #itempannel {
    box-sizing: border-box;
    background-color: #F7F9FB;
    border-right: 1px solid  #dadce0;
    height: calc(100vh - 41px - 37px);
    padding-top: 10px;
    overflow: hidden;
    display: inherit;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    .getItem {
       color: rgba(0, 0, 0, 0.65);
        border-radius: 4px;
        height: 28px;
        line-height: 26px;
        padding-left: 8px;
        list-style-type: none;
        font-size: 12px;
        user-select:none;
    }
  }
  #page {
    height: calc(71vh - 41px - 37px);
    canvas {
      display: block;
      width: 100%;
    }
  }
  .right-part {
    height: calc(100vh - 41px - 37px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  #detailpannel {
    flex-grow: 1;
    background-color: #fbfbfb;
    border-left: 1px solid #dadce0;
    overflow-y: scroll;
    #nodeAttributeBar,
    #edgeAttributeBar,
    #groupAttributeBar,
    #canvasAttributeBar,
    #multiAttributeBar {
      .title {
        height: 34px;
        line-height: 34px;
        text-align: center;
        box-sizing: border-box;
        font-weight: bold;
        font-size: 13px;
        border-width: 0 0 1px 0;
        border-style: solid;
        border-color: #dadce0;
      }
      .main {
        padding: 10px;
      }
    }
  }
  #minimap {
    background-color: #fbfbfb;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    .title {
      height: 34px;
      line-height: 34px;
      text-align: center;
      box-sizing: border-box;
      font-weight: bold;
      font-size: 13px;
      border-width: 0 0 1px 0;
      border-style: solid;
      border-color: #dadce0;
    }
  }
  #contextmenu {
    display: none;
    .menu {
      .el-button {
        width: 100%;
        display: block;
        margin-left: 0;
        border-radius: 0 !important;
        border-bottom: none;
        &:nth-last-of-type(1) {
          border-bottom: 1px solid #dcdfe6;
        }
      }
    }
  }
  .save-as-image-dialog {
    .el-select {
      display: block;
    }
  }
  .el-pagination{
    text-align: center;
  }
  .el-table--medium td, .el-table--medium th{
    padding: 5px 0;
  }
  .el-table{
    height: calc(40vh - 41px - 37px) !important;
  }
}

.itempannel ul {
  padding: 0px;
  padding-left: 16px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}
.itempannel li {
  color: rgba(0, 0, 0, 0.65);
  border-radius: 4px;
  height: 28px;
  line-height: 26px;
  padding-left: 8px;
  border: 1px solid rgba(0, 0, 0, 0);
  list-style-type: none;
  font-size: 12px;
  user-select:none;
}
.itempannel li:hover {
  background: white;
  border: 1px solid #ced4d9;
  cursor: move;
  user-select:none;
  width:160px;
}
.itempanel li:hover{
  background: white;
  border: 1px solid #CED4D9;
  cursor: move;
}
.itempannel .icon{
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  font-size:14px;
  background: url(https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg);
}
.itempannel h6{
  font-size: 15px;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-bottom: 14px;
}
.itempannel i{
  margin-right: 10px;
  margin-left: -10px;
}
</style>
