在vscode中鼠标右键有2个菜单选项
  * `build`  如果在`package.json`中有`up`，并且是Object. 点击`build`之后
    * `kaiguan` 如果 up 中有kaiguan属性， 会把kaiguan 改为 false，打包完不会上传服务器
    * `start` 如果 up 中有start属性， 会执行start 的配置的命令
  * `build_upload`  如果在`package.json`中有`up`，并且是Object. 点击`build_upload`之后
    * `kaiguan` 如果 up 中有kaiguan属性， 会把kaiguan 改为 true，打包完会上传服务器
    * `start` 如果 up 中有start属性， 会执行start 的配置的命令

简单地说，就是package.json中配置完up,在up中加入kaigaun和start，配合 webpack_auto_upload_j 就开始使用吧
webpack_auto_upload_j 的 [详细介绍的链接1](https://juejin.im/post/5de241d75188250604078a0e)
webpack_auto_upload_j 的 [详细介绍的链接2](https://github.com/jiangji1/webpack_auto_upload_j)

如图
![图片](http://www.jiangji1.com/static/upload_031d4d21568f269be63281b7dcc5041d.jpg)

如果图片挂了，可以点这里打开 [http://www.jiangji1.com/static/upload_031d4d21568f269be63281b7dcc5041d.jpg](http://www.jiangji1.com/static/upload_031d4d21568f269be63281b7dcc5041d.jpg)