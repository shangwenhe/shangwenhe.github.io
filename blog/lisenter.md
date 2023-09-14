# 实时监听端口状态。并重启服务

使用场景： 服务需要依赖第三方接口。本地开发过程中有时因为网络问题导致服务终止。

>  监听端口，如果端口没有服务则重启服务
>  注意：它不是守护进程，只是一个 循环监听，所以不可以使用在生产环境。


```shell
while true;
do
  len=$(lsof -i :8443 | grep node  | wc -l);
  if [ $len == 0 ]; then
    node ./index.js
  fi
  sleep 0.3;
done
echo 'OK'

```
