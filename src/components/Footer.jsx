import React from 'react'
import "../App.css";

function Footer() {
    const currYear = new Date().getFullYear();
  return (
    <div className='footer'>
        <h2>Made with <span>❤</span> by R K</h2>
        <h3>Copyright © {currYear}. All rights are reserved</h3>
    </div>
  )
}

export default Footer