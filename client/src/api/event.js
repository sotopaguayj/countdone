

const eventDate = async() => {
  try {
    const response = await fetch('http://127.0.0.1:8000/event/api/v1/event/af73d455-e036-4322-931c-42463398e3d1')
    const data = await response.json()
    
    return { isError: false, date: data.date }

  } catch (error) {

    return { isError: true, date: [] }
    
  }
}

export default eventDate