import React from 'react'
import Image from 'next/image'
import man from "../../public/images/manimage.webp"

function Home() {
    return (
        <div className='section home-section'>
        <div className='container'>
            {/* <div className='row mt-5 font'> */}
                <div className='row  p-5 mt-5'>
                    <div className='col-md-7 col-lg-7 col-xxl-7 col-sm-12  text-start p-4 ps-3 ms-3'>
                        <p className='mb-0 self-text '>Hello my name is</p>
                        <h2 className='name-size animate__jackInTheBox'>Mohit Sharma</h2>
                        <p className='full-stack animate__zoomIn'>I am a <span className='text-danger full-stack'><span className='fs-2'>Full Stack Developer</span></span></p>
                        <button className='btn btn-outline-danger font text-start'>Resume</button>
                    </div>
                    <div className='col-md-4 col-lg-4 ms-2 col-sm-12 mt-3'>
                    <Image
                        src={man} alt="placeholder"
                        // layout="responsive"
                        width={500}
                        height={500}
                        className='image-size ms-5 rounded-pill'
                    />
                </div>
                </div>
                {/* <div className='col-12  text-center name-size text-dark'>
                   <p className='text-success web-animate '>Welcome to My website</p>
                </div> */}
                
            {/* </div> */}
        </div>
        </div>
    )
}

export default Home
