import Storage from './library/ui/storage'

/* 正式 */
const title = 'WebMIS-后台框架';
const lag = JSON.parse(Storage.getItem('platform'));
let baseUrl,socket;
if(lag && lag.name=='python'){
  baseUrl = 'https://demo-python.webmis.vip/';
  socket = 'wss://demo-python.webmis.vip/wss';
}else if(lag && lag.name=='java'){
  baseUrl = 'https://demo-java.webmis.vip/';
  socket = 'wss://demo-java.webmis.vip/websocket';
}else{
  baseUrl = 'https://demo-api.webmis.vip/';
  socket = 'wss://demo-api.webmis.vip/wss';
}

export default {
  dev: false, // 是否开发模式
  title: title, // 应用名称
  version: '1.0.0', // 应用版本
  baseUrl: baseUrl, // 数据地址
  apiUrl: baseUrl+'admin/', // 数据接口地址
  copy: 'Copyright © WebMIS.vip 2020',  // 版权信息
  /* 请求 */
  request:{
    headers: {
      "Content-Type":"application/x-www-form-urlencoded"  // 表单方式
    },
  },
  /* 状态栏 */
  statusBar:{
    height:'0px', // 默认高度
    color: '#333',  // 字体颜色
    bgColor:'#FFF'  // 背景颜色
  },
  /* 更新 */
  update: {
    start: true,  //开启更新
    bg: '#24292E',  //背景颜色
    logoBg: '#FFFFFF', //Logo背景
    loading: '#6FB737',  //加载中
    loaded: '#000000', //未加载
    copy: '#666666', //版权颜色
    msgColor: '#999999', //提示颜色
    butColor: '#FFFFFF', //按钮颜色
    butBg: '#6FB737',  //按钮背景
    butText: '下载并安装' //按钮文字
  },
  upIosUrl: '', // IOS下载链接
  /* Login */
  login: {
    start: true,  //Token验证
    api: 'user/token',  //验证接口
    uinfo: 'uinfo', //用户信息
    time: 60000, //间隔
  },
  /* 高德地图 */
  amap: {
    start: false,  //开启定位
    jsapi_key: 'd956f0c3e15489a1b5bf291e5d133c8a',  
  },
  /* Socket */
  socket: {
    start: false, // 启动
    server: socket, // 链接地址
    time: 5000, //间隔
  },
  /* 消息阅读 */
  msg: {
    content: 'title', //阅读：title(标题)、content(内容)
    browser: false,  // 浏览器信息
  },
}