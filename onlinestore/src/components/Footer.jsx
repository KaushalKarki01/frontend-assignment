import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-2 items-center'>
        <div>
            <h2>OnlineStore</h2>
            <p>Our Collections</p>
            <ul>
                <li>Men's Collection</li>
                <li>Women's Collection</li>
                <li>Electronics</li>
                <li>Jewelery</li>
            </ul>
        </div>
        <input type="text" placeholder='Search here...' className='px-3 py-2 outline-none rounded-md' />
      </div>
    </div>
  )
}

export default Footer
