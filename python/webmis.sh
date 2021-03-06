#!/bin/bash

# 配置
index="web.py"
config="web.ini"
s=$1

# 帮助
helpText(){
  echo "用法:"
  echo "  ./webmis.sh <command>"
  echo "<command>"
  echo "  serve       运行"
  echo "  start       服务器端启动"
  echo "  restart     重启服务: 中断进程并且重新启动"
  echo "  stop        停止服务"
  echo "<args>"
  echo "  index       入口文件: $index"
  echo "  config      服务器配置: $config"
}

# 运行
if [ "$s" == "serve" ]; then
  python $index
# 启动
elif [ "$s" == "start" ]; then
  uwsgi --ini $c &
# 重启
elif [ "$s" == "restart" ]; then
  ps -aux | grep uwsgi | grep -v grep | awk {'print $2'} | xargs kill
  uwsgi --ini $config &
# 停止
elif [ "$s" == "stop" ]; then
  ps -aux | grep uwsgi | grep -v grep | awk {'print $2'} | xargs kill
else
  helpText
fi

