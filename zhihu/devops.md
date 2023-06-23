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





## 0620

## pipeline的创建和流程
参考: https://juejin.cn/post/6844904015528984589#heading-8

1. ### Pipeline 介绍
简单来说，就是一套运行在 Jenkins 上的工作流框架，将原来独立运行于单个或者多个节点的任务连接起来，实现单个任务难以完成的复杂流程编排和可视化的工作.

Node：节点，一个 Node 就是一个 Jenkins 节点，Master 或者 Agent，是执行 Step 的具体运行环境，比如我们之前动态运行的 Jenkins Slave 就是一个 Node 节点

Stage：阶段，一个 Pipeline 可以划分为若干个 Stage，每个 Stage 代表一组操作，比如：Build、Test、Deploy，Stage 是一个逻辑分组的概念，可以跨多个 

NodeStep：步骤，Step 是最基本的操作单元，可以是打印一句话，也可以是构建一个 Docker 镜像，由各类 Jenkins 插件提供，比如命令：sh 'make'，就相当于我们平时 shell 终端中执行 make 命令一样。


2. ### 使用Pipeline好处:
* 代码:   Pipeline以代码的形式实现，通常被检入源代码控制，使团队能够编辑，审查和迭代其传送流程。
* 持久:   无论是计划内的还是计划外的服务器重启，Pipeline都是可恢复的。
* 可停止: Pipeline可接收交互式输入，以确定是否继续执行Pipeline。
* 多功能: Pipeline支持现实世界中复杂的持续交付要求。它支持fork/join、循环执行，并行执行任务的功能。
* 可扩展: Pipeline插件支持其DSL的自定义扩展，以及与其他插件集成的多个选项。


3. ### 配置Pipeline

注意：直接在 Jenkins 的 Web UI 界面中输入脚本运行

* 新建一个工作空间, 也可以以其他工作空间为模板来创建 (优点: 可以拷贝配置)
* 创建好后, 设置工作空间的源代码指向, 即 github url, branch, 脚本的文件目录


4. ### jenkins pipeline
官网基础介绍, 及pipeline语法流程
示例
```
pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000 -p 5000:5000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        ...
        stage('Deliver for development') {
            when {
                branch 'development' 
            }
            steps {
                sh './jenkins/scripts/deliver-for-development.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
        ...
    }
}
```

5. ### 编写流水线Jenkinsfile
```k8s.yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: jenkins-demo
spec:
  template:
    metadata:
      labels:
        app: jenkins-demo
    spec:
      containers:
      - image: devops-project/jenkins-demo:<BUILD_TAG>
        imagePullPolicy: IfNotPresent
        name: jenkins-demo
        env:
        - name: branch
          value: <BRANCH_NAME>

```

```
node {
  stage('Clone') {
        echo "1.Clone Stage"
        git url: "https://github.com/xxx"
        script {
          // 获取当前代码库最新提交的哈希值，并使用 --short 参数将其转换为短哈希值。 
          // trim() 函数用于删除获取到的哈希值中的空格
          // 目的: 在构建和部署过程中跟踪代码库的版本。
            build_tag = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
        }
    }
  stage('Test') {
      echo "2.Test Stage"
    }
  stage('Build') {
        echo "3.Build Docker Image Stage"
        //建一个名为 your-docker-hub/jenkins-demo 的Docker镜像，并使用 ${build_tag} 变量指定版本
        sh "docker build -t your-docker-hub/jenkins-demo:${build_tag} ."
    }
  stage('Push') {
        echo "4.Push Docker Image Stage"
        withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
            sh "docker login -u ${dockerHubUser} -p ${dockerHubPassword}"
            sh "docker push your-docker-hub/jenkins-demo:${build_tag}"
        }
    }
    stage('Deploy') {
        echo "5. Deploy Stage"
        // 在 setting 中配置
        def userInput = input(
            id: 'userInput',
            message: 'Choose a deploy environment',
            parameters: [
                [
                    $class: 'ChoiceParameterDefinition',
                    choices: "Dev\nQA\nProd",
                    name: 'Env'
                ]
            ]
        )
        echo "This is a deploy step to ${userInput}"

        sh "sed -i 's/<BUILD_TAG>/${build_tag}/' k8s.yaml"
        sh "sed -i 's/<BRANCH_NAME>/${env.BRANCH_NAME}/' k8s.yaml"
        if (userInput == "dev") {
            // deploy dev stuff
        } else if (userInput == "sit"){
            // deploy sit stuff
        } else {
            // deploy prod stuff
        }
        sh "kubectl apply -f k8s.yaml"
    }

}

```






