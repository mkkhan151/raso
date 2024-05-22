import React from 'react';
import { Mail, MapPin } from 'lucide-react';

function About() {
  return (
    <section className='w-full'>
      <div className='w-ful px-2 flex flex-col justify-center items-center max-w-4xl mx-auto space-y-8 pb-10 pt-10 md:pt-16'>
        <h1 className='text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10'>About Us</h1>
        <p className='mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl'>At Raso, we're passionate about crafting hygienic solutions that prioritize your family's comfort and well-being. With a commitment to quality and innovation, we strive to redefine the standard of care in the hygiene industry. Explore our story and discover why families trust Raso for their everyday needs.</p>
      </div>
      <div>
        <div className='w-ful px-2 flex flex-col justify-center items-center max-w-4xl mx-auto space-y-8 pb-10 pt-10'>
          <h2 className='text-center text-xl font-semibold text-gray-900 md:text-4xl md:leading-10'>Our Mission</h2>
          <p className='mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl'>At Raso, our mission is to enhance comfort and dignity through innovative products for both adults and babies. We are committed to providing high-quality diapers and napkins that cater to the diverse needs of our consumers, ensuring their well-being and satisfaction.</p>
        </div>
        <div className='w-ful px-2 flex flex-col justify-center items-center max-w-4xl mx-auto space-y-8 pb-10 pt-10'>
          <h2 className='text-center text-xl font-semibold text-gray-900 md:text-4xl md:leading-10'>Our Vision</h2>
          <p className='mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl'>Raso envisions a world where every individual, regardless of age or circumstance, can live with confidence and ease. Through continuous research and development, we strive to be the leading provider of premium hygiene solutions, setting new standards of excellence in the industry.</p>
        </div>
      </div>
      <div className='w-ful px-2 flex flex-col justify-center items-center max-w-4xl mx-auto space-y-8 pb-10 pt-10'>
        <h3 className='text-center text-lg font-semibold text-gray-900 md:text-3xl md:leading-10'>Our Head Office Location</h3>
        <div className='w-full flex gap-x-3 justify-center'>
          <MapPin className='text-old-brick' />
          <p className='text-base text-gray-700 md:text-xl'>H No.112, Street No. 01, Saddique colony, Faqeer Abad Peshawar.</p></div>
      </div>
      <div className='w-ful px-2 flex flex-col justify-center items-center max-w-4xl mx-auto space-y-8 pb-10 pt-5'>
        <h3 className='text-center text-lg font-semibold text-gray-900 md:text-3xl md:leading-10'>Contact Us</h3>
        <div className='w-full flex justify-between'>
          <a href="tel:+923339382618" target="_blank" className='flex gap-x-3 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='w-6 h-6 md:w-12 md:h-12'>
              <path fill="#25d366" d="M22 6.55a12.61 12.61 0 0 0-.1-1.29a4.29 4.29 0 0 0-.37-1.08a3.66 3.66 0 0 0-.71-1a3.91 3.91 0 0 0-1-.71a4.28 4.28 0 0 0-1.08-.36A10.21 10.21 0 0 0 17.46 2H6.55a12.61 12.61 0 0 0-1.29.1a4.29 4.29 0 0 0-1.08.37a3.66 3.66 0 0 0-1 .71a3.91 3.91 0 0 0-.71 1a4.28 4.28 0 0 0-.36 1.08A10.21 10.21 0 0 0 2 6.54v10.91a12.61 12.61 0 0 0 .1 1.29a4.29 4.29 0 0 0 .37 1.08a3.66 3.66 0 0 0 .71 1a3.91 3.91 0 0 0 1 .71a4.28 4.28 0 0 0 1.08.36a10.21 10.21 0 0 0 1.28.11h10.91a12.61 12.61 0 0 0 1.29-.1a4.29 4.29 0 0 0 1.08-.37a3.66 3.66 0 0 0 1-.71a3.91 3.91 0 0 0 .71-1a4.28 4.28 0 0 0 .36-1.08a10.21 10.21 0 0 0 .11-1.28V7.08zM12.23 19a7.12 7.12 0 0 1-3.43-.9l-3.8 1l1-3.72a7.11 7.11 0 0 1-1-3.58a7.18 7.18 0 1 1 7.23 7.2m0-13.13A6 6 0 0 0 7.18 15l.14.23l-.6 2.19L9 16.8l.22.13a6 6 0 0 0 3 .83a6 6 0 0 0 6-6a6 6 0 0 0-6-6Zm3.5 8.52a1.82 1.82 0 0 1-1.21.85a2.33 2.33 0 0 1-1.12-.07a8.9 8.9 0 0 1-1-.38a8 8 0 0 1-3.06-2.7a3.48 3.48 0 0 1-.73-1.85a2 2 0 0 1 .63-1.5a.65.65 0 0 1 .48-.22H10c.11 0 .26 0 .4.31s.51 1.24.56 1.33a.34.34 0 0 1 0 .31a1.14 1.14 0 0 1-.18.3c-.09.11-.19.24-.27.32s-.18.18-.08.36a5.56 5.56 0 0 0 1 1.24a5 5 0 0 0 1.44.89c.18.09.29.08.39 0s.45-.52.57-.7s.24-.15.4-.09s1.05.49 1.23.58s.29.13.34.21a1.56 1.56 0 0 1-.07.78Z" />
            </svg>
            <span className='text-base text-gray-700 md:text-xl'>+92-3339382618</span>
          </a>
          <a href="mailto:rasointernational@gmail.com" className='flex gap-x-3 items-center'>
            <Mail className='text-old-brick md:w-12 md:h-12'/>
            <span className='text-base text-gray-700 md:text-xl'>rasointernational@gmail.com</span>
          </a>
        </div>
      </div>
      <div className='h-20'></div>
    </section>
  )
}

export default About
