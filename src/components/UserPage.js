import React, { useEffect } from 'react'
import logo from '../logo.svg'
import { Link, Outlet } from 'react-router-dom'
import userService from '../services/user'

function UserPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  const pathname = window.location.pathname;

  const toggleActiveTab = (e) => {
    const tabList = ['nav-profile', 'nav-options']
    const className = 'active'
    const clicked = document.getElementById(e.target.id)
    if (clicked.classList.contains(className)) {
      clicked.classList.remove(className)
    } else {
      clicked.classList.add(className)
    }
    tabList.forEach(tabId => {
      if (tabId !== clicked.id) {
        document.getElementById(tabId).classList.remove(className)
      }
    });
  }

  return (
    <main id='User'>
      <div className='user-header'>
        <div className='user-avatar'>
          {user.avatarUrl ? <img src={user.avatarUrl} alt="avatar" /> : <img src={logo} alt="avatar" />}
        </div>
        <div className='user-name'>
          {user.displayName || user.name}
        </div>
      </div>
      <div className='user-body'>
        <nav className='user-nav'>
          <Link className={pathname === '/home/user/profile' ? 'nav active' : 'nav'} id='nav-profile' to='profile' onClick={toggleActiveTab}>
            个人资料
          </Link>
          <Link className={pathname === '/home/user/options' ? 'nav active' : 'nav'} id='nav-options' to='options' onClick={toggleActiveTab}>
            安全设置
          </Link>
        </nav>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default UserPage