## 0621

## 前端，后端等不同开发语言的部署；

1. 前提: nginx
Nginx 是一款轻量级的 Web 服务器。通常用在反向代理、负载均衡和 HTTP 缓存。
nginx在官网上安装完成后, 直接解压使用.

打开: nginx.conf文件, 重点关注如下代码:
```
{
  '''
  server {
        listen       80;
        server_name  localhost;

        location / {
            root   html;
            index  index.html index.htm;
   	 		}
    }
  '''
}
```

2. 前端: 
2.1 前端代码编写完成后, 通过webpack 生成一个dist静态目录.
2.2 连接一个实例, 把dist文件复制到实例中
2.3 部署 (修改ngin.conf)
```
cd /usr/local/nginx/conf
vim nginx.conf
```

```
location / {
  root /root/workspace/ruoyi-ui/dist;
  index index.html index.htm:
}
```

启动nginx:
```
cd /usr/local/sbin/
./nginx
```

2.4 浏览器通过实例ip 访问, 看是否能打开并正确加载前端页面


3. 后端: 
3.1 后端代码编写完成后, 通过 `mvn package`命令, 生成xxx.jia 包.
3.2 连接另一个实例, 把.jar包复制到实例中

后台运行jar包
```
nohup java -jar xxx.jar & 
```

4. 前后端合并测试
注: xxx为本实例的ip
```
{

  location / {
    root /root/workspace/dist;
    index index.html index.htm;
  }
  location /prod-api/ {
    proxy_set _header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_ header x-Forwarded-For $proxy_add x_forwarded_for;
    proxy_pass http://xxx:8080/;
  }
}
```

重新加载ui nginx配置:
```
/usr/local/nginx/sbin/nginx -s reload
```


5. 环境管理
有两种方法:
5.1 图形化界面配置:

5.2  代码示例与环境配置:
有string, text, booleanParam, choice, password, extendedChoice
```
parameters {
    string(name: 'PERSON', defaultValue: 'xxx', description: 'xxx')

    text(name: 'BIOGRAPHY', defaultValue: '', description: 'xx')

    booleanParam(name: 'TOGGLE', defaultValue: true, description: 'Toggle this value')

    choice(name: 'CHOICE', choices: ['One', 'Two', 'Three'], description: 'Pick something')

    password(name: 'PASSWORD', defaultValue: 'SECRET', description: 'Enter a password')

    extendedChoice(defaultValue: 'One,Two,Three', value: 'One,Two,Three', description: '', multiSelectDelimiter: ',', name: 'EXTENDEDCHOICE', quoteValue: false, type: 'PT_CHECKBOX', visibleItemCount: 15)
}

```

```
choice(name: 'CHOICE', choices: ['dev', 'sit', 'uat'], description: 'select env')
```

6. 数据库管理

## MySQL
是一个关系型数据库管理系统。

## MySQL下RDBMS的术语
数据库: 数据库是一些关联表的集合。.
数据表: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
列: 一列(数据元素) 包含了相同的数据, 例如邮政编码的数据。
行：一行（元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
冗余：存储两倍数据，冗余可以使系统速度更快。
主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
外键：外键用于关联两个表。
复合键：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。
索引：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。
参照完整性: 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性

## 使用 mysqladmin 创建数据库
```
mysqladmin -u root -p create test
```

## 使用 mysqladmin 删除数据库
```
mysqladmin -u root -p drop test
```

## 选择数据库
```
// 先连接数据库
> use W3CSCHOOL
```

## 数据类型
MySQL 支持所有标准 SQL 数值数据类型。

这些类型包括严格数值数据类型( INTEGER、SMALLINT、DECIMAL 和 NUMERIC )，以及近似数值数据类型( FLOAT、REAL 和 DOUBLE PRECISION )。

