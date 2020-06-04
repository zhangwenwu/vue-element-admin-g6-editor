# vue-element-admin-g6-editor
基于vue-element-admin框架模板集成了g6-editor,保留了vue-element-admin模板,没有多余的组件代码

# 克隆项目
git clone https://github.com/zhangwenwu/vue-element-admin-g6-editor.git

# 进入项目目录
cd vue-element-admin-g6-editor

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:8888](http://localhost:8888)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod