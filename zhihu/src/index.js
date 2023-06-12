import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';
import DemoOne from './views/DemoOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <div>zhihu</div>
  <>
    <DemoOne title='我是标题' x={1}/>
    <DemoOne title='我是标题2' />
  </>
);

