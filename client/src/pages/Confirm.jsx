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
        state: { name: data.name },
      })
      
    }}

  return (
    <section>
      <h3 className="text-5xl font-bold uppercase m-4 text-white text-center">
        Confirmación de asistencia
      </h3>
      <form onSubmit={ handleSubmit } className="flex flex-col gap-2 p-4">
        <Input onChange={ handleChange } value={ confirmCode } />
        <Button type="submit" text="CONFIRMAR" />
      </form>
    </section>
  )
}

export default Confirm
