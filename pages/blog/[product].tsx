import React from 'react'
import {useRouter} from "next/router"
function product() {
    let router=useRouter()
    let pro= router.query.product
  return (
    <div>
      <h2>the products are {pro}</h2>
    </div>
  )
}

export default product
