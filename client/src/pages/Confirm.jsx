import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

function Confirm() {
  const navigate = useNavigate();
  const [confirmCode, setConfirmCode] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length <= 6) setConfirmCode(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/event/api/v1/guest/");
    const data = await response.json();
    const guest = data.find(
      (guest) => guest.confirm_code === parseInt(confirmCode)
    );
    console.log(guest.id);

    if (guest) {
      const response = await fetch(
        `http://127.0.0.1:8000/event/api/v1/guest/${guest.id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            assist_confirm: true,
          }),
        }
      );
      const data = await response.json();
      console.log("Actualizado", data);
      navigate("/invitation", {
        state: { name: data.name, id: data.event_id },
      });
    }
  };

  return (
    <>
      <h3 className="text-2xl text-center font-bold uppercase m-4 text-white">
        Confirmación de asistencia
      </h3>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <Input onChange={handleChange} value={confirmCode} />
        <Button type="submit" text="CONFIRMAR" />
      </form>
    </>
  );
}

export default Confirm;
