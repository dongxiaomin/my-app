### test 扩展
参考: https://github.com/li-jia-nan/my-blog/issues/16

前端自动化测试
1. 一个优秀的自动化测试框架，在以下三个方面应该比较突出：

* 性能好
* 功能齐全
* 易用性很好

2. Jest 优点

速度快（可以自动监测修改过的代码，不会重复测试）
* API 简单、数量少
* 易配置
* 隔离性好
* 监控模式
* IDE 整合（比如vs code）
* Snapshot（快照测试）
* 多项目并行
* 覆盖率
* Mock 丰富
* 对新技术支持度好

3. 实战样例
(1)
```
// math.js

function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

module.exports = { add, minus, multi };
```

```
// math.test.js

const { add, minus, multi } = require("./math");

test("测试加法 3 + 3", () => {
  expect(add(3, 3)).toBe(6);
});

test("测试减法 3 - 3", () => {
  expect(minus(3, 3)).toBe(0);
});

test("测试乘法 3 * 3", () => {
  expect(multi(3, 3)).toBe(9);
});
```

(2)
toBe：测试两个对象的值是否相等，类似于 js 中的 === 运算符
```
// toBe

test("测试加法交换律", () => {
  for (let x = 0; x <= 10; x++) {
    for (let y = 0; y <= 10; y++) {
      expect(x + y).toBe(y + x);
    }
  }
});
```

(3)
toEqual：测试两个对象的原始值是否相等，只检查内容，不检查引用
```
// toEqual

const can1 = { value: "hello" };
const can2 = { value: "hello" };

test("测试 can1 和 can2 的内容是否相等", () => {
  expect(can1).toEqual(can2);
});
```

(4)
not：取反匹配器，相当于 js 中的 ! 运算符
```
// not

test("测试值是否不为 aaa", () => {
  expect("hello").not.toBe("aaa");
});

test("测试值是否不为 null", () => {
  expect([]).not.toBeNull();
});

test("测试值是否不为 undefined", () => {
  expect({}).not.toBeUndefined();
});

```

(5)
toThrow：测试函数在调用时是否有异常抛出
```
// toThrow

const fn1 = () => {
  console.log("hello");
};

const fn2 = () => {
  throw new Error("this is a new err");
};

test("测试 fn1、fn2 调用时是否有异常", () => {
  expect(fn1).toThrow(); // 不通过
  expect(fn2).toThrow(); // 通过
});
```

(6)
请求
```js
import axios from "axios";

export const getData = () => {
  return axios.get("/demo.json");
};
```

测试成功的返回值：
```test
import { getData } from "./index";

test("测试 getData 的返回值为 { success: true }", () => {
  return getData().then(res => {
    expect(res.data).toEqual({ success: true });
  });
});
```

测试失败的返回值：
```
import { getData } from "./index";

test("测试 getData 的返回值包含 404", () => {
  return getData().catch(err => {
    expect.assertions(1);
    expect(err.toString()).toMatch("404");
  });
});
```

Async、Await 和 .resolves、.rejects 结合使用:
在这种情况下，async 和 await 与 promise 示例使用的逻辑是相同的语法糖。
```
import { getData } from "./index";

test("测试 getData 返回成功", async () => {
  await expect(getData()).resolves.toEqual({ success: true });
});

test("测试 getData 返回失败", async () => {
  await expect(getData()).rejects.toMatch("404");
});

```

4. 优化: 添加代码测试覆盖率
```
npm jest --coverage
```

也可以将如下代码添加到 `package.json` 中, 然后执行```npm run coverage```
```
"scripts": {
  "test": "jest",
  "coverage": "jest --coverage"
},
```

5. `Jest`钩子函数及作用域
默认情况下，`beforeAll`和`afterAll`应用于文件中的每个测试用例。

实际上，还可以使用describe方法将测试用例进行分组。当它们位于describe中时，beforeAll和afterAll只应用于当前分组中的测试用例。

```
beforeAll：在所有测试用例执行之前调用（调用一次）
afterAll：在所有测试用例执行之后调用（调用一次）
beforeEach：在每个测试用例执行之前调用（调用多次）
afterEach：在每个测试用例执行之后调用（调用多次）
```

```
// index.test.js

describe("测试分组1", () => {
  beforeAll(() => {
    console.log("测试分组1 - beforeAll");
  });
  afterAll(() => {
    console.log("测试分组1 - afterAll");
  });
  test("测试", () => {
    console.log("测试分组1 测试");
    expect(1 + 1).toBe(2);
  });
});

describe("测试分组2", () => {
  beforeAll(() => {
    console.log("测试分组2 - beforeAll");
  });
  afterAll(() => {
    console.log("测试分组2 - afterAll");
  });
  test("测试", () => {
    console.log("测试分组2 测试");
    expect(1 + 1).toBe(2);
  });
});
```
