import React from 'react'
// import "../public/index.html"

function Navbar() {
  return (
    <div className='font'>
      <nav className="navbar navbar-expand-lg  nav-background">
  <span className="navbar-brand ms-3 fs-3">Rohit</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ms-auto me-3">
      <li className="nav-item active nav-item-onhover">
        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item nav-item-onhover me-2">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item nav-item-onhover me-2">
        <a className="nav-link" href="#">work</a>
      </li>
      <li className="nav-item nav-item-onhover me-2">
        <a className="nav-link" href="#">Skils</a>
      </li>
      <li className="nav-item nav-item-onhover me-2">
        <a className="nav-link" href="#">Contact</a>
      </li>
      <li className="nav-item nav-item-onhover">
        <a className="nav-link" href="#">Resume</a>
      </li>
     </ul>
  </div>
</nav>

    </div>
  )
}

export default Navbar
