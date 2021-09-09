import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  const { active: note } = useSelector(state => state.notes)
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id, } = formValues;
  //Una constante mutable
  const activeId = useRef(note.id)

  useEffect(() => {
    //Verificamos que el la nota activa en la referencia sea distinta a la que tenemos en el state
    if (note.id !== activeId.current) {
      //Cambiamos el estado con el hook useForm y useRef
      reset(note);
      activeId.current = note.id
    }
  }, [note, reset])

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }))
  }, [dispatch, formValues])

  const handleDelete = () => {
    dispatch(startDeleting(id))
  }

  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input
          type='text'
          placeholder='Thinking about ...'
          className='note__title-input'
          autoComplete='off'
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder='What happend today'
          className='note__text-area'
          name="body"
          value={body}
          onChange={handleInputChange}
        />
        {(note.url) &&
          <div className='notes__image'>
            <img
              src={`${note.url}`}
              alt='fondo'
            />
          </div>
        }
      </div>
      <button
        className="btn btn-danger"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  )
}
