import React from 'react';
import './App.less';
import {Button, Layout} from 'antd';
const {Content, Header, Sider, Footer}= Layout;

function App() {
  return (
    <Layout className= 'mainCont' hasSider= 'true'>
      <Header>
        Ant Header
      </Header>
      <Layout>
        <Sider>
          <Content>
            <Button>Ant Button</Button>
            Main Content
          </Content>
          <Sider>
            SideBar
          </Sider>
        </Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
