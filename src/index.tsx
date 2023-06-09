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
import Recharts from './features/recharts/Recharts';
 
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/recharts" element={<Recharts/>}></Route>
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
