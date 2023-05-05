import React from 'react';
import { Layout, Space, Button } from 'antd';
import styles from './Dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import { PostsList } from '../posts/PostsList';
import { AddPostForm } from '../posts/AddPostForm';

const { Header, Content } = Layout;

const Dashboard = () => {
  const navigate = useNavigate();
  const handClick = () => {
    navigate(-1)
  };
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header className={styles.header}>平台</Header>
        <Layout>
          <Content className={styles.contentStyle}>
            <Button onClick={handClick}>Return to the previous page</Button> 
            <AddPostForm />
            <PostsList />
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
};

export default Dashboard;