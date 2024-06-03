import React, { useId } from 'react'

function Input({label, type = 'text', placeholder, ...props}) {
    const id = useId();
    return (
        <div className="grid w-full  items-center gap-2">
            <label
                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="flex h-10 w-full rounded-md font-medium placeholder:font-normal text-black border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type={type}
                id={id}
                placeholder={placeholder}
                {...props}
            />
        </div>
    )
}

export default Input
