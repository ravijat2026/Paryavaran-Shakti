import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Vision from './pages/Vision'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Events from './pages/Events'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/vision' element = {<Vision/>} />
        <Route path='/events' element = {<Events/>} />
        <Route path='/team' element = {<Team/>} />
        <Route path='/blog' element = {<Blog/>} />
        <Route path='/contact' element = {<Contact/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
