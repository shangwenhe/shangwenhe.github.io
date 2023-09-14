# Linux资源管控

## 一. 资源隔离

### Namespace是什么？

> namespace 是 Linux 内核用来隔离内核资源的方式。
>
> 它是对全局系统资源的封装隔离，
> 处于不同 namespace 的进程拥有独立的全局系统资源，
> 改变一个 namespace 中的系统资源只会影响当前 namespace 里的进程，
> 对其他 namespace 中的进程没有影响
>
>  每个namespace下的资源对于其他namespace下的资源是透明的，不可见的。
>从操作系统角度看，可以出现多个`相同pid`的进程，
> 由于它们属于不同的namespace，所以进程之间并不冲突。
> 从用户角度看,只能看到属于用户自己namespace下的资源，

例如:ps命令只能列出自己namespace下的进程。

#### 内核中实现了六种 namespace，

按照引入的先后顺序，列表如下：

namespace 引入内核版本 被隔离的全局系统资源 在容器语境下的隔离效果

##### 1. Mount namespaces

> 文档系统挂接点
> 每个容器能看到不同的文档系统层次结构

##### 2. UTS namespaces

> nodename 和 domainname
> 每个容器可以有自己的 hostname 和 domainame

##### 3. PID namespaces

> 进程 ID 数字空间 (process ID number space)
> 每个 PID namespace 中的进程可以有其独立的 PID； 每个容器可以有其 PID 为 1 的root 进程；也使得容器可以在不同的 host 之间迁移，因为 namespace 中的进程 ID 和 host 无关了。这也使得容器中的每个进程有两个PID：容器中的 PID 和 host 上的 PID。

##### 4.IPC namespaces

> 每个容器有其自己的 System IPC 和 POSIX 消息队列文档系统，因此，只有在同一个 IPC namespace 的进程之间才能互相通信

##### 5. Network namespaces

> 网络相关的系统资源
> 每个容器用有其独立的网络设备，IP 地址，IP 路由表，/proc/net 目录，端口号等等。这也使得一个 host 上多个容器内的同一个应用都绑定到各自容器的 80 端口上。

##### 6. User namespaces

> 用户和组 ID 空间
> 在 user namespace 中的进程的用户和组 ID 可以和在 host 上不同； 每个 container 可以有不同的 user 和 group id；一个 host 上的非特权用户可以成为 user namespace 中的特权用户；



### Namespace的用途?

> 当前linux内核中提供了7类namespace,分别用于:
>
> Cgroup   :Cgroup 根目录
> IPC        :System V IPC/POSIX 消息队列
> Network :网络设备/协议栈/端口
> Mount    :挂载点
> PID        :进程ID
> User      :用户和group ID
> UTS       :Hostname和NIS域名

### 查看一个进程所属的namespace

**得到一个nginx进程的id**

```bash
[root@galaxy-node-master 2675]#  ps auxfww | grep nginx
root      10091  0.0  0.0 112824   988 pts/0    S+   10:26   0:00          \_ grep --color=auto nginx:
root       2425  0.0  0.0  20104  3644 ?        Ss   09:40   0:00      |   |   \_ nginx: master process /opt/gitlab/embedded/sbin/nginx -p /var/opt/gitlab/nginx
polkitd    2452  0.0  0.0  24356  5668 ?        S    09:40   0:00      |   |       \_ nginx: worker process
polkitd    2454  0.0  0.0  24496  6384 ?        S    09:40   0:00      |   |       \_ nginx: worker process
polkitd    2455  0.0  0.0  24356  5668 ?        S    09:40   0:00      |   |       \_ nginx: worker process
polkitd    2456  0.0  0.0  24356  5668 ?        S    09:40   0:00      |   |       \_ nginx: worker process
polkitd    2457  0.0  0.0  20320  1444 ?        S    09:40   0:00      |   |       \_ nginx: cache manager process
```

`我们选择2452这个进程`

**查看2452这个进程的namespace**

```bash
[root@galaxy-node-master 2675]# ls /proc/2452/ns/
ipc  mnt  net  pid  user  uts
```

**这些namespace文件的类型是符号链接**

