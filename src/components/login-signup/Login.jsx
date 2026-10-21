import React from 'react'

const Login = ({ onSignupClick }) => {
    return (
        <div className='flex w-full h-full relative overflow-hidden min-w-0 animate-[slideIn_0.9s_ease-out] ' >
            <div className='flex flex-col w-xl justify-center relative min-w-0 px-8 z-10 max-[650px]:w-full ml-16'>
                <h2 className='text-4xl font-bold text-center pb-10 text-white'>Login</h2>
                <input type="email" placeholder=' Email Address ' className='border-b-2 border-[#c9c6c5] w-full min-w-0 py-2 my-4 text-white bg-transparent focus:border-cyan-400 outline-none' />
                <input type="password" placeholder=' Password' className='border-b-2 border-[#c9c6c5] w-full min-w-0 py-2 text-white bg-transparent focus:border-cyan-400  outline-none' />
                <a href="#" className='text-blue-600 font-semibold text-right'>Forgot password?</a>
                <button type='submit' className='w-full min-w-0 bg-blue-800 text-white py-2 my-5 rounded-4xl hover:bg-blue-700'>Login</button>
                <h2 className='text-center mb-8 text-white'>Not a Member?<button className='text-blue-600 hover:underline cursor-pointer ' onClick={onSignupClick}>Sign-up now</button></h2>
            </div>
            <div className='absolute overflow-hidden bg-[linear-gradient(90deg,#111,#1cb0b0)] [clip-path:polygon(45%_0,100%_0,100%_100%,75%_100%)] max-[650px]:hidden inset-0 flex flex-col justify-center animate-[bg-slideIn_2s_ease-out]'>
                <div className='ml-auto h-full px-6 mt-50 mr-24'>
                    <h1 className='text-white font-medium text-5xl text-right'>WELCOME <br />BACK!</h1>
                    <p className='text-white text-2xl font-extralight text-right'>Hope, You and your <br />Family have a Great <br />Day.</p>
                </div>
            </div>
        </div>
    )
}

export default Login
