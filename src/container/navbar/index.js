import React, {Fragment} from "react";
import { links } from "../../root.helper.js";
import { Link } from "@reach/router";
import '../../index.css'
import {Menu, Button} from 'antd';

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultOpenItemIndex: 'top4'
    }
  }

  autoGenerateNavItem(itemlinks) {
    let itemOptons = [];
    if (!itemlinks.type) {
      return;
    } else if (itemlinks.type === "toplevel") {
      itemOptons.push(
        <Menu.Item key={itemlinks.index} icon={this.setItemIcon(itemlinks.icon)} key={itemlinks.index}>
            <Link key={itemlinks.href} className="p-6" to={itemlinks.href} key={itemlinks.index}>
              {itemlinks.name}
            </Link>
        </Menu.Item>
      )
    } else {
      itemOptons.push(
        <SubMenu key={itemlinks.index} icon={<MailOutlined />} title={itemlinks.name} key={itemlinks.index}>
        {itemlinks["subItem"].map((seclink) => {
            return (
              <Menu.Item key={seclink.secindex} key={itemlinks.seclink}>{seclink.secName}</Menu.Item>
            )
        })}
      </SubMenu>
      );
  
    }
    return itemOptons;
  }

    setItemIcon(iconName) {
      let icon = <ContainerOutlined />;
      switch(iconName) {
        case 'AppstoreOutlined':
          icon =  <AppstoreOutlined />;
          break;
        case 'PieChartOutlined':
          icon = <PieChartOutlined />;
          break;
        case 'MenuFoldOutlined':
          icon = <MenuFoldOutlined />;
          break;
        case "MailOutlined":
          icon = <MailOutlined />
          break;
        default:
         return icon;
      }
      return icon;
    }
  render() {
    return(
      <Fragment>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={[this.state.defaultOpenItemIndex]}
          mode="inline"
          theme="dark"
        >
          {links.map((link) => {
               return this.autoGenerateNavItem(link);
          })}
        </Menu>
      </Fragment>
    )
  }

}

