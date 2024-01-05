import { Link } from 'react-router-dom'
import useCountdown from '../hooks/useCountdown'
import useDate from '../hooks/useDate'

function MainPage () {
  const { isError, isLoading } = useDate()
  const { daysLeft, monthsLeft } = useCountdown()

  return (
    <>
      <div className='text-5xl'>MainPage</div>
      {
        isLoading ? (
          <p>Cargando...</p>
        ) : !isError ? (
          <p>Queda aproximadamente {monthsLeft >= 1 && `${ monthsLeft } meses y`} { daysLeft } días</p>
        ) : (
          <p>Ha ocurrido un error</p>
        )
      }
      <Link to='confirm_assist'>Confirma tu asistencia aqui!</Link>
    </>

  )
}

export default MainPage