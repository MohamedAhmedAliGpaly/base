<?php

namespace app\modules\admin\controller;

use app\common\Base;
use app\model\SysConfig;
use app\Env;

/**
* 网站：首页
*/
class IndexController extends Base{

  /* 首页 */
  public function indexAction(){
    return self::getJSON(['code'=>0,'msg'=>'Admin']);
  }

  /* APP更新 */
  function appUpdateAction(){
    $os  = $this->request->get('os','string');
    if($os=='iOS'){
      $file = 'upload/admin/down/ios.ipa';
      $size = filesize($file);
    }elseif($os=='Android'){
      $file = 'upload/admin/down/android.apk';
      $size = filesize($file);
    }
    return self::getJSON(['code'=>0,'version'=>'1.0.0','size'=>$size,'file'=>$file]);
  }

  /* 系统配置 */
  public function getConfigAction(){
    // 查询
    $config = SysConfig::find([
      'name in ("title","copy","logo","login_bg")',
      'columns'=>'name,val',
    ])->toArray();
    // 数据
    $list = [];
    foreach($config as $val){
      if($val['name']=='logo' || $val['name']=='login_bg'){
        $list[$val['name']] = $val['val']?Env::$base_url.$val['val']:'';
      }else{
        $list[$val['name']] = $val['val'];
      }
    }
    // 返回
    return self::getJSON(['code'=>0,'msg'=>'成功','list'=>$list]);
  }

}