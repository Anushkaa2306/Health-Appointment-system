import React from 'react'

const Signup = () => {
    return (
        <div className='flex flex-col justify-center' >
            <h2 className='text-4xl font-bold text-left my-2'>Sign-up Form</h2>
            <input type="text" placeholder=' Your Name' className='border border-[#c9c6c5] w-96 py-2 my-1' />
            <input type="email" placeholder=' Email Address' className='border border-[#c9c6c5] w-96 py-2 my-2' />
            <input type="password" placeholder=' Password' className='border border-[#c9c6c5] w-96 py-2 my-1' />
            <input type="password" placeholder=' Confirm Password' className='border border-[#c9c6c5] w-96 py-2 my-2' />
            <button type='submit' className='w-96 bg-blue-950 text-white py-2 my-4 mb-8 rounded '>Sign-up</button>

        </div>
    )
}

export default Signup
