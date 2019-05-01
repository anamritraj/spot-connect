import React, { Component } from "react";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="profile">
          <a href="">
            <Icon type="user" /> Profile
          </a>
        </Menu.Item>
        <SubMenu
          title={
            <span>
              <Icon type="setting" /> Account
            </span>
          }
        >
          <Menu.Item key="setting:1">
            <Icon type="hdd" />
            Your Data
          </Menu.Item>
          <Menu.Item key="setting:2">
            <Icon type="tool" />
            Preferences
          </Menu.Item>
          <Menu.Item key="setting:3">
            <Icon type="logout" />
            Logout
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default RightMenu;
