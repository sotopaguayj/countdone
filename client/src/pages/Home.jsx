import { Link } from 'react-router-dom'
import useCountdown from '../hooks/useCountdown'
import useDate from '../hooks/useDate'
import Digit from '../components/Digit'

function MainPage() {
  const { isError, isLoading } = useDate()
  const { daysLeft, monthsLeft } = useCountdown()
  return (
    <>
      <header className='text-5xl'>MainPage</header>
      <main>
        {
          isLoading ? (
            <p>Cargando...</p>
          ) : !isError ? (
            <>
              <Digit value={monthsLeft} />
              <Digit value={daysLeft} />
            </>
          ) : (
            <p>Ha ocurrido un error</p>
          )
          }
        
        <Link to='confirm_assist'>Confirma tu asistencia aqui!</Link>
      </main>
    </>

  )
}

export default MainPage