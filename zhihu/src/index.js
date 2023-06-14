import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';
import DemoOne from './views/DemoOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <div>zhihu</div>
  <>
    <DemoOne title='我是标题1' x={1}>
      <div solt='footer'>2</div>
      <div solt='header'>1</div>
    </DemoOne>
    {/* <DemoOne title='我是标题2'>
      <div>1</div>
    </DemoOne>
    <DemoOne title='我是标题3'>
    </DemoOne> */}
  </>
);

