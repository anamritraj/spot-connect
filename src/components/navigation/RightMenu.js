import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="profile">
          <Link to="/profile">
            <Icon type="user" /> Profile
          </Link>
        </Menu.Item>
        <SubMenu
          title={
            <span>
              <Icon type="setting" /> Account
            </span>
          }
        >
          <Menu.Item key="setting:1">
            <Link to="/data">
              <Icon type="hdd" />
              Your Data
            </Link>
          </Menu.Item>
          <Menu.Item key="setting:2">
            <Link to="/preferences">
              <Icon type="tool" />
              Preferences
            </Link>
          </Menu.Item>
          <Menu.Item key="setting:3">
            <Link to="/logout">
              <Icon type="logout" />
              Logout
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default RightMenu;
