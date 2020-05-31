import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Menu, Popover } from "antd";
import { connect } from "react-redux";
import "./Sidebar.scss";
import { FaUserCircle, FaNewspaper } from "react-icons/fa";
import { userLoggedOutAction } from "../reducers/actions/userActions";

const Sidebar = (props) => {
  const menuItems = [
    {
      name: "Posts",
      link: "/",
      icon: <FaNewspaper />
    },
  ];

  const { history, user } = props;

  let indexSelected = menuItems.findIndex((item) => history.location.pathname === item.link);
  let selected = indexSelected !== -1 ? `menu_${menuItems[indexSelected].name}` : "";

  return (
    <Menu theme="light" className="sidebar" mode="horizontal" defaultSelectedKeys={[selected]}>
      {menuItems.map((menu) => {
        const { name, link, icon } = menu;
        return (
          <Menu.Item key={`menu_${name}`}>
            <Link to={link}>
              {icon}
              <span>{name}</span>
            </Link>
          </Menu.Item>
        );
      })}
      <div className="uuid">
        <Popover placement="bottomRight" title={"Your ID"} content={user.clientId}>
          <FaUserCircle />
        </Popover>
      </div>
    </Menu>
  );
};

const mapStateToProps = (appState) => ({
  user: appState.user,
  common: appState.common,
});
export default withRouter(connect(mapStateToProps, { userLoggedOutAction })(Sidebar));
