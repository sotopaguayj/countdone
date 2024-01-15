import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Invitation from './pages/Invitation'
import Confirm from './pages/Confirm'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <main className='min-h-screen grid place-items-center overflow-hidden grid-rows-layout'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='invitation/' element={<Invitation />} />
            <Route path='confirm_assist/' element={<Confirm />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </main>
    </>
  )
}

export default App
