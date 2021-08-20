import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input
          type='text'
          placeholder='Thinking about ...'
          className='note__title-input'
          autoComplete='off'
        />
        <textarea
          placeholder='What happend today'
          className='note__text-area'
        />
        <div className='notes__image'>
          <img
            src='https://cdn.dribbble.com/users/650400/screenshots/16101500/media/efc7ef012ba52bd239505563b7ae56e6.jpg'
            alt='fondo'
          />
        </div>

      </div>
    </div>
  )
}
