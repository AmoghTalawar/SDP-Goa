import React, { useState } from 'react'
import './Navbar.scss'
import { useNavigate } from "react-router-dom";
import logo from "../../assets/sdm-logo.png"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"

function Navbar(props) {
  const navigate = useNavigate();

  const changeLogin = () => {
    navigate("/login");
  }

  const handleClick = (e) => {

    const currentClass = document.getElementsByClassName('naving');
    for (let i = 0; i < currentClass.length; i++) {
      currentClass[i].classList.remove('active');
    }
    currentClass[e].classList.add('active');
  }



  return (
    <div className='navbar-div'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand-section">
            <h2 className="navbar-title">HOPE RECOVERY CENTER</h2>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-content">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" onClick={() => { navigate('/about'); handleClick(0); }}>About</a>
                </li>
              </ul>

              <div className="navbar-actions">
                <LanguageSwitcher />
                <button className="btn btn-register" type="submit" onClick={changeLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