关键字 INT 是 INTEGER 的同义词，关键字 DEC 是 DECIMAL 的同义词。

BIT数据类型保存位字段值，并且支持 MyISAM、MEMORY、InnoDB 和 BDB 表。

作为 SQL 标准的扩展，MySQL 也支持整数类型 TINYINT、MEDIUMINT 和 BIGINT。下面的表显示了需要的每个整数类型的存储和范围。

##  创建数据表语法
```
CREATE TABLE table_name (column_name column_type);
```

```
CREATE TABLE IF NOT EXISTS tutorials_tbl(
   tutorial_id INT NOT NULL AUTO_INCREMENT,
   tutorial_title VARCHAR(100) NOT NULL,
   tutorial_author VARCHAR(40) NOT NULL,
   submission_date DATE,
   PRIMARY KEY ( tutorial_id )
);
```
实例解析：

如果你不想字段为 NULL 可以设置字段的属性为 NOT NULL， 在操作数据库时如果输入该字段的数据为NULL ，就会报错。
AUTO_INCREMENT定义列为自增的属性，一般用于主键，数值会自动加1。
PRIMARY KEY关键字用于定义列为主键。 您可以使用多列来定义主键，列间以逗号分隔。

## 删除数据表
```
DROP TABLE table_name ;
```

## 插入数据
向MySQL数据表插入数据通用的 INSERT INTO SQL语法：
```
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );

```

## 查询数据
```
SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[OFFSET M ][LIMIT N]
```

## where 子句
```
SELECT field1, field2,...fieldN FROM table_name1, table_name2...
[WHERE condition1 [AND [OR]] condition2.....
```

## UPDATE 查询
```
UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]
```

