(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-768ebd2f"],{"1b2a":function(t,a,e){"use strict";var s=e("2471"),l=e.n(s);l.a},2471:function(t,a,e){},"3daf":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"vue-g6-editor"}},[e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{attrs:{id:"toolbar"}},[e("i",{staticClass:"command fa fa-floppy-o",attrs:{"data-command":"save",title:"保存"}}),t._v(" "),e("i",{staticClass:"fa fa-history",attrs:{title:"历史数据"},on:{click:t.readHistoryData}}),t._v(" "),e("i",{staticClass:"fa fa-hdd-o",attrs:{title:"上传数据"},on:{click:t.readUploadData}}),t._v(" "),e("i",{staticClass:"fa fa-download",attrs:{title:"另存为文件"},on:{click:t.saveAsFile}}),t._v(" "),e("i",{staticClass:"fa fa-picture-o",attrs:{title:"另存为图片"},on:{click:t.openSaveAsImageDialog}}),t._v(" "),e("i",{staticClass:"command fa fa-undo",attrs:{"data-command":"undo",title:"撤销"}}),t._v(" "),e("i",{staticClass:"command fa fa-repeat",attrs:{"data-command":"redo",title:"重做"}}),t._v(" "),e("i",{staticClass:"command fa fa-trash-o",attrs:{"data-command":"delete",title:"删除"}}),t._v(" "),e("i",{staticClass:"command fa fa-search-minus",attrs:{"data-command":"zoomOut",title:"缩小"}}),t._v(" "),e("i",{staticClass:"command fa fa-search-plus",attrs:{"data-command":"zoomIn",title:"放大"}}),t._v(" "),e("i",{staticClass:"command fa fa-eraser",attrs:{"data-command":"clear",title:"清除画布"}}),t._v(" "),e("i",{staticClass:"command fa fa-arrow-up",attrs:{"data-command":"toFront",title:"提升层级"}}),t._v(" "),e("i",{staticClass:"command fa fa-arrow-down",attrs:{"data-command":"toBack",title:"下降层级"}}),t._v(" "),e("i",{staticClass:"command fa fa-check-square-o",attrs:{"data-command":"selectAll",title:"全选"}}),t._v(" "),e("i",{staticClass:"command fa fa-files-o",attrs:{"data-command":"copy",title:"复制"}}),t._v(" "),e("i",{staticClass:"command fa fa-clipboard",attrs:{"data-command":"paste",title:"粘贴"}}),t._v(" "),e("i",{staticClass:"command fa fa-expand",attrs:{"data-command":"autoZoom",title:"实际大小"}}),t._v(" "),e("i",{staticClass:"command fa fa-compress",attrs:{"data-command":"resetZoom",title:"适应页面"}}),t._v(" "),e("i",{staticClass:"command fa fa-object-group",attrs:{"data-command":"addGroup",title:"组合"}}),t._v(" "),e("i",{staticClass:"command fa fa-object-ungroup",attrs:{"data-command":"unGroup",title:"取消组合"}}),t._v(" "),e("i",{staticClass:"command fa fa fa-crop",attrs:{"data-command":"multiSelect",title:"多选"}})])])],1),t._v(" "),e("el-row",[e("el-col",{attrs:{span:4}},[e("div",{staticClass:"database itempannel",attrs:{id:"itempannel"}},[e("ul",[e("h6",[e("i",{staticClass:"el-icon-copy-document"}),t._v("数据源")]),t._v(" "),e("li",{staticClass:"getItem",attrs:{"data-shape":"k-means","data-type":"node","data-size":"170*34","data-label":"数据表"}},[e("span",{staticClass:"icon"}),t._v("数据表\n          ")]),t._v(" "),e("li",{staticClass:"getItem",attrs:{"data-shape":"k-means","data-type":"node","data-size":"170*34","data-label":"数据表2"}},[e("span",{staticClass:"icon"}),t._v("数据表2\n          ")]),t._v(" "),e("li",{staticClass:"getItem",attrs:{"data-shape":"k-means","data-type":"node","data-size":"170*34","data-label":"数据表3"}},[e("span",{staticClass:"icon"}),t._v("数据表3\n          ")]),t._v(" "),e("li",{staticClass:"getItem",attrs:{"data-shape":"k-means","data-type":"node","data-size":"170*34","data-label":"数据表4"}},[e("span",{staticClass:"icon"}),t._v("数据表4\n          ")])]),t._v(" "),e("ul",[e("h6",[e("i",{staticClass:"el-icon-cloudy"}),t._v("过滤条件")]),t._v(" "),e("li",{staticClass:"getItem",attrs:{"data-shape":"k-means","data-type":"node","data-size":"100*34","data-label":"条件1"}},[e("span",{staticClass:"icon"}),t._v("条件1\n          ")]),t._v(" "),e("li",{staticClass:"getItem",attrs:{"data-shape":"k-means","data-type":"node","data-size":"100*34","data-label":"条件2"}},[e("span",{staticClass:"icon"}),t._v("条件2\n          ")]),t._v(" "),e("li",{staticClass:"getItem",attrs:{"data-shape":"k-means","data-type":"node","data-size":"100*34","data-label":"条件3"}},[e("span",{staticClass:"icon"}),t._v("条件3\n          ")]),t._v(" "),e("li",{staticClass:"getItem",attrs:{"data-shape":"k-means","data-type":"node","data-size":"100*34","data-label":"条件4"}},[e("span",{staticClass:"icon"}),t._v("条件4\n          ")])])])]),t._v(" "),e("el-col",{attrs:{span:16}},[e("el-col",{attrs:{span:24}},[e("div",{attrs:{id:"page"}})]),t._v(" "),e("div",{staticClass:"datatable"},[e("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData,height:"250"}},[t._l(t.tableHead,(function(a,s){return["id"!=a.column_name?e("el-table-column",{key:s,attrs:{prop:a.column_name,label:a.column_comment}}):t._e()]}))],2),t._v(" "),e("el-col",{attrs:{span:24}},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:4}},[e("section",{staticClass:"right-part"},[e("div",{attrs:{id:"detailpannel"}},[e("div",{staticClass:"pannel",attrs:{id:"nodeAttributeBar","data-status":"node-selected"}},[e("div",{staticClass:"title"},[t._v("节点属性")]),t._v(" "),e("div",{staticClass:"main"},[e("el-form",{attrs:{model:t.nodeAttributeForm,"label-position":"top","label-width":"80px"}},[e("el-form-item",{attrs:{label:"数据库"}},[e("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.options,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),e("el-form-item",{attrs:{label:"数据表"}},[e("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.options,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1)]),t._v(" "),e("div",{staticClass:"pannel",attrs:{id:"edgeAttributeBar","data-status":"edge-selected"}},[e("div",{staticClass:"title"},[t._v("边属性")]),t._v(" "),e("div",{staticClass:"main"},[e("el-form",{attrs:{model:t.edgeAttributeForm,"label-position":"top","label-width":"80px"}},[e("el-form-item",{attrs:{label:"边文本"}},[e("el-input",{on:{change:t.saveEdgeAttribute},model:{value:t.edgeAttributeForm.label,callback:function(a){t.$set(t.edgeAttributeForm,"label",a)},expression:"edgeAttributeForm.label"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"边文本"}},[e("el-select",{on:{change:t.saveEdgeAttribute},model:{value:t.edgeAttributeForm.shape,callback:function(a){t.$set(t.edgeAttributeForm,"shape",a)},expression:"edgeAttributeForm.shape"}},[e("el-option",{attrs:{label:"流程图折线",value:"flow-polyline"}}),t._v(" "),e("el-option",{attrs:{label:"流程图圆⻆折线",value:"flow-polyline-round"}}),t._v(" "),e("el-option",{attrs:{label:"流程图曲线",value:"flow-smooth"}})],1)],1)],1)],1)]),t._v(" "),e("div",{staticClass:"pannel",attrs:{id:"groupAttributeBar","data-status":"group-selected"}},[e("div",{staticClass:"title"},[t._v("群组属性栏")])]),t._v(" "),e("div",{staticClass:"pannel",attrs:{id:"canvasAttributeBar","data-status":"canvas-selected"}},[e("div",{staticClass:"title"},[t._v("画布属性栏")]),t._v(" "),e("div",{staticClass:"main"},[e("el-form",{attrs:{"label-width":"80px","label-position":"right"}},[e("el-form-item",{attrs:{label:"网格对齐"}},[e("el-checkbox",{on:{change:t.toggleGridShowStatus},model:{value:t.canvasAttributeForm.grid,callback:function(a){t.$set(t.canvasAttributeForm,"grid",a)},expression:"canvasAttributeForm.grid"}})],1)],1)],1)]),t._v(" "),e("div",{staticClass:"pannel",attrs:{id:"multiAttributeBar","data-status":"multi-selected"}},[e("div",{staticClass:"title"},[t._v("多选时属性栏")])])]),t._v(" "),e("div",{attrs:{id:"minimap"}},[e("div",{staticClass:"title"},[t._v("缩略图")])])])])],1),t._v(" "),e("article",[e("section",{staticClass:"save-as-image-dialog"},[e("el-dialog",{attrs:{title:"下载图片",visible:t.saveAsImageDialogVisible,width:"360px"},on:{"update:visible":function(a){t.saveAsImageDialogVisible=a}}},[e("el-form",{attrs:{"label-width":"100px","label-position":"top"}},[e("el-form-item",{attrs:{label:"选择图片格式"}},[e("el-select",{model:{value:t.saveAsImageFormat,callback:function(a){t.saveAsImageFormat=a},expression:"saveAsImageFormat"}},[e("el-option",{attrs:{label:"jpg",value:"jpg"}},[e("span",{staticStyle:{float:"left"}},[t._v("jpg")]),t._v(" "),e("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v("白色背景")])]),t._v(" "),e("el-option",{attrs:{label:"png",value:"png"}},[e("span",{staticStyle:{float:"left"}},[t._v("png")]),t._v(" "),e("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v("透明背景")])])],1)],1)],1),t._v(" "),e("span",{attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.saveAsImageDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.saveAsImage}},[t._v("确 定")])],1)],1)],1)]),t._v(" "),e("section",[e("div",{attrs:{id:"contextmenu"}},[e("div",{staticClass:"menu",attrs:{"data-status":"node-selected"}},[e("el-button",{staticClass:"command",attrs:{"data-command":"copy"}},[t._v("复制")]),t._v(" "),e("el-button",{staticClass:"command",attrs:{"data-command":"paste"}},[t._v("粘贴")]),t._v(" "),e("el-button",{staticClass:"command",attrs:{"data-command":"delete"}},[t._v("删除")])],1),t._v(" "),e("div",{staticClass:"menu",attrs:{"data-status":"edge-selected"}},[e("el-button",{staticClass:"command",attrs:{"data-command":"delete"}},[t._v("删除")])],1),t._v(" "),e("div",{staticClass:"menu",attrs:{"data-status":"group-selected"}},[e("el-button",{staticClass:"command",attrs:{"data-command":"copy"}},[t._v("复制")]),t._v(" "),e("el-button",{staticClass:"command",attrs:{"data-command":"paste"}},[t._v("粘贴")]),t._v(" "),e("el-button",{staticClass:"command",attrs:{"data-command":"unGroup"}},[t._v("取消组合")]),t._v(" "),e("el-button",{staticClass:"command",attrs:{"data-command":"delete"}},[t._v("删除")])],1),t._v(" "),e("div",{staticClass:"menu",attrs:{"data-status":"canvas-selected"}},[e("el-button",{staticClass:"command",attrs:{"data-command":"undo"}},[t._v("撤销")]),t._v(" "),e("el-button",{staticClass:"command disable",attrs:{"data-command":"redo"}},[t._v("重做")])],1),t._v(" "),e("div",{staticClass:"menu",attrs:{"data-status":"multi-selected"}},[e("el-button",{staticClass:"command",attrs:{"data-command":"copy"}},[t._v("复制")]),t._v(" "),e("el-button",{staticClass:"command",attrs:{"data-command":"paste"}},[t._v("粘贴")]),t._v(" "),e("el-button",{staticClass:"command",attrs:{"data-command":"addGroup"}},[t._v("组合")])],1)])])],1)},l=[],o=(e("28a5"),e("b85c")),i=(e("a481"),e("c5f6"),e("1688")),n=e.n(i),d={methods:{saveNodeAttribute:function(){var t=this;this.editor.executeCommand((function(){var a=t.editor.getCurrentPage(),e=a.getSelected()[0];a.update(e.id,{label:t.nodeAttributeForm.label,size:t.nodeAttributeForm.width+"*"+t.nodeAttributeForm.height,color:t.nodeAttributeForm.color})}))},saveEdgeAttribute:function(){var t=this;this.editor.executeCommand((function(){var a=t.editor.getCurrentPage(),e=a.getSelected()[0];console.log(t.edgeAttributeForm),a.update(e.id,{label:t.edgeAttributeForm.label,shape:t.edgeAttributeForm.shape})}))}}},r=e("db97"),c={name:"VueG6Editor",mixins:[d],data:function(){return{total:1e3,tableHead:[{column_name:"column_name",column_comment:"姓名"},{column_name:"column_age",column_comment:"年龄"},{column_name:"column_sex",column_comment:"性别"}],tableData:[{column_age:"3",column_name:"鞠婧祎",column_sex:"女"},{column_age:"25",column_name:"魏大勋",column_sex:"男"},{column_age:"18",column_name:"关晓彤",column_sex:"女"}],search:"",options:[{value:"选项1",label:"数据库1"},{value:"选项2",label:"数据库2"},{value:"选项3",label:"数据库3"},{value:"选项4",label:"数据库4"},{value:"选项5",label:"数据库5"}],value:"",nodeAttributeForm:{label:"",width:"",height:""},edgeAttributeForm:{label:""},canvasAttributeForm:{grid:!1,cell:20},editor:null,saveAsImageDialogVisible:!1,saveAsImageFormat:"jpg"}},mounted:function(){this.initG6Editor()},methods:{handleOpen:function(t,a){console.log(t,a)},handleClose:function(t,a){console.log(t,a)},initG6Editor:function(){var t=this,a=this,e=new n.a;this.editor=e,n.a.track(!1);var s=n.a.Command;s.registerCommand("save",{queue:!1,enable:function(t){return!0},execute:function(t){var e=t.getCurrentPage().save();console.log(e),localStorage.setItem("flowData",JSON.stringify(e)),a.save(e),a.$message.success("数据已保存")},back:function(t){console.log("反向命令"),console.log(t)},shortcutCodes:[["metaKey","s"],["ctrlKey","s"]]});var l=new n.a.Flow({graph:{container:"page"},align:{line:{stroke:"#FA8C16",lineWidth:1},item:!1,grid:!0},grid:{cell:0},shortcut:{save:!0}});window.flow=l,l.getGraph().edge({shape:"flow-polyline"});var i=new n.a.Itempannel({container:"itempannel"}),d=new n.a.Toolbar({container:"toolbar"}),r=new n.a.Detailpannel({container:"detailpannel"}),c=getComputedStyle(document.querySelector(".right-part")).width;c=Number(c.replace(/px$/,""));var m=new n.a.Minimap({container:"minimap",width:c,height:200}),u=new n.a.Contextmenu({container:"contextmenu"});e.add(l),e.add(i),e.add(d),e.add(r),e.add(m),e.add(u),window.editor=e,e.getCurrentPage().hideGrid();var v=e.getCurrentPage();v.on("afterchange",(function(a){if("add"===a.action&&("startNode"===a.model.nodetype||"endNode"===a.model.nodetype)){var e,s=t.editor.getCurrentPage().getNodes(),l=Object(o["a"])(s);try{for(l.s();!(e=l.n()).done;){var i=e.value;i.model.nodetype===a.model.nodetype&&i.model.id!==a.model.id&&(t.editor.getCurrentPage().remove(a.item),t.$message.warning("只能有一个开始节点或结束节点"))}}catch(n){l.e(n)}finally{l.f()}}})),v.on("node:click",(function(t){console.log(t)})),v.on("node:dblclick",(function(t){console.log("双击事件")})),v.on("node:contextmenu",(function(t){console.log(t)})),v.on("afteritemselected",(function(a){console.log("打印所选对象属性",a.item),console.log("打印所选对象数据模型",a.item.model);var e=a.item.model;a.item.isNode&&(t.nodeAttributeForm.label=e.label,t.nodeAttributeForm.width=e.size.split("*")[0],t.nodeAttributeForm.height=e.size.split("*")[1],t.nodeAttributeForm.color=e.color),a.item.isEdge&&(a.item.graph.edge({shape:"flow-polyline-round"}),t.edgeAttributeForm.label=e.label,t.edgeAttributeForm.shape=e.shape)})),v.on("afterdelete",(function(t){}))},openSaveAsImageDialog:function(){this.saveAsImageDialogVisible=!0},toggleGridShowStatus:function(t){t?this.editor.getCurrentPage().showGrid():this.editor.getCurrentPage().hideGrid()},saveAsImage:function(){var t;if("jpg"===this.saveAsImageFormat){var a=this.editor.getCurrentPage().saveImage();t=document.createElement("canvas"),t.width=a.width,t.height=a.height;var e=t.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,t.width,t.height),e.drawImage(a,0,0)}"png"===this.saveAsImageFormat&&(t=this.editor.getCurrentPage().saveImage());var s=t.toDataURL(),l=document.createElement("a");l.download="图片.jpg",l.href=s,document.body.appendChild(l),l.click(),document.body.removeChild(l),this.saveAsImageDialogVisible=!1},saveAsFile:function(){var t=JSON.stringify(this.editor.getCurrentPage().save()),a=new Blob([t]),e=URL.createObjectURL(a),s=document.createElement("a");s.download="数据.json",s.href=e,document.body.appendChild(s),s.click(),URL.revokeObjectURL(e),document.body.removeChild(s)},readHistoryData:function(){var t=localStorage.getItem("flowData");if(""!==t&&"{}"!==t&&null!==t){var a=JSON.parse(t);this.editor.getCurrentPage().read(a)}else this.$message.warning("无历史数据")},readUploadData:function(){var t=this,a=document.createElement("input");a.setAttribute("type","file"),a.setAttribute("accept",".json"),a.addEventListener("change",(function(e){console.dir(a);var s=a.files[0],l=new FileReader;l.onload=function(a){console.log(a);var e=JSON.parse(a.target.result);console.log(e),t.editor.getCurrentPage().read(e)},l.readAsText(s)})),a.click()},save:function(t){var a=Object(r["construct"])(t);console.log(JSON.stringify(a,null,2))}}},m=c,u=(e("1b2a"),e("2877")),v=Object(u["a"])(m,s,l,!1,null,null,null);a["default"]=v.exports}}]);