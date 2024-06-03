import { Edit, Warehouse, Phone, Trash2 } from 'lucide-react'
import React from 'react'

function DistributorCard({distributor}) {
    return (
        <div className='flex flex-col gap-2 p-4 border rounded-lg shadow-md'>
            <Warehouse />
            <h3 className='font-medium text-lg'>{distributor.name}</h3>
            <h4 className='font-normal text-gray-600'>{distributor.city}</h4>
            <p className='text-lg flex gap-3 items-center'><Phone />{distributor.phone}</p>
            <p>{`${distributor.address}, ${distributor.city}`}</p>
            <div className='w-full flex justify-between mt-auto'>
                <button className='text-green-600'><Edit/></button>
                <button className='text-red-600'><Trash2/></button>
            </div>
        </div>
    )
}

export default DistributorCard
