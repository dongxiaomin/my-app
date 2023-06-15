import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';
import DemoOne from './views/DemoOne';
import DemoTwo from './views/DemoTwo';
import DemoThree from './views/DemoThree';
// import FastClick from 'fastclick';

// FastClick.attach(document.body);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <div>zhihu</div>
  <>
    <DemoOne title='我是标题1' x={1}>
      <div solt='footer'>2</div>
      <div solt='header'>1</div>
    </DemoOne>
    <DemoTwo title='投票'></DemoTwo>
    <DemoThree></DemoThree>
  </>
);

