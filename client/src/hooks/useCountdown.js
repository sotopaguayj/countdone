import { useEffect, useState } from 'react'
import useDate from './useDate'

const useCountdowm = () => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0
  })
  
  const { date } = useDate()

  useEffect(() => {

    const dateCounter = () => {
      const eventDate = new Date(`${ date }T00:00:00`).getTime()
      const now = new Date().getTime()

      const diff = eventDate - now

      const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
      const months = Math.floor(days / 30)
      const daysLeft = months >= 1 ? days - (months * 30) : days
      
      setTimeLeft({
        days: daysLeft, 
        months
      })
    }
    const interval = setInterval(dateCounter, 1000)

    return () => clearInterval(interval)
  })

  return { daysLeft: timeLeft.days, monthsLeft: timeLeft.months }
}

export default useCountdowm