```bash
[root@galaxy-node-master 2675]# ll /proc/2452/ns/
总用量 0
lrwxrwxrwx. 1 polkitd input 0 3月   2 10:00 ipc -> ipc:[4026532754]
lrwxrwxrwx. 1 polkitd input 0 3月   2 10:00 mnt -> mnt:[4026532752]
lrwxrwxrwx. 1 polkitd input 0 3月   2 10:00 net -> net:[4026532757]
lrwxrwxrwx. 1 polkitd input 0 3月   2 10:00 pid -> pid:[4026532755]
lrwxrwxrwx. 1 polkitd input 0 3月   2 10:00 user -> user:[4026531837]
lrwxrwxrwx. 1 polkitd input 0 3月   2 10:00 uts -> uts:[4026532753]
```

链接文件的内容的格式为 xxx:[inode number]。
xxx 是 namespace 的类型，
inode number 用来标识一个 namespace，



### 查看一个进程的mnt namespace信息

mnt namespace的挂载点信息，记录在下面的3个文件中

```bash
[root@galaxy-node-master 2675]# ll /proc/2452/mount*
-r--r--r--. 1 polkitd input 0 3月   2 10:00 /proc/2452/mountinfo
-r--r--r--. 1 polkitd input 0 3月   2 10:00 /proc/2452/mounts
-r--------. 1 polkitd input 0 3月   2 10:00 /proc/2452/mountstats
```

mnt namespace的作用:隔离mount point，
每个mnt namespace内的文件结构可以单独进行修改，互不影响

#### 我们做一个试验验证mnt namespace:

先创建两个目录,下面各创建一个文件:

```bash
[root@localhost ~]# mkdir /root/hosta
[root@localhost ~]# touch /root/hosta/a.txt
[root@localhost ~]# mkdir /root/hostb
[root@localhost ~]# touch /root/hostb/b.txt
```

查看当前的mnt目录:

```bash
[root@localhost ~]# ls /mnt
hgfs
```

**新开启两个终端：**

##### 在**终端a**中进行如下操作:

创建新的mount namespace和uts namespace,并运行bash

```bash
[root@localhost ~]# unshare --mount --uts bash
```

修改主机名为hosta

```bash
[root@localhost ~]# hostname hosta && exec bash
```

查看当前进程中mnt和uts两个namespace的inode number

> $$:当前的进程id

```bash
[root@hosta ~]# readlink /proc/$$/ns/{mnt,uts}
mnt:[4026532774]
uts:[4026532775]
```

挂载hosta目录到mnt下

```bash
[root@hosta ~]# mount --bind hosta/ /mnt/
[root@hosta ~]# ls /mnt
a.txt
```



**回到最早的localhost终端**中查看:

```bash
[root@localhost ~]# ls /mnt
hgfs
```

/mnt目录下的内容没有变，`说明localhost终端与 hosta终端的mount namespace是成功隔离`的



##### **在终端b中进行以下操作:**

创建新的mount namespace和uts namespace,并运行bash

```bash
[root@localhost ~]# unshare --mount --uts bash
```

修改主机名为hostb

```bash
[root@localhost ~]# hostname hostb && exec bash
```

查看当前进程中mnt和uts两个namespace的inode number

> $$:当前的进程id

```bash
[root@hostb ~]# readlink /proc/$$/ns/{mnt,uts}
mnt:[4026532706]
uts:[4026532707]
```

挂载hostb目录到mnt下

```bash
[root@hostb ~]# mount --bind hostb/ /mnt/
[root@hostb ~]# ls /mnt
b.txt
```



### 测试pid namespace

> fork:以unshare的子进程来启动bash

```bash
[root@localhost ~]# unshare --pid --uts --mount --fork bash
```

修改hostname,作为标识

```bash
[root@localhost ~]# hostname hosta && exec bash
[root@hosta ~]# echo $$
1
```

当前的进程id是1

> -p:显示pid
> -l: 显示长的行(不按COLUMNS这个环境变量去截取宽度)

```bash
[root@hosta ~]# pstree -pl
systemd(1)─┬─ModemManager(871)─┬─{ModemManager}(911)
           │                   └─{ModemManager}(924)
           ├─NetworkManager(867)─┬─dhclient(993)
           │                     ├─{NetworkManager}(915)
           │                     └─{NetworkManager}(925)
…
```


用pstree可以看到:pid为1的进程是systemd

这是因为这里的proc是unshare给带来的mount namespace的/proc

包括查看ns下的inode number也是如此，

```bash
[root@hosta ~]# readlink /proc/$$/ns/{pid,uts,mnt}
pid:[4026531836]
uts:[4026531838]
mnt:[4026531840]
```

需要重新挂载/proc

```bash
[root@hosta liuhongdi]# mount --types proc proc /proc/
[root@hosta liuhongdi]# pstree -pl
bash(1)───pstree(70)
```

