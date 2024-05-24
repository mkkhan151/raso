import React from 'react';
import welcome from '../assets/welcome.jpg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='w-full mb-20'>
      <div className='w-full relative'>
        <img src={welcome} alt="" className='w-full h-[50vh]' />
        <div className='w-full h-[50vh] absolute top-0 left-0 bg-baltic-sea/60'></div>
        <div className='absolute top-0 left-0 w-full h-[50vh] flex flex-col justify-center items-center'>
          <h1 className='text-center text-2xl font-semibold max-w-sm md:max-w-xl lg:max-w-4xl text-white/95 md:text-3xl lg:text-5xl'>Welcome to Raso</h1>
          <p className='max-w-4xl text-center text-base text-white md:text-xl mt-8 md:mt-12'>Where Comfort Meets Hygiene!</p>
          <p className='max-w-4xl text-center text-base text-white md:text-xl'>Discover Premium Solutions for Your Family's Well-being</p>
          <Link to='/products' className='px-2 py-1 md:px-4 md:py-2 mt-8 md:mt-12 bg-old-brick-600 hover:bg-transparent text-white text-base md:text-xl font-semibold border-2 border-old-brick-600'>Explore Now</Link>
        </div>
      </div>
      <section className='w-full py-10 mt-10' id='regions'>
        <div className='w-full flex flex-col justify-center max-w-7xl mx-auto'>
          <h2 className='text-center text-xl font-semibold text-gray-900 md:text-4xl md:leading-10'>Our Regions</h2>
          <p className="max-w-4xl text-center text-base text-gray-600 md:text-xl mx-auto mt-10">Discover Raso's global reach through our network of trusted business distributors. From local communities to international markets, our products are available where you need them most. Connect with our partners in your region and experience the convenience of Raso's hygienic solutions.</p>
          <Link to='/distributors' className='px-2 py-1 md:px-4 md:py-2 mx-auto mt-10 md:mt-12 bg-old-brick-600 hover:bg-transparent text-white hover:text-black text-base md:text-xl font-semibold border-2 border-old-brick-600'>Explore Regions</Link>
        </div>
      </section>
      <section className='w-full py-10 mt-10' id='topBuyers'>
        <div className='w-full max-w-7xl mx-auto'>
          <h2 className='text-center text-xl font-semibold text-gray-900 md:text-4xl md:leading-10'>Our Top Customers</h2>
          <div className='w-full mt-8 flex flex-wrap p-4 gap-6 justify-center'>
            <div className='w-[200px] md:w-[300px] pb-4 flex flex-col gap-y-3 rounded-lg border shadow'>
              <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" className='w-full rounded-t-lg' />
              <h3 className='w-full px-4 text-center font-medium'>Customer Name</h3>
            </div>
            <div className='w-[200px] md:w-[300px] pb-4 flex flex-col gap-y-3 rounded-lg border shadow'>
              <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" className='w-full rounded-t-lg' />
              <h3 className='w-full px-4 text-center font-medium'>Customer Name</h3>
            </div>
            <div className='w-[200px] md:w-[300px] pb-4 flex flex-col gap-y-3 rounded-lg border shadow'>
              <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" className='w-full rounded-t-lg' />
              <h3 className='w-full px-4 text-center font-medium'>Customer Name</h3>
            </div>
            <div className='w-[200px] md:w-[300px] pb-4 flex flex-col gap-y-3 rounded-lg border shadow'>
              <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" className='w-full rounded-t-lg' />
              <h3 className='w-full px-4 text-center font-medium'>Customer Name</h3>
            </div>
            <div className='w-[200px] md:w-[300px] pb-4 flex flex-col gap-y-3 rounded-lg border shadow'>
              <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="logo" className='w-full rounded-t-lg' />
              <h3 className='w-full px-4 text-center font-medium'>Customer Name</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
