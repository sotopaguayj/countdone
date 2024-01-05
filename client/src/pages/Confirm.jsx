import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
      <h3>Confirmación de asistencia</h3>
      <form onSubmit={ handleSubmit }>
        <input className='' type='number' placeholder='Digita tu código de confirmación' name='confirm_code' value={confirmCode} onChange={ handleChange }/>
        <button type='submit'>CONFIRMAR</button>
      </form>
    </>
  )
}

export default Confirm