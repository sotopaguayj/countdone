import { Link } from 'react-router-dom'
import useCountdown from '../hooks/useCountdown'
import useDate from '../hooks/useDate'

import Digit from '../components/Digit'

function MainPage() {
  const { isError, isLoading } = useDate()
  const { daysLeft, monthsLeft } = useCountdown()

  return (
    <>
      <header className='text-5xl uppercase text-slate-50 text-center'>MainPage</header>
      <main className='text-center'>
        {
          isLoading ? (
            <p>Cargando...</p>
          ) : !isError ? (
            <div className='flex justify-center gap-x-4'>
              <Digit value={ monthsLeft } name='Meses' />
              <Digit value={ daysLeft } name='Días' />
            </div>
          ) : (
            <p>Ha ocurrido un error</p>
          )
          }
        
        <Link to='confirm_assist' className='text-white text-lg font-bold uppercase'>Confirma tu asistencia aqui!</Link>
      </main>
    </>

  )
}

export default MainPage