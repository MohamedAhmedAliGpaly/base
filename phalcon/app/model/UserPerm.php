<?php
namespace app\model;

/* 权限表 */
class UserPerm extends Model {

  public $uid;
  public $ctime;
  public $utime;

  /* 构造函数 */
  public function initialize(){
    $this->setSource('user_perm');  //数据表
  }

  /* 创建 */
  public function beforeCreate(){
    $this->ctime = date('YmdHis');
  }

  /* 更新 */
  public function beforeUpdate(){
    $this->utime = date('YmdHis');
  }

  /* 删除 */
  public function beforeDelete(){
    if($this->uid==1) return self::error('禁止删除超级管理员!');
  }

}
