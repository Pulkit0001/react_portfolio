import React from 'react'
import Image from "next/image";
import html from "../../public/images/html.png"
import css from "../../public/images/css.png"
import js from "../../public/images/js.webp"
import next from "../../public/images/next.jpg"
import postman from "../../public/images/postman.webp"
import redux from "../../public/images/redux.png"
import node from "../../public/images/node.png"
import react from "../../public/images/html.png"
import git from "../../public/images/git.png"
import bootstrap from "../../public/images/bootstrap.jpeg"

function Technicalskill() {
  return (
    <div className='section mt-5 technical'>
      <div className='container'>
        <div className='col-12 text-center full-stack'>
            My <span className='text-danger'>Technical</span> Skills
        </div>
        <div className='col-12 text-center mt-3'>
<button className='btn btn-outline-success'>All</button>
<button className='btn btn-outline-success ms-3'>Frontend</button>
<button className='btn btn-outline-success ms-3'>Backend</button>
        </div>
<div className='row mt-5 text-center'>
    <div className='col-2'>
       <Image src={html} className="image-size" height={130} width={130} alt="jnk" /> 
    </div>
    <div className='col-2 '>
       <Image src={css} className="image-size" height={130} width={130} alt="jnk" /> 
    </div>
    <div className='col-2 '>
       <Image src={js} className="image-size" height={130} width={130} alt="jnk" /> 
    </div>
    <div className='col-2 '>
       <Image src={bootstrap} className="image-size" height={130} width={130} alt="jnk" /> 
    </div>
    <div className='col-2'>
       <Image src={react} className="image-size" height={130} width={130} alt="jnk" /> 
    </div>
    <div className='col-2'>
       <Image src={git} className="image-size" height={130} width={130} alt="jnk" /> 
    </div>
    </div>
    <div className='row mt-5 text-center'>
    <div className='col-2 '>
       <Image src={node} className="image-size" height={130} width={130} alt="jnk" /> 
    </div>
    <div className='col-2'>
       <Image src={postman} className="image-size" height={130} width={130} alt="jnk" /> 
    </div>
    <div className='col-2'>
       <Image src={redux} className="image-size" height={130} width={130} alt="jnk" /> 
    </div>
    <div className='col-2'>
       <Image src={next} className="image-size" height={130} width={130} alt="jnk" /> 
    </div>
    </div>
      </div>
    </div>
  )
}

export default Technicalskill
