import React from 'react';
import "./Rightbar.css";
import { Users } from '../../dummyData';
import Online from "../online/Online"

export default function Rightbar({ user }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="assets/star.png" alt="" className="starImg" />
          <span className="eventText">
            Opening <b>Only Follower</b> Event
          </span>
        </div>
        <img src="assets/event.jpeg" alt="" className='eventImg'/>
        <h4 className="rightbar">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">Promotion</p>
        <img src="assets/promotion/promotion1.jpeg" alt="" className='rightbarPromotionImg'/>
        <p className='promotionName'>Shopping</p>
        <img src="assets/promotion/promotion2.jpeg" alt="" className='rightbarPromotionImg'/>
        <p className='promotionName'>Car Shop</p>
        <img src="assets/promotion/promotion3.jpeg" alt="" className='rightbarPromotionImg'/>
        <p className='promotionName'>Bob Ltd</p>
        </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle">User Info</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">From: </span>
          <span className="rightbarInfoKey">Japn</span>
        </div>
        <h4 className="rightbarTitle">Your friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ken</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/2.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Bob</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/3.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/4.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mai</span>
          </div>
          <div className="rightbarFollowing">
            <img src={PUBLIC_FOLDER + "/person/5.jpeg"} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Mika</span>
          </div>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
