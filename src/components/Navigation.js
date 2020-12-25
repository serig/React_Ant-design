import React, { Component } from 'react';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class Navigation extends Component {

    state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };


    render() {
        return (
            <aside>
                <Menu
                    theme='light'
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline" 
                    >
                <Menu.Item key="1" icon={<ShoppingCartOutlined />}>
                    Panier
                </Menu.Item>
                <Menu.Item key="2" icon={<HomeOutlined />}>
                    Home
                </Menu.Item>
                <Menu.Item key="3" icon={<InfoCircleOutlined />}>
                    About
                </Menu.Item>
                <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="Nos Produits">
                    <Menu.Item key="5">Moutons</Menu.Item>
                    <Menu.Item key="6">Agneaux</Menu.Item>
                    <Menu.Item key="7">Boeufs</Menu.Item>
                    <Menu.Item key="8">Veaux</Menu.Item>
                    <Menu.Item key="8">Divers</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Réseaux Sociaux">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu>
                </Menu> 
            </aside>
        )
    }
}
