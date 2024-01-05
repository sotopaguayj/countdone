import { useEffect, useState } from 'react'
import eventDate from '../api/event'

const useDate = () => {
  const [date, setDate] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)


  useEffect(() => {

    const fetchData = async() => {
      const { isError, date } = await eventDate()
      setIsError(isError)
      setDate(date)
      setIsLoading(false)
    }

    fetchData()

  }, [])



  return { date, isError, isLoading }
}

export default useDate