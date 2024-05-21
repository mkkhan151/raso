import React from 'react';
import diaparImage from "./diapars.jpg";

function Product({product = null}) {
  return (
    <div className='p-1 w-full flex flex-col sm:flex-row rounded-xl border shadow'>
      <img src={diaparImage} alt="Product Image" className='w-full h-[400px] sm:h-auto sm:w-[200px] object-cover rounded-lg'/>
      <div className='p-4'>
        <h2 className='text-2xl font-semibold'>Dry Adult Diapar</h2>
        <p className='text-gray-600 text-lg mt-2'>Dry plus Adult Diapar with sizes Medium(M), Large(L) and Extra-Large(XL)</p>
      </div>
    </div>
  )
}

export default Product
