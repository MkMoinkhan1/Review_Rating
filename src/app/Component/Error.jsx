import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
    <h1 className='text-center '>404
    </h1>
    <p>this is url is not present</p>
    <button className='btn'><Link to={'/'}>Go to Home</Link></button>
    </div>
  )
}

export default Error