import Env from '../../env.js'

/* Get请求 */
export default (url,data,success,fail)=>{
  const str = url.substr(0,4);
  url = str=='http'?url:Env.apiUrl+url;
  wx.request({
    url: url,
    data: data,
    method: 'POST',
    header: Env.request.headers,
    success: success,
    fail: fail,
  });
}