
const DemoOne = (props) => {
    // console.log(Object.isFrozen(`isFrozen----${props}`));
    // console.log(Object.isSealed(`isSealed----${props}`));
    // console.log(Object.isExtensible(`isExtensible----${props}`));
    let { title, x } = props;
    return (
        <div>{title} {x}</div>
    )
}

DemoOne.defaultProps = {
    x: 0
};

export default DemoOne;
