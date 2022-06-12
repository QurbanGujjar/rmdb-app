import React from "react";
import { MDBAnimation, MDBIcon } from "mdbreact";
import "./sideNav.css";

const SideNav = ({showLink}) => {

  return (
    <div className='sideNav shadow '>
      <MDBAnimation type='bounce'>
        <nav id='sidenav-1' className='sidenav'>
          <a className='ripple d-flex justify-content-center py-4' href='#!'>
            <img
              id='MDB-logo'
              src='https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.webp'
              alt='MDB Logo'
              draggable='false'
            />
          </a>
<hr />
          <div className='profileItem item' onClick={()=>showLink('profile')}>
            <MDBIcon className='icon' fas icon='ad' />
            <p>User Profile</p>
          </div>
          <div className='profileItem item' onClick={()=>showLink('basic')}>
            <MDBIcon className='icon' fas icon='ad' />
            <p>Basic Detail</p>
          </div>
          <div className='profileItem item' onClick={()=>showLink('contact')}>
            <MDBIcon className='icon' fas icon='ad' />
            <p>Contact Detail</p>
          </div>
          <div className='profileItem item'onClick={()=>showLink('other')}>
            <MDBIcon className='icon' fas icon='ad' />
            <p>Other Detail</p>
          </div>
          <div className='profileItem item'onClick={()=>showLink('attorney')}>
            <MDBIcon className='icon' fas icon='ad' />
            <p>Attorney Detail</p>
          </div>
          <div className='profileItem item'onClick={()=>showLink('nominee')}>
            <MDBIcon className='icon' fas icon='ad' />
            <p>Nominee Detail</p>
          </div>
          <div className='profileItem item'onClick={()=>showLink('term&conditions')}>
            <MDBIcon className='icon' fas icon='ad' />
            <p>term & conditions</p>
          </div>
          <div className='profileItem item'onClick= {()=> showLink('pdf')}>
            <MDBIcon className='icon' fas icon='ad' />
            <p>Get PDF</p>
          </div>
        </nav>
      </MDBAnimation>
    </div>
  );
};

export default SideNav;
