import React from 'react';

class DemoThree extends React.Component {
    box3 = React.createRef();

    render() {
        return <div>
            <h2 ref='titleBox'>{'test ref'}</h2>
            <h2 ref={x => this.box2 =x}>友情提示</h2>
            <h2 ref={this.box3}>友情提示</h2>
        </div>
    }
    componentDidMount() {
        console.log('第一次渲染完毕')
        // console.log(this.refs.titleBox)
        // console.log(this.box2)
        console.log(this.box3.current)
    }
}

export default DemoThree;