import PropTypes from 'prop-types';
import React from 'react';

class DemoTwo extends React.Component {
    // static defaultProps = {

    // };
    // static PropTypes = {

    // };
    state = {
        supNum: 20,
        oppNum: 10,
    };

    render() {
        // console.log('render');
        let { title } = this.props,
            { supNum, oppNum } = this.state;
        return <div>
            <div>
                <h2>{title}</h2>
                <span>{supNum + oppNum}</span>
            </div>
            <div>
                <p>支持人数: {supNum}</p>
                <p>反对人数: {oppNum}</p>
            </div>
            <div>
                <button onClick={() => {
                    this.setState({
                        supNum: supNum + 1
                    })
                }}>支持</button>
                <button onClick={() => {
                    this.state.oppNum++;
                    this.forceUpdate();
                }}>反对</button>
            </div>
        </div>
    }
    UNSAFE_componentWillMount(){
        // console.log('第一次渲染前')
    }
    componentDidMount(){
        // console.log('第一次渲染完毕')
    }
}

export default DemoTwo;
// class Parent {
//     //new的时候，执行的构造函数「可写可不写：需要接受传递进来的实参信息，才需要设置constructor」
//     constructor(x, y) {
//         //this->创建的安例
//         this.total = x + y;
//         console.log(x, y)
//     }
//     num = 200;//等价于 this.num=2000 给实例,在这是私有属性
//     getNum = () => {
//         //箭头函数没有自己的this, 所用到的this是宿主杯境中的
//         console.log(this); //this->当前创建的安例
//     };
//     //===========
//     sum() {
//         //类似于 sum=function sum(){} 不是箭关函数
//         //它是给Parent.prototype上没置公共的方法「sum函数是不可枚挙的」
//     }
//     //===========
//     //把构造函数当做一个普通対象，为其没置静恋的私有属性方法 Parent.xxx
//     static avg = 1000;
//     static average() {

//     }
// }
// Parent.prototype.y = 2000;//在外部手功枸造函数原生上没置公共的属性

// let p = new Parent(10, 20);
// console.log(p);
// console.dir(Parent);
