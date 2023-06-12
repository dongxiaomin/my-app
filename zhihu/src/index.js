import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>zhihu</div>
);

// mock data
// /subscriptions/recommended_collections
// /news/latest

fetch('/jian/subscriptions/recommended_collections')
  .then(response => response.json())
  .then(value => {
    console.log(value);
  })

fetch('/zhi/news/latest')
  .then(response => response.json())
  .then(value => {
    console.log(value);
  })