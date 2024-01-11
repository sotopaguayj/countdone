export const dateCounter = ({ date, now }) => {
  
  
  const eventDate = new Date(`${ date }T00:00:00`).getTime()

  const diff = eventDate - now
  
  const minutes = Math.ceil(diff / (1000 * 60))
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  // const secondsLeft = minutes >= 60 ?  seconds - (minutes * 60) : seconds 
  const minutesLeft = hours >= 24 ?  minutes - (hours * 60) : minutes 
  const hoursLeft = days >= 1 ?  hours - (days * 24) : hours 
  const daysLeft = months >= 1 ? days - (months * 30) : days
  
  return {
    minutes: minutesLeft,
    hours: hoursLeft,
    days: daysLeft, 
    months
  }
}