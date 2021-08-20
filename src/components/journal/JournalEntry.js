import React from 'react'

export const JournalEntry = () => {
  return (
    <div
      className='journal__entry pointer'
    >

      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://i.pinimg.com/564x/86/3f/99/863f99f0ebb2edb60ba802d0a0430004.jpg)'
        }}
      />
      <div className='journal__entry-body'>
        <p className='journal__entry-content'>
          Incididunt aliqua id minim pariatur.
        </p>
      </div>
      <div
        className='journal__entry-date-box'
      >
        <span>Monday</span>
        <h4>28</h4>
      </div>

    </div>
  )
}
