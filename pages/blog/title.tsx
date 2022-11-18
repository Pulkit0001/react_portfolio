import React, { use } from 'react'
import {useRouter} from "next/router"
import man from "../../public/images/manimage.webp"
import Image from 'next/image'

function title() {
    let router=useRouter()
   let e= router.query.page
  return (
    <div>
      <h2>This is a {e} Page</h2>
      <Image
                        src={man} alt="placeholder"
                        // layout="responsive"
                        width={300}
                        height={300}
                        placeholder="blur" 
                        // className='image-size'
                    />
    </div>
  )
}

export default title
