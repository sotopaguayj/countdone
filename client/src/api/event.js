

const eventDate = async() => {
  try {
    const response = await fetch('http://127.0.0.1:8000/event/api/v1/event')
    const data = await response.json()

    return { isError: false, date: data[0].date }

  } catch (error) {

    return { isError: true, date: [] }
    
  }
}

export default eventDate