说明：如果用unshare启动bash时，加 --mount-proc 参数，则不需要重新挂载/proc

再次查看ns下的inode number，也可以正确显示了

```bash
[root@hosta liuhongdi]# readlink /proc/$$/ns/{pid,uts,mnt}
pid:[4026532779]
uts:[4026532778]
mnt:[4026532777]
```





## 二. 资源管控

### Cgroup概述

在Linux里，一直以来就有对进程进行分组的概念和需求，比如session group， progress group等，后来随着人们对这方面的需求越来越多，比如需要追踪一组进程的内存和IO使用情况等，于是出现了cgroup,主要有两大用途:

1. 用来统一将进程进行分组

2. 在分组的基础上对进程进行监控和资源控制管理等。

cgroup是Linux下的一种将进程按组进行管理的机制，在用户层看来，cgroup技术就是把系统中的所有进程组织成一颗一颗独立的树，每棵树都包含系统的所有进程，树的每个节点是一个进程组，而每颗树又和一个或者多个subsystem关联，树的作用是将进程分组，而subsystem的作用就是对这些组进行操作。cgroup主要包括下面两部分：

**subsystem**

> 一个subsystem就是一个内核模块，他被关联到一颗cgroup树之后，就会在树的每个节点(进程组)上做具体的操作。subsystem经常被称作"resource controller"，因为它主要被用来调度或者限制每个进程组的资源，但是这个说法不完全准确，因为有时我们将进程分组只是为了做一些监控，观察一下他们的状态，比如perf_event subsystem。

**hierarchy**

> 一个hierarchy可以理解为一棵cgroup树，树的每个节点就是一个进程组，每棵树都会与零到多个subsystem关联。在一颗树里面，会包含Linux系统中的所有进程，但每个进程只能属于一个节点(进程组)。系统中可以有很多颗cgroup树，每棵树都和不同的subsystem关联，一个进程可以属于多颗树，即一个进程可以属于多个进程组，只是这些进程组和不同的subsystem关联。
>
> 目前Linux支持12种subsystem，如果不考虑不与任何subsystem关联的情况(systemd就属于这种情况)，Linux里面最多可以建12颗cgroup树，每棵树关联一个subsystem，当然也可以只建一棵树，然后让这棵树关联所有的subsystem。当一颗cgroup树不和任何subsystem关联的时候，意味着这棵树只是将进程进行分组，至于要在分组的基础上做些什么，将由应用进程自己决定，systemd就是一个这样的例子。

###  对某个进程限制它使用cpu为50%

1、先写一个占用cpu较高的脚本

```shell
x=0
while [ True ];do
    x=$x+1
done;
```

2、可以看到运行后cpu使用到了100%

```bash
  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
20369 root      20   0  113452   1664   1196 R  100.0  0.0   0:10.73 sh
```

3、创建控制组

```bash
mkdir /sys/fs/cgroup/cpu/foo
```

4、下面用cgroups控制这个进程的cpu资源

```bash
echo 50000 > /sys/fs/cgroup/cpu/foo/cpu.cfs_quota_us #将cpu.cfs_quota_us设为50000，相对于cpu.cfs_period_us的100000是50%
echo 20369 >/sys/fs/cgroup/cpu/foo/tasks
```

5、我们看到大概限制到了50%左右

```bash
  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND
20369 root      20   0  113828   1908   1196 R  49.8  0.0   0:33.75 sh
```

6、cgroup控制组下还有很多对于cpu其他的一些控制

```bash
[root@foreman ~]# ls /sys/fs/cgroup/cpu/foo/
cgroup.clone_children  cpuacct.usage          cpu.rt_period_us       notify_on_release
cgroup.event_control   cpuacct.usage_percpu   cpu.rt_runtime_us      tasks
cgroup.procs           cpu.cfs_period_us      cpu.shares
cpuacct.stat           cpu.cfs_quota_us       cpu.stat
```

###  对某个进程限制它内存的使用

