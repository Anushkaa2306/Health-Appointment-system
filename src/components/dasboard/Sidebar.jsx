import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2 text-xl font-normal '>
        <i class="fa-solid fa-table"></i>
        <h2> Dashboard</h2>
      </div>
      <div  className='flex items-center gap-2 text-xl font-normal'>
        <i class="fa-solid fa-calendar-day"></i>
        <h2>Appointments</h2>
      </div>
      <div  className='flex items-center gap-2 text-xl font-normal'>
        <i class="fa-solid fa-clipboard-list"></i>
        <h2>Health Records</h2>
      </div>
      <div  className='flex items-center gap-2 text-xl font-normal'>
        <i class="fa-solid fa-link"></i>
        <h2>prescriptions</h2>
      </div>
      <div  className='flex items-center gap-2 text-xl font-normal'>
        <i class="fa-solid fa-gear"></i>
        <h2>Settings</h2>
      </div>
    </div>
  )
}

export default Sidebar
