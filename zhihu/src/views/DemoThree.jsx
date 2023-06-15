import React from 'react';

class DemoThree extends React.Component {
    box3 = React.createRef();
    handle1() { //DemoThree.prototype => DemoThree.prototype.handle1 = function handle1(){}
         console.log(this); //undefined 
    };
    handle2(x, y) {
        console.log(this, x, y); //实例,10,20
    };
    handle3 = (e) => {
        console.log(this); //实例
        console.log(e); //实例
    }
    render() {
        return <div>
            <h2 ref='titleBox'>{'test ref'}</h2>
            <h2 ref={x => this.box2 = x}>友情提示</h2>
            <h2 ref={this.box3}>友情提示</h2>

            <br />
            <br />
            <br />
            <button onClick={this.handle1}>handle1</button>
            <button onClick={this.handle2.bind(this, 10, 20)}>handle2</button>
            <button onClick={this.handle3}>handle3</button>
        </div>
    }
    componentDidMount() {
        // console.log('第一次渲染完毕')
        // console.log(this.refs.titleBox)
        // console.log(this.box2)
        // console.log(this.box3.current)
    }
}

export default DemoThree;


let obj = {
    z: 20
};

let objA = {
    x: 10,
    y: obj,
    arr: [10, 20, 30]
};

obj.n = 100;
let objB = {
    x: 10,
    y: obj,
    arr: [10, 20, 30]
};

//检测是否为对象
const isObject = (obj) => {
    return obj !== null && /^(object|function)$/.test(typeof obj);
};

const shallowEqual = () => {
    if (isObject(objA) || isObject(objB)) return false;
    if (objA === objB) return true;
    //先比较成员数量
    let keyA = Reflect.ownKeys(objA),
        keyB = Reflect.ownKeys(objB);
    if (keyA.length == keyB.length) return false;
    //数量一致, 再逐一比较内部成员 (浅比较: 只比第一级)
    for (let i = 0; i < keyA.length; i++) {
        let key = keyA[i];
        // 如果一个对象中有这个成员, 一个对象中没有; 戓者都有这个成员,但成员值不一样; 都应判定不相同.
        if (!objB.hasOwnProperty(key) || !Object.is(objA[key], objB[key])) {
            return false;;
        }
    }
    return true;
};

console.log(shallowEqual(objA, objB));