import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const allSwitch=false
const Navbar = ({mode,setMode}) => {
  

 const handleMode=(e)=>{
  console.log(e.target.checked);
  const switches = document.querySelectorAll('.form-check-input');
  switches.forEach(function (otherSwitch) {
    if (otherSwitch !== e.target) {
      console.log(otherSwitch);
      otherSwitch.checked = false;
    }
   
  });
  if(e.target.checked)
  setMode(e.target.id.toLowerCase())
  else
    setMode('light')
  
 
 }


  return (
      <nav className={`navbar navbar-expand-lg ${mode=='dark'?'bg-dark navbar-dark': mode=='red'?'bg-danger':mode=='green'?'bg-success':'bg-light'}`}>
      
    <div className="container-fluid">
      <a className="navbar-brand" href="/">TextUtils</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-disabled="true" href='/'>Contact</a>
          </li>
        </ul>
        <div className="form-check form-switch mx-4" >
        <input className="form-check-input" type="checkbox" role="switch" onClick={handleMode} id="green"/>
        <label className={`form-check-label text-light ${mode!=='dark' && 'text-dark'}`} for="green">Green</label>
      </div>
      <div className="form-check form-switch mx-4" >
        <input className="form-check-input" type="checkbox" role="switch" onClick={handleMode} id="red"/>
        <label className={`form-check-label text-light ${mode!=='dark' && 'text-dark'}`} for="red">Red</label>
      </div>
     
        <div className="form-check form-switch mx-4" >
        <input className="form-check-input" type="checkbox" role="switch" onClick={handleMode} id="dark"/>
        <label className={`form-check-label text-light ${mode!=='dark' && 'text-dark'}`} for="dark">Dark</label>
      </div>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={title: PropTypes.string}
export default Navbar