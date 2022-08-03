import React from 'react'
import {Link} from 'react-router-dom'
import userImg from '../../images/userImg.jpg'
import './header.scss'

 const Header = () => {
  return (
    <>
      <div className="header">
        <Link to='/'>
          <div className="logo">Movie App</div>
        </Link>
        <div className="user_image">
          <img src={userImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default Header