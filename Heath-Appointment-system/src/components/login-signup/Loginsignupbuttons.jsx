import React, { useState } from 'react'
import Signup from './Signup'
import Login from './Login'

const Loginsignupbuttons = () => {
    const [isLogin, setisLogin] = useState(true)
    return (
        <div>
            <div className='flex gap-0.5 flex-col justify-center mt-6' >
                <div className='flex '>
                    <button className={` w-48 py-4 text-red-50 rounded-t-2xl text-2xl font-semibold ${isLogin ? 'bg-blue-950' : "bg-[#8f8d8c]"}`} onClick={() => setisLogin(true)}>Login </button>
                    <button className={` w-48 py-4 text-red-50 rounded-t-2xl text-2xl font-semibold ${!isLogin ? 'bg-blue-950' : "bg-[#8f8d8c]"} `} onClick={() => setisLogin(false)} >Sign-up </button>
                </div>
                <div>
                    {isLogin ? <Login onSignupClick={()=> setisLogin(false)}/> : <Signup />}
                </div>

            </div>
        </div>
    )
}

export default Loginsignupbuttons
