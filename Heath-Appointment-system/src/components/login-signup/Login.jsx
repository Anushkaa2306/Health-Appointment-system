import React from 'react'

const Login = ({onSignupClick}) => {
    return (
        <div className='flex  flex-col justify-center' >
            <h2 className='text-4xl font-bold text-left my-2'>Login Form</h2>
            <input type="email" placeholder=' Email Address' className='border border-[#c9c6c5] w-96 py-2 my-4' />
            <input type="password" placeholder=' Password' className='border border-[#c9c6c5] w-96 py-2' />
            <a href="#" className='text-blue-600 font-semibold text-right'>Forgot password?</a>
            <button type='submit' className='w-96 bg-blue-950 text-white py-2 my-5 rounded '>Login</button>
            <h2 className='text-center mb-8'>Not a Member?<button className='text-blue-600 ' onClick={onSignupClick}>Sign-up now</button></h2>
        </div>
    )
}

export default Login
