import { useEffect, useState } from 'react'

const useDate = () => {
  const [date, setDate] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(null)


  useEffect(() => {
    fetch('http://127.0.0.1:8000/event/api/v1/event')
      .then(res => res.json())
      .then((data) => setDate(data[0].date))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
  }, [])



  return { date, isError, isLoading }
}

export default useDate