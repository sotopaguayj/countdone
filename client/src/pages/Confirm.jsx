import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input"
import Button from "../components/Button"
import { confirmAssist, searchGuest } from "../api/guest"

function Confirm() {
  const navigate = useNavigate()
  const [confirmCode, setConfirmCode] = useState("")

  const handleChange = (event) => {
    const { value } = event.target
    if (value.length <= 6) setConfirmCode(value)
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    const { guest } = await searchGuest({ confirmCode })

    if (guest) {
      const { data } = await confirmAssist({ guest })
      navigate("/invitation", {
        state: { name: data.name, id: data.event_id },
      })
      
    }}

  return (
    <>
      <h3 className="text-2xl text-center font-bold uppercase m-4 text-white">
        Confirmación de asistencia
      </h3>
      <form onSubmit={ handleSubmit } className="max-w-sm mx-auto">
        <Input onChange={ handleChange } value={ confirmCode } />
        <Button type="submit" text="CONFIRMAR" />
      </form>
    </>
  )
}

export default Confirm
