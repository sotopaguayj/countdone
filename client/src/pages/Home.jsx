import Digit from '../components/Digit'
import Loader from '../components/Loader'
import Alert from '../components/Alert'
import NavButton from '../components/NavButton'

import { useCountdown } from '../hooks/useCountdown'

function Home () {
  const { timeLeft, isError, isLoading } = useCountdown()

  return (
    <>
      <header className='md:text-5xl text-3xl font-bold uppercase text-slate-50 text-center'>
        MainPage
      </header>
      <section className='text-center flex flex-col max-w-screen-md items-center'>
        {isLoading ? (
          <div className='grid place-content-center'>
            <Loader />
          </div>
        ) : !isError ? (
          <>
            <div className='flex justify-evenly gap-x-4 my-6'>
              <Digit value={ timeLeft.months || 0 } name='Meses' />
              <Digit value={ timeLeft.days || 0} name='Días' />
              <Digit value={ timeLeft.hours || 0} name='Horas' />
              <Digit value={ timeLeft.minutes || 0} name='Minutos' />
            </div>
            <NavButton
              path='confirm_assist'
              text='Confirma tu asistencia aqui!'
            />
          </>
        ) : (
          <div className='grid place-content-center'>
            <Alert
              type='error'
              title='Ha ocurrido un error'
              message='Sin conexión al servidor'
            />
          </div>
        )}
      </section>
    </>
  )
}

export default Home
