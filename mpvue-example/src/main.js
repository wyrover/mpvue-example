import Vue from 'vue'
import App from './App'
import store from './store';
import './css/app.css'
import '../static/weui/weui.css'
//import 'weui/dist/style/weui.css'
Vue.prototype.$store = store;
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      '^pages/index/main',
      'pages/test-page/main',
      'pages/button/main'
//      'pages/list/main',
//      'pages/input/main',
//      'pages/slider/main',
//      'pages/uploader/main',
//
//      'pages/article/main',
//      'pages/badge/main',
//      'pages/flex/main',
//      'pages/footer/main',
//      'pages/gallery/main',
//      'pages/grid/main',
//      'pages/icons/main',
//      'pages/loadmore/main',
//      'pages/panel/main',
//      'pages/preview/main',
//      'pages/progress/main',
//      'pages/swiper/main',
//
//      'pages/actionsheet/main',
//      'pages/dialog/main',
//      'pages/msg/main',
//      'pages/msg-fail/main',
//      'pages/msg-success/main',
//      'pages/picker/main',
//      'pages/mulLinkagePicker/main',
//      'pages/toast/main',
//      'pages/navbar/main',
//      'pages/tabbar/main',
//
//      'pages/searchbar/main',
//
//      'pages/request/main',
//      'pages/vuex/main',
//      'pages/vuexPage/main',
//      'pages/rate/main',
//
//      'pages/test/main',
//      'pages/componentsTest/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'mpvue-example',
      navigationBarTextStyle: 'black'
    }
  }
}