ls /sys/fs/cgroup/memory/cgtest/*

```bash
 cgroup.event_control       #用于eventfd的接口
 memory.usage_in_bytes      #显示当前已用的内存
 memory.limit_in_bytes      #设置/显示当前限制的内存额度
 memory.failcnt             #显示内存使用量达到限制值的次数
 memory.max_usage_in_bytes  #历史内存最大使用量
 memory.soft_limit_in_bytes #设置/显示当前限制的内存软额度
 memory.stat                #显示当前cgroup的内存使用情况
 memory.use_hierarchy       #设置/显示是否将子cgroup的内存使用情况统计到当前cgroup里面
 memory.force_empty         #触发系统立即尽可能的回收当前cgroup中可以回收的内存
 memory.pressure_level      #设置内存压力的通知事件，配合cgroup.event_control一起使用
 memory.swappiness          #设置和显示当前的swappiness
 memory.move_charge_at_immigrate #设置当进程移动到其他cgroup中时，它所占用的内存是否也随着移动过去
 memory.oom_control         #设置/显示oom controls相关的配置
 memory.numa_stat           #显示numa相关的内存
```

写一个内存占用的c程序，每秒申请1MB内存

```c#
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h> #define MB (1024 * 1024) int main(int argc, char *argv[])
{
    char *p;
    int i = ;
    while() {
        p = (char *)malloc(MB);
        memset(p, , MB);
        printf("%dM memory allocated\n", ++i);
        sleep();
    }     return ;
}

#gcc mem-allocate.c  -o  mem-allocate
```

cgroup限制内存使用50M(强制限制 memory.limit_in_bytes)

```bash
[root@foreman cgtest]# pwd
/sys/fs/cgroup/memory/cgtest
[root@foreman cgtest]# echo 50M > memory.limit_in_bytes
[root@foreman cgtest]# echo 0 > memory.oom_control # 为0时，达到上限会直接kill
[root@foreman cgtest]# pgrep mem-allocate
35190
[root@foreman cgtest]# echo 35190 > tasks
# 只对一个线程ID做限制 ，如果需要对一个线程组做限制，需要将PID放到cgroup.procs中。
# 这样这个PID本身以及所衍生的进程整体会限制在memory.limit_in_bytes中设置的大小内存
# 同时包括这个PID调用所产生的进程也会受到限制。想查看某个进程所属线程组使用如下命令
#cat /proc/<PID>/cgroup 来进行查看
```

限制效果：

```bash
[root@foreman ~]# ./mem-allocate
1M memory allocated
2M memory allocated
3M memory allocated
4M memory allocated
...
...
49M memory allocated
50M memory allocated
51M memory allocated
Killed
# 如果达到限制不想直接kill进程，而是挂起进程需要将oom_kill_disable 设置为1
[root@foreman cgtest]# cat memory.oom_control #默认
oom_kill_disable 0
under_oom 0
[root@foreman cgtest]# echo 1 > memory.oom_control
[root@foreman cgtest]# cat memory.oom_control
oom_kill_disable 1
under_oom 0
```



跑一个脚本使其产生多个子线程去疯狂吃内存(提前将memory.limitxxxxx设置为300MB，oom_kill 设置为0)

```bash
[root@foreman ~]# cat cgtest.sh
sleep 20
x=0
while [ True ];do
    nohup /root/mem-allocate >>/root/mem.log 2>&1 &
    sleep 1
    proc_num=$(pgrep mem-allocate | wc -l)
    if [ $proc_num -eq 50 ];then
        sleep 1000000
    fi
    x=$(($x+1))
done;
```

跑起来后用systemd-cgtop查看限制情况：

```bash
#systemd-cgtop # 使用此命令查看cgroup限制的资源情况
/cgtest     25      -   295.8M
# 通过上面可以清晰的看到tasks 25个 内存限制到了300MB
```

概念理解：

```text
就把5678进程加入到了/foo控制组。那么tasks和cgroups.procs有什么区别呢？
前面说的对“进程”的管理限制其实不够准确。系统对任务调度的单位是线程。
在这里，tasks中看到的就是线程id。而cgroups.procs中是线程组id，也就是一般所说的进程id。

将一个一般的pid写入到tasks中，只有这个pid对应的线程，以及由它产生的其他进程、线程会属于这个控制组，原有的其他线程则不会。
而写入cgroups.procs会把当前所有的线程都加入进去。如果写入cgroups.procs的不是一个线程组id，而是一个一般的线程id，那会自动找到所对应的线程组id加入进去。

进程在加入一个控制组后，控制组所对应的限制会即时生效。想知道一个进程属于哪些控制组，可以通过cat/proc/<pid>/cgroup查看。

要把进程移出控制组，把pid写入到根cgroup的tasks文件即可。因为每个进程都属于且只属于一个cgroup，加入到新的cgroup后，原有关系也就解除了。

要删除一个cgroup，可以用rmdir删除相应目录。不过在删除前，必须先让其中的进程全部退出，对应子系统的资源都已经释放，否则是无法删除的。

前面都是通过文件系统访问方式来操作cgroups的。实际上，也有一组命令行工具。
```





## 三. 进程

### 进程的概念

在进程创建前我们必须明白一个概念什么进程？

> **进程的概念：**我们知道操作系统最核心的概念就是进程。其实进程简单来说就是在操作系统中运行的程序，它是操作系统资源管理的最小单位。但是进程是一个动态的实体，它是程序的一次执行过程。进程和程序的区别在于：进程是动态的，程序是静态的，进程是运行中的程序，而程序是一些保存在硬盘上的可执行代码。

### Linux进程结构

在Linux下面，可以通过命令ps或pstree查看当前系统中的进程。

有了进程的笼统概念后那我们接下来要明白的是进程它到底拥有些什么，上面不是说它是一个动态的实体么，意思是一旦启动它时时刻刻在运行对吧(当然是在一定的时间内)，那么它是怎么运行的需要些什么额外的资源呢，这就要我们明白进程的结构了。

> **Linux进程结构：**可由三部分组成：`代码段`、`数据段`、`堆栈段`。也就是程序、数据、进程控制块PCB（Process Control Block）组成。进程控制块是进程存在的惟一标识，系统通过PCB的存在而感知进程的存在。
>
> `代码段`存放程序的可执行代码。
> `数据段`存放程序的全局变量、常量、静态变量。
> `堆栈段`中的堆用于存放动态分配的内存变量。堆栈段中的栈用于函数调用，它存放着函数的参数、函数内部定义的局部变量。

`系统通过PCB对进程进行管理和调度`。PCB包括创建进程、执行程序、退出进程以及改变进程的优先级等。而进程中的PCB用一个名为task_struct的结构体来表示，定义在include/linux/sched.h中，每当创建一新进程时，便在内存中申请一个空的task_struct结构，填入所需信息，同时，指向该结构的指针也被加入到task数组中，所有进程控制块都存储在task[]数组中。

### 进程间通信的方式

1. **管道（pipe）及有名管道（named pipe）**：管道可用于具有亲缘关系的父子进程间的通信，有名管道除了具有管道所具有的功能外，它还允许无亲缘关系进程间的通信。
2. **信号（signal）**：信号是在软件层次上对中断机制的一种模拟，它是比较复杂的通信方式，用于通知进程有某事件发生，一个进程收到一个信号与处理器收到一个中断请求效果上可以说是一致的。
3. **消息队列（message queue）**：消息队列是消息的链接表，它克服了上两种通信方式中信号量有限的缺点，具有写权限得进程可以按照一定得规则向消息队列中添加新信息；对消息队列有读权限得进程则可以从消息队列中读取信息。
4. **共享内存（shared memory）**：可以说这是最有用的进程间通信方式。它使得多个进程可以访问同一块内存空间，不同进程可以及时看到对方进程中对共享内存中数据得更新。这种方式需要依靠某种同步操作，如互斥锁和信号量等。
5. **信号量（semaphore）**：主要作为进程之间及同一种进程的不同线程之间得同步和互斥手段。
6. **套接字（socket）**：这是一种更为一般得进程间通信机制，它可用于网络中不同机器之间的进程间通信，应用非常广泛。


###  进程和线程的关系
1. 一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程。
2. 资源分配给进程，同一进程的所有线程共享该进程的所有资源。
3. 处理机分给线程，即真正在处理机上运行的是线程。
4. 线程在执行过程中，需要协作同步。不同进程的线程间要利用消息通信的办法实现同步。线程是指进程内的一个执行单元,也是进程内的可调度实体.

### 进程与线程的区别

>  **进程**：每个进程都有独立的代码和数据空间（进程上下文），进程间的切换会有较大的开销，一个进程包含1--n个线程。（进程是资源分配的最小单位）
> **线程：**同一类线程共享`代码段`和`数据段`，每个线程有独立的运行栈和程序计数器(PC)，线程切换开销小。（线程是cpu调度的最小单位）

（1）调度：线程作为调度和分配的基本单位，进程作为拥有资源的基本单位
（2）并发性：不仅进程之间可以并发执行，同一个进程的多个线程之间也可并发执行
（3）拥有资源：进程是拥有资源的一个独立单位，线程不拥有系统资源，但可以访问隶属于进程的资源.
（4）系统开销：在创建或撤消进程时，由于系统都要为之分配和回收资源，导致系统的开销明显大于创建或撤消线程时的开销。

