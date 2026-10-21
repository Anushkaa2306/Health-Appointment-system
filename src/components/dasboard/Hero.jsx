import React from 'react'

const Hero = () => {
  const date = new Date();
  return (
    <div>
      <h1 className='text-2xl font-bold text-white'>Dashboard</h1>
      <h2>{date.toLocaleDateString()}</h2>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Hero
