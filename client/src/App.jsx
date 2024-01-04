import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Invitation from './pages/Invitation'
import Confirm from './pages/Confirm'


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='invitation/' element={ <Invitation />} />
        <Route path='confirm_assist/' element={ <Confirm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
