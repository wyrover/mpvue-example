# mpvue-example

## 1. 创建工程
```
npm install -g vue-cli
vue init mpvue/mpvue-quickstart mpvue-example
cd mpvue-example
npm install
npm run dev
```

项目跑起来后，微信开发者工具指向 mpvue-example 目录




## 2. vue 生命周期


## 3. 添加新页面

复制 src/pages/logs 到 src/pages/test-page

修改 index.vue 内容，然后在 src/main.js 中注册新页面

在 src/pages/index/index.vue 中写一个链接，转向新的页面

``` html
<a href="/pages/test-page/main" class="counter">去往 test-page</a>
```

添加新页面后需要重新运行

```
npm run dev
```

如果项目启用了 eslint 语法检查，先关闭他，影响快速预览。

修改 build/webpack.base.conf.js，将相关 eslint-loader 注释掉。

``` js
rules: [
//      {
//        test: /\.(js|vue)$/,
//        loader: 'eslint-loader',
//        enforce: 'pre',
//        include: [resolve('src'), resolve('test')],
//        options: {
//          formatter: require('eslint-friendly-formatter')
//        }
//      },
```


## 4. 引入第三方组件

使用weui，原本希望通过以下命令行安装 weui，再 import ，结果编译不成功

```
npm install weui --save   废弃
```

先使用以下项目

https://github.com/KuangPF/mpvue-weui

```
git clone --depth=1 https://github.com/KuangPF/mpvue-weui
```

克隆后，将 static 拷贝到项目目录，然后 import

main.js
```
import './css/app.css'
import '../static/weui/weui.css'
```

然后拷贝个例子页面来使用

mpvue-weui 这个项目并没有封装组件，只是引用了 weui 的样式。

mpvue-weui 
```
由于是在小程序中使用，于是就直接使用了 weiui-wxss 中的样式文件, 官方提供的是weui.wxss, 因此手动转成了weui.css, 然后引入即可。
```



## 5. 使用 json-server 搭建一个 mock 服务器


