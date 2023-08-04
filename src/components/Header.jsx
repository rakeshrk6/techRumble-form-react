import React from 'react'
import "../App.css";
function Header() {
  return (
    <nav className='navbar'>
        <div className='container'>
        <h1 className='logo'>Form</h1>
            <ul className='nav-list'>
                <li className='list-item'>
                <a href="#home">Home</a>
                </li>
                <li className='list-item'>
                <a href="#contact">Contact</a>
                </li>
                <li className='list-item'>
                <a href="#services">Services</a>
                </li>
                <li className='list-item'>
                <a href="#about">About Us</a>
                </li>
            </ul>
       
       </div>
       <i class="uil uil-bars menu-btn"></i>
    </nav>
  )
}

export default Header