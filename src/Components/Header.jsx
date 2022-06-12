import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Header = ({ setSideNav, sideNav }) => {
  const navigate = useNavigate();

  const handleSideNav = () => {
    setSideNav(!sideNav);
  };
  const logout = () => {
    // console.log("LogOut");
    localStorage.removeItem('token')
    window.location.reload(false);
    navigate('/login')
  };
  const handleSearch = () => {};
  return (
    <header>
      <nav
        id='main-navbar'
        className='navbar navbar-expand-lg navbar-light bg-white fixed-top'
      >
        <div className='container-fluid'>
          <button
            data-mdb-toggle='sidenav'
            data-mdb-target='#sidenav-1'
            className='btn shadow-0 '
            aria-controls='#sidenav-1'
            aria-haspopup='true'
            onClick={handleSideNav}
          >
            <i className='fas fa-bars fa-lg'></i>
          </button>
          <form className='d-none d-md-flex input-group w-auto my-auto'>
            <input
              autoComplete='off'
              type='search'
              className='form-control rounded'
              onChange={handleSearch}
              placeholder='Search (ctrl + "/" to focus)'
              style={{ minWidth: "225px" }}
            />
            <span className='input-group-text border-0'>
              <i className='fas fa-search'></i>
            </span>
          </form>
          <ul className='navbar-nav ms-auto d-flex flex-row'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-mdb-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='fas fa-bell'></i>
                <span className='badge rounded-pill badge-notification bg-danger'>
                  1
                </span>
              </a>
              {/* <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Some news</a></li>
            <li><a className="dropdown-item" href="#">Another news</a></li>
            <li>
              <a className="dropdown-item" href="#">Something else here</a>
            </li>
          </ul> */}
            </li>
            <li className='nav-item'>
              <a className='nav-link me-3 me-lg-0' href='#'>
                <i className='fas fa-fill-drip'></i>
              </a>
            </li>
            <li className='nav-item me-3 me-lg-0'>
              <a className='nav-link' href='#'>
                <i className='fab fa-github'></i>
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow'
                href='#'
                id='navbarDropdown'
                role='button'
                data-mdb-toggle='dropdown'
                aria-expanded='false'
              >
                <i className='flag-united-kingdom flag m-0'></i>
              </a>


            </li>
            <li
              className='nav-item dropdown'
              type='button'
              id='dropdownMenuButton'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              <a
                className='nav-link dropdown-toggle hidden-arrow d-flex align-items-center'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-mdb-toggle='dropdown'
                aria-expanded='false'
              >
                <img
                  src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp'
                  className='rounded-circle'
                  height='22'
                  alt='Avatar'
                  loading='lazy'
                />
              </a>
              {/* <ul
                className='dropdown-menu dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <a href="/login"  className='dropdown-item' onClick={logout}></a>
                  Logout
                </li>
              </ul> */}
            </li>
          </ul>
<button onClick={logout}>logout</button>

        </div>
      </nav>
    </header>
  );
};

export default Header;
