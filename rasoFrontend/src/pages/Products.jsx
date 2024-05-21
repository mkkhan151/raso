import React from 'react'
import { Product } from '../components'

function Products() {
  return (
    <section className='w-full'>
      <div className='w-ful flex flex-col justify-center items-center max-w-4xl mx-auto space-y-8 pb-10 pt-12 md:pt-24'>
        <h1 className='text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10'>Our Products</h1>
        <p className='mx-auto max-w-4xl p-4 text-center text-base text-gray-600 md:text-xl'>Elevate your family's hygiene routine with Raso's premium products. From gentle baby diapers to essential personal care items, our range is designed to provide comfort and confidence every day. Explore our collection and experience the difference for yourself.</p>
      </div>

      <div className='w-full p-4 lg:max-w-7xl grid gap-4 lg:grid-cols-2 mx-auto mb-4'>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  )
}

export default Products
