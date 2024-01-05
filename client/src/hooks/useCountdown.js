import { useEffect, useState } from 'react'
import useDate from './useDate'

const useCountdowm = () => {
  const [daysLeft, setDaysLeft] = useState(0)
  const [monthsLeft, setMonthsLeft] = useState(0)
  const { date } = useDate()

  useEffect(() => {

    const dateCounter = () => {
      const eventDate = new Date(`${ date }T00:00:00`).getTime()
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

  return { daysLeft, monthsLeft }
}

export default useCountdowm