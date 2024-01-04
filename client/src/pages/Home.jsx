import { useEffect, useState } from 'react'

function MainPage() {
  const [guests, setGuests] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/guest/api/v1/guest/').then(res => res.json()).then(data => setGuests(data))
  }, [])
  
  return (
    <>
      <div>MainPage</div>
      {
        guests.map(guest => (
          <p key={ guest.id }>{ guest.name }</p>
        ))
      }
    </>
  )
}

export default MainPage