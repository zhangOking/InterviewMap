# 开发手册
写md文件前，请查看json树，md文件的位置，名称，需要和json树中的位置和名称相互对应

json树在src/assets/json文件夹中

md文件需要存放于public文件中

举个栗子

// src/assets/json/fejson/index.json
// json树中关于内置类型的md文件，应该存放于 public/FE/JS/内置类型.md
[
  {
    "id": 1,
    "label": "JS",
    "children": [
      {
        "id": 10001,
        "label": "内置类型"
      },
      ...
      ...
]
# 整体计划（暂定）
V1

做一个回忆的功能，看到哪里直接点能跳转过去

能显示当前浏览的百分比，还有当前浏览的时间，最近的浏览时间，做个统计图

本地存储，不入库，不登录

补全所有的信息

V2
增加登录功能，可以游客登录

数据入库，增加后台数据分析，增加留言评论，开放编辑，对内容的准确性进行多次校验

做聊天室

做数据分析

V3
不仅仅是前端内容,做多端

有兴趣的可以联系Q/VX：1053189708
