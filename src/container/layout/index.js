import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Navbar from '../navbar/index.js'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default class LayoutGuide extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapsed: false,
      }
  }
  rootPath() {

  }
  onCollapse (collapsed){
    const dom = document.getElementById("containerPanel");
    this.setState({ collapsed },()=>{
      if (collapsed) {
          setTimeout(function(){
            dom.style.marginLeft = '80px';
          }, 220)
          
      } else {
          dom.style.marginLeft = '200px';
      }
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse.bind(this)}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['top4']} mode="inline">
        <Navbar />
      </Menu>
      </Sider>
      </Layout>
    );
  }
}
