

```groovy
sh script: "rm -fr  `ls -t /opt/artifacts${arg.module}  | grep '^[0-9]*\$' | awk '{ if(NR>5){ print \"/opt/artifacts${arg.module}/\"\$1 }}'`";
```

## 定义参数

```Groovy
arg = [ module: '/page/test/module' ]
```

## 正序排列给定的目录

```bash
ls -t /opt/artifacts${arg.module}
```

## 筛选归档的目录， 以数字为目录名

```bash
grep '^[0-9]*\$'
```

## 选取出大与5个的目录

```bash
awk '{ if(NR>5){ print \"/opt/artifacts${arg.module}/\"\$1 }}'
```

