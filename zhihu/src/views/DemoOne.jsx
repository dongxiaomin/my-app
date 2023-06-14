import PropTypes from 'prop-types';
import React from 'react';

const DemoOne = (props) => {
    // console.log(Object.isFrozen(`isFrozen----${props}`));
    // console.log(Object.isSealed(`isSealed----${props}`));
    // console.log(Object.isExtensible(`isExtensible----${props}`));
    let { title, children } = props;
    let headerSolt = [], footerSolt = [], defalutSolt = [];

    children = React.Children.toArray(children); // console.log(React.Children.toArray(children));

    children.forEach(child => {
        // 传递进来的插槽信息，都是编译为virtua1DOM后传递进来的「而不是传递的标签
        let { solt } = child.props;
        if (solt == 'header') {
            headerSolt.push(child)
        } else if (solt == 'footer') {
            footerSolt.push(child)
        } else {
            defalutSolt.push(child)
        }
    });
    return (
        <div>
            {headerSolt}
            <div>{title}</div>
            {footerSolt}
        </div>
    )
}

DemoOne.defaultProps = {
    x: 0
};

DemoOne.propTypes = {
    x: PropTypes.number
}

export default DemoOne;


