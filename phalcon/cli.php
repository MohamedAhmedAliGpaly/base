<?php

use Phalcon\Di\FactoryDefault\Cli;
use Phalcon\Cli\Console;
use Phalcon\Config\Adapter\Php as phpConfig;

define('BASE_PATH', __DIR__);
define('APP_PATH', BASE_PATH . '/app');

// Composer
require BASE_PATH.'/vendor/autoload.php';

// 注册堆栈框架
$di = new Cli();

/* 注册：配置 */
$di->setShared('config', function () {
  return new phpConfig(APP_PATH.'/config/env.php');
});

// 自动加载
require APP_PATH.'/config/loader.php';
// 公共服务
require APP_PATH.'/config/services_cli.php';

// 创建应用
$console = new Console();
$console->setDI($di);

// 参数
$args = [];
foreach ($argv as $k=>$v) {
  if($k===1){
    $args['task'] = $v;
  }elseif($k===2){
    $args['action'] = $v;
  }elseif($k>=3){
    $args['params'][] = $v;
  }
}

try {
  $console->handle($args);
}catch(\Exception $e) {
  echo 123;
  // fwrite(STDERR, $e->getMessage() . PHP_EOL);
  // exit(1);
}