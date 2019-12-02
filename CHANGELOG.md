在vscode中鼠标右键，出现菜单
  *`build` 点击之后， 如果在package.json中有up 并且是Object
    * 1.`up` 中有`kaiguan`属性，会把`kaiguan`设置为0，打包完不上传服务器
    * 2.`up` 中有`start` 属性,会运行 `start` 设置的命令
  *`build_upload_test` 点击之后， 如果在package.json中有up 并且是Object
    * 1.`up` 中有`kaiguan`属性，会把`kaiguan`设置为1，打包完会上传配置文件的test服务器
    * 2.`up` 中有`start` 属性,会运行 `start` 设置的命令
  *`build_upload_pro` 点击之后， 如果在package.json中有up 并且是Object
    * 1.`up` 中有`kaiguan`属性，会把`kaiguan`设置为2，打包完会上传配置文件的pro服务器
    * 2.`up` 中有`start` 属性,会运行 `start` 设置的命令

简单地说，就是package.json中配置完up,在up中加入kaigaun和start，配合 webpack_auto_upload_j 就开始使用吧
webpack_auto_upload_j 的 [详细介绍的链接1](https://juejin.im/post/5de241d75188250604078a0e)
webpack_auto_upload_j 的 [详细介绍的链接2](https://github.com/jiangji1/webpack_auto_upload_j)

如果下图    
![图片](https://raw.githubusercontent.com/jiangji1/vscode_plugin_to_webpack_auto_upload_j/master/imgs/kaiguan.png)