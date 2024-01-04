import { useEffect, useState } from 'react'

function MainPage() {
  const [date, setDate] = useState([])
  const [daysLeft, setDaysLeft] = useState(0)
  const [monthsLeft, setMonthsLeft] = useState(0)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/event/api/v1/event').then(res => res.json()).then((data) => setDate(data[0].date))
  }, [])

  useEffect(() => {
    
    const dateCounter = () => {
      const eventDate = new Date(`${date}T00:00:00`).getTime()  
      const now = new Date().getTime()

      const diff = eventDate - now

      const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
      const months = Math.floor(days / 30)
      const daysLeft = months >= 1 ? days - (months * 30) : days

      setDaysLeft(daysLeft)
      setMonthsLeft(months)
    }
      const interval = setInterval(dateCounter, 1000)
      return () => clearInterval(interval)
  })
  
  return (
    <>
      <div>MainPage</div>
      <p>Queda aproximadamente { monthsLeft >= 1 ? `${monthsLeft} meses y` : ``} { daysLeft } días </p>
    </>
  )
}

export default MainPage