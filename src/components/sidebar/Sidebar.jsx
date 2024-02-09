import React from 'react';
import "./Sidebar.css";
import { Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings } from "@mui/icons-material";
import Relatives from '../relatives/Relatives';
import { Users } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
              <span className="sidebarListItemText">Home</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">Seach</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon" />
            <span className="sidebarListItemText">Notifications</span>
          </li>
          <li className="sidebarListItem">
            <MessageRounded className="sidebarIcon" />
            <span className="sidebarListItemText">Message</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <Link to="/profile/kenbb" style={{textDecoration: "none", color: "black"}}>
              <span className="sidebarListItemText">Profile</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarListItemText">Settings</span>
          </li>
        </ul>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <Relatives user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
