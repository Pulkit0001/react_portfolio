import React from 'react'
import child from "../../public/images/childimage.png";
import Image from 'next/image';

function About() {
  return (
    <div className='container'>
      <div className='col-12 text-center full-stack mt-4'>
        All <span className='text-danger'>About </span>Me And My <span className='text-danger' >Experience</span>
      </div>
      <div className='row mt-3'>
        <div className='col-12 text-center'>
            <button className='btn btn-outline-danger me-2'>About Me</button>
            <button className='btn btn-outline-light ms-2'>Experience</button>
        </div>
        <div className='row mt-5'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <Image
                        src={child} alt="placeholder"
                        // layout="responsive"
                        width={300}
                        height={300}
                        className='child-image rounded-pill'
                    />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12  mt-3'>
                <ul>
                    <li> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                    <li className='mt-2'> " Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                    <li className='mt-2'> " Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
                </ul>
           
</div>
        </div>
      </div>
    </div>
  )
}

export default About
