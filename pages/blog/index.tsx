import React from 'react'
import Navbar from './navbar'
import Home from './home'
import About from './about'
import Work from './work'
import Card from './card'
import Technicalskill from './technicalskill'
import Contact from './contact'

function blog() {
  return (
    <div>
      <Navbar/>
      <div className=' '>
      <Home/>
    </div>
    <div className=''><About/></div>
   <div>
    <Work/>
   </div>
   <div className=''><Card/><Card/></div>
   <Technicalskill/>
   <Contact/>
    </div>
  )
}

export default blog
