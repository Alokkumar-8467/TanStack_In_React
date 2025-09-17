import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='p-4 bg-gray-200 '>
      <div className='flex justify-around '>
        <NavLink to="/" >TanStack</NavLink>
        <ul className='flex justify-between gap-[60px] ' >
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink to="/trad" >FetchOld</NavLink>
          </li>
          <li>
            <NavLink to="/rq" >FetchRQ</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header