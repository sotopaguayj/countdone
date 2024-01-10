import { useEffect, useState } from 'react'
import { useDate } from './useDate'
import { dateCounter } from '../utils/counter'

export const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0
  })
  
  const { date, isError, isLoading } = useDate()

  useEffect(() => {

    const { minutes, hours, days, months } = dateCounter({ date })
    
    setTimeLeft({
      minutes,
      hours,
      days, 
      months
    })
    
    const interval = setInterval(dateCounter, 1000)

    return () => clearInterval(interval)

  }, [date])

  return { timeLeft, isError, isLoading }
}

