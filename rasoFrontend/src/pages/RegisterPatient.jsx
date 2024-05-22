import React from 'react';
import patient from '../assets/patient.jpg';
import Input from '../components/Input';

function RegisterPatient() {
    return (
        <section className='w-full'>
            <div className='w-full relative'>
                <img src={patient} className='w-full h-[50vh] object-cover' />
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-baltic-sea/70'></div>
                <div className='absolute top-0 left-0 w-full h-[50vh] flex justify-center items-center'>
                    <h1 className='text-center text-2xl font-semibold max-w-sm md:max-w-xl lg:max-w-4xl text-white/90 md:text-3xl lg:text-5xl'>We offer home delivery service and special discount offers to registered patients</h1>
                </div>
                <div className='w-full relative px-4 md:px-8 lg:px-20 pt-5'>
                    <div className='bg-white float-right w-full lg:w-[70%] border rounded-lg shadow-lg p-4'>
                        <h2 className='text-center font-medium text-lg md:text-xl lg:text-3xl'>Patient Registeration</h2>
                        <form action="#" className='w-full flex flex-col gap-y-6 mt-7'>
                            <Input label="Patient Name" placeholder="Enter patient name" />
                            <Input label={"Patient Age (in Years)"} placeholder={"Enter patient age"} type='number' />
                            <div className='grid w-full items-center gap-1.5'>
                                <label htmlFor="gender" className='text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Gender</label>
                                <select id="gender"
                                    className='flex h-10 w-full rounded-md font-medium placeholder:font-normal text-black border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                                >
                                    <option value="male" selected>Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <Input label={"Patient Phone Number"} placeholder={"Enter phone number"} type='tel' />
                            <Input label={"Patient Disease"} placeholder={"Enter patient disease (optional)"} />
                            <Input label={"Patient Address"} placeholder={"Enter patient address"} />
                            <button type='submit'
                            className='w-full rounded-md bg-old-brick px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-old-brick/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                            >Register</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='h-20 clear-both'></div>
        </section>
    )
}

export default RegisterPatient
