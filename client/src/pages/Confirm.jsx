import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'

function Confirm() {
  const navigate = useNavigate()
  const [confirmCode, setConfirmCode] = useState('')

  const handleChange = (event) => {
    const { value } = event.target
    setConfirmCode(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/invitation')
  }

  return (
    <>
      <h3 className='text-2xl text-center font-bold uppercase m-4 text-white'>Confirmación de asistencia</h3>
      <form onSubmit={ handleSubmit } className='max-w-sm mx-auto'>
        <Input onChange={ handleChange } value={ confirmCode } />
        <button type='submit'>CONFIRMAR</button>
      </form>
    </>
  )
}

export default Confirm