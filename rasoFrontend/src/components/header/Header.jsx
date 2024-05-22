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
        <header className='bg-old-brick-50 sticky top-0 w-full border-b shadow py-1 px-2 md:py-2 md:px-4 z-50'>
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
            {isMenuOpen && <div className='block mt-2 md:hidden w-full'>
                <nav>
                    <ul className='flex flex-col items-center'>
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <NavLink to={item.path}
                                >{item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className='w-full mt-4'>Register</button>
            </div>}
        </header>
    )
}

export default Header
