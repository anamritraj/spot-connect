import React, { Component } from "react";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="">Home</a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="">Contact Us</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default LeftMenu;