7. code 管理
7.1 引入.eslintrc.js 规范, 校验代码格式
首先安装eslint插件, 再做配置
```
module.exports = {
	root: true, // 当前配置为根配置，将不再从上级文件夹查找配置
	parser: "@babel/eslint-parser", // 采用 @babel/eslint-parser 作为语法解析器
	parserOptions: {
		requireConfigFile: false, // 禁用未检测到babel配置文件
		ecmaFeatures: {
			// 指定要使用其他那些语言对象
			jsx: true // 启用jsx语法
		},
		ecmaVersion: 9, // 指定使用的ECMAScript版本（2015-6,、2016-7、2017-8、2018-9、2019-10）
		sourceType: "module", // 指定来源的类型，有两种script或module
		babelOptions: {
			presets: ["@babel/preset-react"] // 对react语法的转换
		}
	},
	env: {
		browser: true, // 设置为所需检查的代码是在浏览器环境运行的
		es6: true, // 设置为所需检查的代码是nodejs环境运行的
		node: true // 设置所需检查代码为es6语法书写
	},
	extends: ["plugin:prettier/recommended", "plugin:react/recommended", "prettier"],
	plugins: ["react", "prettier"],
	rules: {
		"prettier/prettier": 2,
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off", // 只有开发环境可以使用console
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", // 只有开发环境可以使用debugger
		"accessor-pairs": 2, // 应同时设置setter和getter
		"arrow-spacing": [2, { before: true, after: true }], // 箭头间距
		"block-spacing": [2, "always"], // 块间距
		"brace-style": [2, "1tbs", { allowSingleLine: true }], // 大括号样式允许单行
		camelcase: [1, { properties: "always" }], // 为属性强制执行驼峰命名
		"comma-dangle": [2, "never"], // 逗号不使用悬挂
		...
		// 消除未使用的变量，函数和函数的参数
		// vars: 'all' 检查所有变量的使用情况，包括全局范围内的变量。这是默认设置。 args: 'after-used' 只有最后一个参数必须使用。例如，这允许您为函数使用两个命名参数，并且只要您使用第二个参数，ESLint 就不会警告您第一个参数。这是默认设置。
		"no-useless-call": 2, // 标记使用情况，Function.prototype.call()并且Function.prototype.apply()可以用正常的函数调用来替代
		"no-useless-computed-key": 2, // 禁止不必要地使用计算属性键
		"no-useless-constructor": 2, // 在不改变类的工作方式的情况下安全地移除的类构造函数
		"no-useless-escape": 0, // 禁用不必要的转义字符
		"no-whitespace-before-property": 2, // 如果对象的属性位于同一行上，不允许围绕点或在开头括号之前留出空白
		"no-with": 2, // 禁用with
		"no-var": 2, // 禁用var
		"one-var": [2, { initialized: "never" }], // 强制将变量声明为每个函数（对于var）或块（对于let和const）范围一起声明或单独声明。 initialized: 'never' 每个作用域要求多个变量声明用于初始化变量
		"operator-linebreak": [2, "after", { overrides: { "?": "before", ":": "before" } }], // 实施一致的换行
		"padded-blocks": [2, "never"], // 在块内强制执行一致的空行填充
		"prefer-destructuring": ["error", { object: false, array: false }], // 此规则强制使用解构而不是通过成员表达式访问属性。
		quotes: [2, "double", { avoidEscape: true, allowTemplateLiterals: true }], // avoidEscape: true 允许字符串使用单引号或双引号，只要字符串包含必须以其他方式转义的引号 ;"allowTemplateLiterals": true 允许字符串使用反引号
		radix: 2, // parseInt必须指定第二个参数
		semi: [0, "never"], // 不使用分号
		"semi-spacing": [2, { before: false, after: true }], // 强制分号间隔
		"space-before-blocks": [2, "always"], // 块必须至少有一个先前的空间
		"space-before-function-paren": [
			2,
			{
				anonymous: "always", // 用于匿名函数表达式（例如function () {}）
				named: "never", // 用于命名函数表达式（例如function foo () {}）
				asyncArrow: "always" // 用于异步箭头函数表达式（例如async () => {}）
			}
		],
		"space-in-parens": [2, "never"], // 禁止或要求（或）左边的一个或多个空格
		"space-infix-ops": 2, // 强制二元运算符左右各有一个空格
		"space-unary-ops": [2, { words: true, nonwords: false }], // words: true 如：new，delete，typeof，void，yield 左右必须有空格 // nonwords: false 一元运算符，如：-，+，--，++，!，!!左右不能有空格
		"spaced-comment": [2, "always", { markers: ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","] }], // 注释开始后，此规则将强制间距的一致性//或/*
		"template-curly-spacing": [2, "never"], // 不允许大括号内的空格
		"use-isnan": 2, // 禁止比较时使用NaN，只能用isNaN()
		"valid-typeof": 2, // 必须使用合法的typeof的值
		"wrap-iife": [2, "any"], // 立即执行函数表达式的小括号风格
		"yield-star-spacing": [2, "both"], // 强制执行*周围 yield*表达式的间距，两侧都必须有空格
		yoda: [2, "never"],
		"prefer-const": 2, // 使用let关键字声明的变量，但在初始分配后从未重新分配变量，应改为const声明
		"object-curly-spacing": [2, "always", { objectsInObjects: true }], // 不允许以对象元素开始和/或以对象元素结尾的对象的大括号内的间距
		"array-bracket-spacing": [2, "never"], // 不允许数组括号内的空格
		"react/jsx-uses-react": 1, // 防止React被错误地标记为未使用
		"react/jsx-uses-vars": 2, // 防止在JSX中使用的变量被错误地标记为未使用
		"react/react-in-jsx-scope": 0, // 关闭使用JSX时防止丢失React
		"react/prop-types": 0 // 关闭React组件中的props验证
	}
};
```

7.2 安装配置 commitlint
```
npm install @commitlint/cli @commitlint/config-conventional -D
```

在项目根目录创建`commitlint.config.js`文件
```
module.exports = {2
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build' // 打包
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}

```

添加另一个钩子pre-commit hook会在提交前被调用，并且可以按需指定是否要拒绝本次提交，命令如下：
```
npx husky add .husky/pre-commit "npx --no-install lint-staged --allow-empty"
```

在.husky目录下，会生成pre-commit文件，打开后添加如下代码：
```
#!/bin/sh 
. "$(dirname "$0")/_/husky.sh" 

# 这里就是唤醒lint-staged 
npx --no-install lint-staged --allow-empty

```