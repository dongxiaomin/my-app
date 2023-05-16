import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Dashboard from './features/dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { EditPostForm } from './features/posts/EditPostForm';

const container = document.getElementById('root')!;
const root = createRoot(container);

console.log('NODE_ENV', process.env.NODE_ENV)
console.log('BASE_ENV', process.env.BASE_ENV)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/posts/:postId" element={<SinglePostPage />}></Route>
            <Route path="/editPost/:postId" element={<EditPostForm />}></Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
