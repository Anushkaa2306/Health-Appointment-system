import React,{} from 'react'

import Loginsignupbuttons from './components/login-signup/Loginsignupbuttons'

const App = () => {
  
  return (
    <div className='flex mt-24 flex-col items-center h-dvh'>
      <h1 className='font-bold text-6xl text-red-50 mb-3'>welcome </h1>
      <div className='bg-red-50 w-md flex justify-center flex-col items-center rounded-xl'>
        <Loginsignupbuttons />
      </div>
    </div>
  )
}

export default App
