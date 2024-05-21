import React from 'react';
import { Distributor } from '../components';

function Distributors() {
    const distributors = [
        {
            name: "Burak Traders",
            city: "Mardan",
            phone: "03441554346",
            Address: "Pakistan Chowk, Bank Road, Mardan"
        },
        {
            name: "Burak Traders",
            city: "Mardan",
            phone: "03441554346",
            Address: "Pakistan Chowk, Bank Road, Mardan"
        },
        {
            name: "Burak Traders",
            city: "Mardan",
            phone: "03441554346",
            Address: "Pakistan Chowk, Bank Road, Mardan"
        },
        {
            name: "Burak Traders",
            city: "Mardan",
            phone: "03441554346",
            Address: "Pakistan Chowk, Bank Road, Mardan"
        },
    ]

    return (
        <section className='w-full'>
            <div className='w-ful px-2 flex flex-col justify-center items-center max-w-4xl mx-auto space-y-8 pb-10 pt-10 md:pt-24'>
                <h1 className='text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10'>Our Distributors</h1>
                <p className='mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl'>Discover Raso's global reach through our network of trusted business distributors. From local communities to international markets, our products are available where you need them most. Connect with our partners in your region and experience the convenience of Raso's hygienic solutions.</p>
            </div>
            <div className='w-full max-w-4xl flex items-center mx-auto gap-3 px-2'>
                <input type='text' className='bg-transparent p-2 rounded-md border-2 border-gray-500 text-lg text-gray-600 h-10 flex-grow' placeholder='Search city/region or distributor' />
                <button className='py-2 px-3 bg-old-brick-600 hover:bg-old-brick-600/70 text-white text-center rounded'>Search</button>
            </div>

            <div className='w-full max-w-7xl px-4 gap-6 grid sm:grid-cols-2 lg:grid-cols-3 mx-auto items-center justify-center my-10'>
                {distributors.map((item) => (
                    <Distributor distributor={item} />
                ))}
            </div>
        </section>
    )
}

export default Distributors
