import React from 'react'
import Sidebar from './components/dasboard/Sidebar'
import Navbar from './components/dasboard/Navbar' 
import Hero from './components/dasboard/Hero'
const App = () => {

  return (
    <>
      <div className='grid grid-cols-16 gap-1 h-screen grid-rows-[auto_1fr] '>
        <div className='col-span-16  bg-white rounded-b-xl'>
          <Navbar />
        </div>
        <div className='col-span-3 bg-white h-full p-4 rounded-xl'>
          <Sidebar />
        </div>
        <div className='col-span- bg-white h-full p-4 rounded-xl'>
          <Hero />
        </div>
      </div>
    </>
  )
}

export default App
// Don't These Line Of Code
// import Loginsignupbuttons from './components/login-signup/Loginsignupbuttons'
{/* < div className='h-[85vh] w-full shadow-[0px_10px_30px_#00ffff,0px_0px_10px_#00ffff] max-w-7xl rounded-xl border border-cyan-400 mt-14 ml-32' >
    <Loginsignupbuttons />
</div > */}