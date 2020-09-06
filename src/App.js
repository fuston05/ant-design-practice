import React from 'react';
import './App.less';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Content, Header, Footer } = Layout;

const headerStyle= {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

function App() {
  return (
    <Layout style={{ height: '100vh' }} className='layout'>
      <Header style={headerStyle}>
        <div className='logo'>Antd</div>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'>Nav 1</Menu.Item>
          <Menu.Item key='2'>Nav 2</Menu.Item>
          <Menu.Item key='3'>Nav 3</Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className='site-layout-content'>Content</div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    </Layout>
  );
}

export default App;
