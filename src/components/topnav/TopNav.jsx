import React from "react";

import "../topnav/topnav.css";
import DropDown from "../dropdown/DropDown";
import { Link } from "react-router-dom";
import notifications from "../../assets/JsonData/notification.json";
import user_image from '../../assets/images/HeroCode.png'
import user_menu from '../../assets/JsonData/user_menus.json'


const curr_user = {
  display_name: 'Anderson Vera',
  image: user_image
}

const renderUserToggle = (user) =>(
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt=""></img>
    </div>
    <div className="topnav__right-user__name">
      {user.display_name}
    </div>
  </div>
)

const renderUserName = (item, index)=>(
  <Link to='/' key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
)

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input placeholder="Search here..."></input>
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <DropDown 
            customToggle={()=> renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index)=>renderUserName(item,index)} />
        </div>
        <div className="topnav__right-item">
          <DropDown 
            icon="bx bx-bell" 
            badge="12" 
            contentData={notifications}
            renderItems={(item, index)=>renderNotificationItem(item, index)}
            renderFooter = {()=><Link to='/'>View All</Link>}

          />
        </div>
        <div className="topnav__right-item">
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default TopNav;


