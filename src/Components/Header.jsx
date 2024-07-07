import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg headernav ">
    <div className="container">
      <ul className='headerul'>
    <li><a className="navbar-brand d-flex justify-content-center align-items-center p-0 m-0" href="https://www.guvi.in/">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tHOnXDUptL9OhwTjuPWgG6LKWXAxilHcbg&s" alt="Logo" width="50" height="50" class="d-inline-block align-text-top" />
      <h5 className='m-1 logotext'>GUVI</h5>
      </a></li>
      <li><div className="vr m-1 "></div></li>
      <li>  <h4 className='m-1 blog'>Blog</h4></li>
    <li><form className="d-flex " role="search">
          <input className="header-input me-2 fa fa-search" type="search" placeholder="What do you want to read? " aria-label="Search" />
          
        </form></li>
      
        </ul>
        <a className='text-success text-decoration-none fw-bold fs-5' href='https://www.guvi.in/custom-sign-in'>
         Sign In
        </a>
     
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <li>
          <form className="d-flex" role="search">
          <input className=" me-2" type="search" placeholder="Search" aria-label="Search" />
          
        </form>
        </li>
           
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul> */}
        
      </div>
    
  </nav>
  )
}

export default Header