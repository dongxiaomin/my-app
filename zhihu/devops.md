## 
## devops
将开发人员（Dev）和运维人员（Ops）融合到一个组中


## docker
Docker 是一个应用 打包、分发、部署的工具
打包：就是把你软件运行所需的依赖、第三方库、软件打包到一起，变成一个安装包
分发：你可以把你打包好的“安装包”上传到一个镜像仓库，其他人可以非常方便的获取和安装
部署：拿着“安装包”就可以一个命令运行起来你的应用，自动模拟出一摸一样的运行环境，不管是在 Windows/Mac/Linux。

https://docker.easydoc.net/doc/81170005/cCewZWoN/lTKfePfP
https://www.bilibili.com/video/BV11L411g7U1/?p=7&spm_id_from=pageDriver&vd_source=14fedc3c63ed079cd9eb76b1b47d1f84


打镜像:
docker build -t test:v1

运行容器:
docker run -p 8080:8080 --name test-hello test:v1

目录挂载, 时时更新:
bind mount 方式用绝对路径 -v D:/code:/app
docker run -p 9090:8080 --name test-hello -v D:/code:/app -d test:v1

多容器通信:
docker network create test-net
Docker-Compose.yaml

发布和部署:
docker login -u username
docker tag test:v1 username/test:v1
docker push username/test:v1
docker run -dp 8080:8080 username/test:v1




## nginx
Nginx是一个 轻量级/高性能的反向代理Web服务器，他实现非常高效的反向代理、负载平衡，他可以处理2-3万并发连接数，官方监测能支持5万并发，现在中国使用nginx网站用户有很多，例如：新浪、网易、 腾讯等。



## 正向代理, 反向代理
1. 正向代理

正向代理就是一个人发送一个请求直接就到达了目标的服务器

当用户想访问某一网址时，用户先访问代理服务器，然后由代理服务器向目标网址发送请求最终将数据返回代理服务器，最后代理服务器将数据返回给用户这一过程我们称之为正向代理。

2. 反向代理：
反方代理就是请求统一被Nginx接收，nginx反向代理服务器接收到之后，按照一定的规 则分发给了后端的业务处理服务器进行处理了

例如有三个nginx 1, 2, 3
通过内部负载均衡, 用户不清楚具体访问的哪一台服务器.



jenkins


## CICD:
CI/CD 可让持续自动化和持续监控贯穿于应用的整个生命周期（从集成和测试阶段，到交付和部署）。

1. CI
代码持续集成 CI (Continuous Integration)
例如: 
CI flow: dev branch --> pr -->  触发代码扫描, unit test, iq scan (pipeline )--> 没异常时合并到主分支.


2. CD
持续交付（Continuous delivery） 或者 持续部署（continuous deployment） 

持续部署: zip 
持续部署: zip --> nexus --> unzip --> nginx


## GCE
gold --> gold setup --> template --> mig/instance grounp --> vm


gke
Kubernetes


jira

Shell scripting

Ansible

Prometheus


Grafana:
Grafana是开源的度量分析和可视化工具，，可以通过将采集的数据查询然后可视化的展示，并实现报警
数据源: Prometheus





Github、JiRA、Kubernetes、Ansible、Shell scripting;
Data Dog、Prometheus、Splunk、ElasticSearch(弹性搜索)、Grafana;

