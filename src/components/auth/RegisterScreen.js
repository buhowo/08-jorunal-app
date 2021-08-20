import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

export const RegisterScreen = () => {
  const dispatch = useDispatch()
  const { msgError } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    name: 'Sergio',
    email: 'sto@gmail.com',
    password: '123456',
    password2: '123456'
  })

  const { name, email, password, password2 } = formValues

  const handleRegister = (e) => {
    e.preventDefault()
    if (isFormValid()) dispatch(startRegisterWithEmailPasswordName(email, password, name))
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Nombre requerido'))
      return false
    } else if (!validator.isEmail(email)) {
      dispatch(setError('No es un email valido'))
      return false
    } else if (password !== password2 || password.length < 6) {
      dispatch(setError('Password debería ser al menos 6 caracteres y ser iguales'))
      return false
    }
    dispatch(removeError())
    return true
  }

  return (
    <>
      {
        msgError &&
          <div className='auth__alert-error'>
            {msgError}
          </div>
      }

      <h3 className='auth__title'>Register</h3>
      <form onSubmit={handleRegister}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          className='auth__input'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
          value={password}
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Verify your password'
          name='password2'
          className='auth__input'
          value={password2}
          onChange={handleInputChange}
        />
        <button
          className='btn btn-primary btn-block mb-5'
          type='submit'
        >
          Login
        </button>

        <Link
          className='link'
          to='/auth/login'
        >
          Already registered?
        </Link>
      </form>
    </>
  )
}
