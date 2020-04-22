import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import QRCode from 'qrcode'

import Config from './config'
import App from './App.vue'

// 配置
Vue.config.productionTip = false;
Vue.use(Config);

// 全局注册
Vue.prototype.$ajax = axios;
Vue.prototype.$storage = window.localStorage;
Vue.prototype.$qrcode = QRCode;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* 用户点击播放问题 */
document.body.ontouchstart = ()=>{
  try{
    if(plus.os.name!='iOS') document.createElement('audio');
  }catch(e){
    document.createElement('audio');
  }
}