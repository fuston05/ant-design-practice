import React from 'react';
import './App.less';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Content, Header, Footer } = Layout;
const logoColor = @logoColor;

const headerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const siteContStyle = {
  background: '#fff',
  padding: '24px',
  minHeight: '280px'
}

const logoStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '120px',
  height: '31px',
  background: 'rgba(255, 255, 255, 0.2)',
  margin: '0 24px 0 0',
}

function App() {
  return (
    <Layout style={{ height: '100vh' }} className='layout'>
      <Header style={headerStyle}>

        <div style= {logoStyle}>Antd</div>

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
        <div className='site-layout-content' style={siteContStyle}>Content</div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    </Layout>
  );
}

export default App;
