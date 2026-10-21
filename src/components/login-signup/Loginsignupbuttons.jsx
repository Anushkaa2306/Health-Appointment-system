import React, { useState } from 'react'
import Signup from './Signup'
import Login from './Login'

const Loginsignupbuttons = () => {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <div key={isLogin ? 'login' : 'signup'} className='h-full w-full max-w-7xl overflow-hidden min-w-0 '>
            {isLogin ? (<Login onSignupClick={() => setIsLogin(false)} />) : (<Signup onLoginClick={() => setIsLogin(true)} />)}
        </div>
    )
}
export default Loginsignupbuttons