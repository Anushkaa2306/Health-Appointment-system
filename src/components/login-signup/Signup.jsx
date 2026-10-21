import React from 'react'

const Signup = ({ onLoginClick }) => {
    return (
        <div className='flex  relative h-full w-full min-w-0 overflow-hidden' >
            <div className='absolute overflow-hidden bg-[linear-gradient(270deg,#111,#1cb0b0)] [clip-path:polygon(0_0,55%_0,25%_100%,0%_100%)] max-[650px]:hidden inset-0 flex flex-col justify-center animate-[bg-slideIn_2s_ease-out] '>
                <div className='ml-10 px-6 mt-4'>
                    <h2 className='text-white font-bold text-5xl '>WeLCOME!</h2>
                    <p className='text-white text-2xl font-extralight mt-3'>Hope, You and your <br />Family have a Great<br />Day.</p>
                </div>
            </div>
            <div className='flex flex-col w-lg justify-center ml-auto h-full relative min-w-0 px-6 z-10 max-[650px]:w-full animate-[slideIn_0.9s_ease-out] mr-20'>
                <h2 className='text-4xl font-bold text-left my-2 text-white'>Sign Up</h2>
                <input type="text" placeholder=' Your Name' className='border-b-2 border-[#c9c6c5] w-full py-2 my-1 text-white outline-none focus:border-cyan-400' />
                <input type="email" placeholder=' Email Address' className='border-b-2 border-[#c9c6c5] w-full py-2 my-2 text-white outline-none focus:border-cyan-400' />
                <input type="password" placeholder=' Password' className='border-b-2 border-[#c9c6c5] w-full py-2 my-1 text-white outline-none focus:border-cyan-400' />
                <input type="password" placeholder=' Confirm Password' className='border-b-2 border-[#c9c6c5] w-full py-2 my-2 text-white outline-none focus:border-cyan-400 '/>
                <button type='submit' className='w-full bg-blue-800 text-white py-2 my-4 mb-8 rounded-4xl hover:bg-blue-700'>Sign-up</button>
                <h2 className='text-center mb-8 text-white'>Already a Member?<button className='text-blue-600 hover:underline cursor-pointer ' onClick={onLoginClick}>Login now</button></h2>
            </div>
        </div>
    )
}

export default Signup
