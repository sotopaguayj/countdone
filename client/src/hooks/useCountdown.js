import { useEffect, useState } from 'react'
import { useDate } from './useDate'
import { dateCounter } from '../utils/counter'

export const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  })
  
  const { date, isError, isLoading } = useDate()

  useEffect(() => {
    const now = new Date().getTime()

    const { minutes, hours, days, months } = dateCounter({ date, now })
    
    const interval = setInterval(() => {
      setTimeLeft({
        minutes,
        hours,
        days, 
        months
      })
    }, 1000)
    
    return () => clearInterval(interval)

  }, [date, timeLeft])

  return { timeLeft, isError, isLoading }
}

