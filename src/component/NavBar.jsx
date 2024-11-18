import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  return (
    <div className='flex justify-center'>
        <ul className='flex p-2 font-bold '>
            <li className='m-1'>
                <NavLink to={'/'} className={'text-blue-700  focus:text-blue-500'}>Home</NavLink>
            </li>
            <li className='m-1'>

                <NavLink to={'/about'} className={'text-blue-700 focus:text-blue-500'}>About</NavLink>
            </li>
            <li className='m-1 '>
                <NavLink to={'/dashboard'} className={'text-blue-700 focus:text-blue-500'}>Dashboard</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar
