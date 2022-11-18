import React from 'react'
import Link from 'next/link'

function not() {
  return (
    <div>
      <h2>404 Sorry this page not found</h2>
     <Link href="/"> <button className='btn'>Back to home</button></Link>
    </div>
  )
}

export default not
