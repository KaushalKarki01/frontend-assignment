import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-gray-300 h-[15vh] w-full flex items-center justify-between px-5'>
        <h1 className='text-3xl font-bold'>OnlineStore</h1>
        <input type="text" placeholder='Search here...' className='px-3 py-2 outline-none rounded-md' />
        <div></div>
      </nav>
    </div>
  )
}

export default Navbar
