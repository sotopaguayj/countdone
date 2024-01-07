
export const searchGuest = async({ confirmCode }) => {
  const response = await fetch("http://127.0.0.1:8000/event/api/v1/guest/");
  const data = await response.json();
  const guest = data.find(guest => guest.confirm_code === parseInt(confirmCode))

  return { guest }
}

export const confirmAssist = async({ guest }) => {
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
  
  return { data }
}