import React from 'react'
import linkdin from "../../public/images/linkdin.png"
import gmail from "../../public/images/gmail.png"
import github from "../../public/images/github.png"
import ready from "../../public/images/ready.png"
import Image from 'next/image'

function Contact() {
    return (
        <div className='section contact-section'>
            <div className='container'>
                <div className='col-12 text-center full-stack'>
                    You Can <span className='text-danger'>Contact</span> And  <span className='text-danger'>Chat</span> With Me
                </div>
                <div className='row mt-5'>
                    <div className='col-6'>
                    <Image src={ready}  alt="" className='rounded ms-5 mt-4' />
                    </div>
                    <div className='col-6 p-4'>
                        <div className='text-center me-5'>
                        <Image src={linkdin} height={50} className="me-2 rounded" width={108} alt="" />
                        <Image src={gmail} height={50} className="me-2 rounded" width={108} alt="" />
                        <Image src={github} height={50} width={108} alt="" className='rounded ' />
                        </div>
                        <form className='ms-5 ps-3'>
                        <input type="text" className="form-control w-75 mt-3" placeholder='Full Name' />
                        <input type="text" className="form-control w-75 mt-3" placeholder='Email' />
                        <input type="text" className="form-control w-75 mt-3" placeholder='Phone Number' />
                        <textarea className='form-control mt-3 w-75' placeholder='Your Message' rows={3} cols={5}></textarea>
                        <button className='btn btn-danger w-75 mt-3 rounded'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
