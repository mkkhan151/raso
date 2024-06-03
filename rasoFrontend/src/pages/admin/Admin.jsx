import React from 'react'
import logo from 'D:\\Development\\React\\raso\\rasoFrontend\\src\\assets\\logo.png';
import { NavLink, Outlet } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <header className='w-full py-4 border-b shadow sticky top-0'>
        <h1 className='ml-2 font-semibold text-black text-lg md:text-xl lg:text-2xl'>Admin Dashboard</h1>
      </header>
      <main className='w-full'>
        <aside className='flex h-screen w-1/5 flex-col overflow-y-auto border-r bg-white px-5 py-8 fixed'>
            <img src={logo} alt="Raso Logo" className='w-24' />
            <hr className='my-8'/>
            <nav className='w-full flex flex-col gap-y-2'>
                <NavLink to='/admin' className={({isActive}) => `font-semibold block w-full p-2 rounded-md hover:text-old-brick-600 hover:bg-baltic-sea-200 ${isActive ? 'text-old-brick-600 bg-baltic-sea-200' : 'text-baltic-sea bg-white'}`}>Distributors</NavLink>
                <NavLink to='/admin/products' className={({isActive}) => `font-semibold block w-full p-2 rounded-md hover:text-old-brick-600 hover:bg-baltic-sea-200 ${isActive ? 'text-old-brick-600 bg-baltic-sea-200' : 'text-baltic-sea bg-white'}`}>Products</NavLink>
                <NavLink to='/admin/registered-patients' className={({isActive}) => `font-semibold block w-full p-2 rounded-md hover:text-old-brick-600 hover:bg-baltic-sea-200 ${isActive ? 'text-old-brick-600 bg-baltic-sea-200' : 'text-baltic-sea bg-white'}`}>Registered Patients</NavLink>
            </nav>
        </aside>
        <div className='w-4/5 float-right'>
        <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Admin
