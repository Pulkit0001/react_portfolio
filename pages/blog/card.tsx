import React from 'react'
import Image from 'next/image'
import child from "../../public/images/childimage.png";

function Card() {
    return (
        // <div className='section mt-5'>
            <div className='container pt-3 mt-5'>
                <div className='row'>
                    {/* <div className=''> */}
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className="card text-dark m-auto" style={{ width: "20rem" }}>
                            <Image src={child} alt="njk" width={250} height={220} />
                            <div className="card-body">
                                <h5 className="card-title text-center text-danger fs-2 ">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text">Some quick example text to build on the card title and make </p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className="card text-dark m-auto" style={{ width: "20rem" }}>
                            <Image src={child} alt="njk" width={250} height={220} />
                            <div className="card-body">
                                <h5 className="card-title text-center text-danger fs-2 ">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text">Some quick example text to build on the card title and make </p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 '>
                        <div className="card text-dark m-auto "  style={{ width: "20rem" }}>
                            <Image src={child} alt="njk" width={250} height={220} />
                            <div className="card-body">
                                <h5 className="card-title text-center text-danger fs-2 ">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text">Some quick example text to build on the card title and make </p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                  
                    {/* </div> */}
                </div>
                {/* <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-12  text-center card-animation2'>
                        <div className="card text-dark m-auto" style={{ width: "18rem" }}>
                            <Image src={child} alt="njk" width={250} height={220} />
                            <div className="card-body">
                                <h5 className="card-title text-center text-danger fs-2 ">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p className="card-text">Some quick example text to build on the card title and make </p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div> */}
             </div>
        // </div>
    )
}

export default Card
