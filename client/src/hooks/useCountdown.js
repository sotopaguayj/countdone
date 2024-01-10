import { useEffect, useState } from 'react'
import { useDate } from './useDate'

export const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0
  })
  
  const { date, isError, isLoading } = useDate()

  useEffect(() => {

    const dateCounter = () => {
      const eventDate = new Date(`${ date }T00:00:00`).getTime()
      const now = new Date().getTime()

      const diff = eventDate - now
      
      const minutes = Math.ceil(diff / (1000 * 60))
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)
      const months = Math.floor(days / 30)
      const minutesLeft = hours >= 60 ?  minutes - (hours * 60) : minutes 
      const hoursLeft = days >= 1 ?  hours - (days * 24) : hours 
      const daysLeft = months >= 1 ? days - (months * 30) : days
      setTimeLeft({
        minutes: minutesLeft,
        hours: hoursLeft,
        days: daysLeft, 
        months
      })
    }
    const interval = setInterval(dateCounter, 1000)

    return () => clearInterval(interval)
  })

  return { timeLeft, isError, isLoading }
}

