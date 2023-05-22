import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import  Home  from './Pages/Home'
import About from './Pages/About'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Payment from './Pages/Payment'


function App() {

  return (
    <>
      <Router>
        <div >
          <Navbar /> 
          <Routes>
            <Route path='/' Component={Home } />
            <Route path='/about' Component={About} />
            <Route path='/sign-up' Component={SignUp} />
            <Route path='/login' Component={Login} />
            <Route path='/dashboard' Component={Dashboard} />
            <Route path='/pay' Component={Payment} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
