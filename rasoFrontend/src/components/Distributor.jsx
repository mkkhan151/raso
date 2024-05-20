import React from 'react'
import { Phone, Warehouse } from "lucide-react";

function Distributor({ distributor }) {
    return (
        <div className='flex flex-col gap-2 p-4 border rounded-lg shadow-md'>
            <Warehouse />
            <h3 className='font-medium text-lg'>{distributor.name}</h3>
            <h4 className='font-normal text-gray-600'>{distributor.city}</h4>
            <p className='text-lg flex gap-3 items-center'><Phone />{distributor.phone}</p>
            <p>{distributor.Address}</p>
        </div>
    )
}

export default Distributor
