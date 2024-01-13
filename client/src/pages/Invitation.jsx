import confeti from 'canvas-confetti'
import { useLocation } from 'react-router-dom'
import GraduationCanvas from '../components/canvas/GraduationCanvas'
import { Tilt } from 'react-tilt'
import Graduation from '../components/icons/Graduation'

function Invitation() {
  const location = useLocation()
  const { name } = location.state

  confeti()

  return (
    <main className='h-screen grid place-content-center overflow-hidden'>
        <Tilt>
          <div
            id='card'
            className=' border-sky-500 border-4 relative mx-auto text-white m-5 shadow-xl shadow-black/50 rounded'
          >
            <header className='flex justify-between items center'>
              <div className='flex items-center gap-2 pl-5'>
                <Graduation />
                <div className='pt-2 ml-2'>
                  <p className='uppercase font-bold text-2xl'>{name}</p>
                  <p className='opacity-60 text-sm'>Invitado Especial</p>
                </div>
              </div>
              <div className='tag-clip-path bg-sky-500/10 backdrop-blur-sm  px-5 grid place-content-center'>
                <span className='text-sky-500 font-semibold'>#1124078241</span>
              </div>
            </header>
            <section className='flex justify-around items-center py-6 flex-wrap'>
              <div>
                <GraduationCanvas />
              </div>
              <div className='flex gap-4 flex-col m-4 flex-[1_0_350px]'>
                <div className='bg-gradient-to-bl from-sky-900 via-sky-700 to-sky-500 bg-clip-text'>
                  <span className='text-transparent font-bold text-5xl'>
                    Fiesta de Grado
                  </span>
                </div>
                <span className='text-xl'>
                  📆 Marzo 15{' '}
                  <a
                    className='hover:text-sky-400 transition-colors'
                    href='https://maps.app.goo.gl/mbhnRYatpSbzPrVGA'
                    target='_blank' rel='noreferrer'
                  >
                    📍 Cra 12 #9-31
                  </a>{' '}
                  ⌚ 7 PM
                </span>
                <p className='opacity-80 text-pretty'>
                Es de mi agrado invitarte a la celebración de mi grado como
                ingeniero de sistemas, este es un logro muy importante para mi y
                quiero compartirlo contigo.
              </p>
              </div>
            </section>
          </div>
        </Tilt>
    </main>
  )
}

export default Invitation
