在vscode中鼠标右键，出现菜单
  *`build` 点击之后， 如果在package.json中有up 并且是Object
    * 1.`up` 中有`kaiguan`属性，会把`kaiguan`设置为false，打包完不上传服务器
    * 2.`up` 中有`start` 属性,会运行 `start` 设置的命令
  *`build_upload` 点击之后， 如果在package.json中有up 并且是Object
    * 1.`up` 中有`kaiguan`属性，会把`kaiguan`设置为true，打包完会上传服务器
    * 2.`up` 中有`start` 属性,会运行 `start` 设置的命令

如果下图    
![图片](http://www.jiangji1.com/static/upload_0b9c9aad56dcc7db3504e55d811b41f4.jpg)