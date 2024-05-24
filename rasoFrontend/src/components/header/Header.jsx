import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import logo from './logo.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Products',
            path: '/products'
        },
        {
            name: 'Our Distributors',
            path: '/distributors'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Contact',
            path: '/contact'
        },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className='bg-old-brick-100 sticky top-0 w-full border-b shadow py-1 px-2 md:py-2 md:px-4 z-50'>
            {/* for large screens */}
            <div className='w-full max-w-7xl m-auto flex justify-between items-center'>
                <Link to="/"><img src={logo} width={50} alt="Logo" /></Link>
                <nav className='hidden md:block'>
                    <ul className='inline-flex space-x-6'>
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <NavLink to={item.path}
                                    className={({ isActive }) => `font-semibold ${isActive ? 'text-old-brick-600' : 'text-baltic-sea'} hover:text-old-brick-600 transition`}
                                >{item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <Link to="/register" className='hidden md:block bg-old-brick-600 hover:bg-transparent text-white hover:text-baltic-sea outline-none border border-old-brick-600 rounded py-1 px-4 font-semibold'>Register Patient</Link>
                    <button className='block md:hidden' onClick={toggleMenu}>{isMenuOpen ? <X /> : <Menu />}</button>
                </div>
            </div>

            {/* for mobile and tablet screens */}
            {isMenuOpen && <div className='mt-3 py-1 w-full block md:hidden'>
                <nav className='w-full'>
                    <ul className='w-full inline-flex flex-col space-y-1'>
                        {menuItems.map((item) => (
                            <li key={item.name}
                            className='w-full'
                            >
                                <NavLink to={item.path}
                                className={({isActive}) => `font-semibold block w-full p-2 rounded-md hover:text-old-brick-600 hover:bg-baltic-sea-200 ${isActive ? 'text-old-brick-600 bg-baltic-sea-200' : 'text-baltic-sea bg-white'}`}
                                >{item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Link to='/register' className='block w-full mt-3 bg-old-brick-600 hover:bg-transparent text-center text-white hover:text-baltic-sea outline-none border border-old-brick-600 rounded py-1 px-4 font-semibold'>Register Patient</Link>
            </div>}
        </header>
    )
}

export default Header
