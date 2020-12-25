import React, { Component } from 'react';
import Header1 from './components/Header';
import Footer1 from "./components/Footer";
import About from './components/About';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import './App.css';

import  styled  from 'styled-components';
import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;



const StyleHead = styled.header`
  background:linear-gradient(135deg,#442e07 0%,#f9dfaffc 100%)!important;
  color:#fff !important;
  border-bottom: 2px solid #364d79;
`
const StyleFoot = styled.footer`
  background:linear-gradient(135deg, #442e07 0%, #f9dfaffc 100%) !important;
  border-top: 2px solid #364d79;
  color:#fff !important;
  padding: 0 ;
`
const Stylesider = styled.aside`
   background:linear-gradient(135deg, #442e07 0%, #f9dfaffc 100%)!important;
   padding: 20px 30px;
`
const footer = {
  background:'linear-gradient(135deg, #442e07 0%, #f9dfaffc 100%) !important',
  color:'#fff !important'

}
export class App extends Component {
  render() {
    return (
      <Layout>
        
        <Header>
        <StyleHead>
        
        <Header1  />
        </StyleHead>
        </Header>
       
        
        <Layout>
          
         <Stylesider>
          <Sider width={200} className="site-layout-background" 
           breakpoint="md"
           collapsedWidth="0"
           onBreakpoint={broken => {
           console.log(broken);
         }}
         onCollapse={(collapsed, type) => {
           console.log(collapsed, type);
         }}>
              <Navigation />
          </Sider>
          </Stylesider>
          
        
        
          <Content className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}>
        <MainContent />
        <About  />
        </Content>
        </Layout>
          <StyleFoot>
          <Footer style={footer}>
        <Footer1 />
        </Footer>
        </StyleFoot>
        
        </Layout>
      
      
    )
  }
}

export default App;