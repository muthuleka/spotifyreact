import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homes from '../Pages/Homes'
import Search from '../Pages/Search'
import Login from '../Components/Login/Login'
import Signup from '../Components/Login/Signup'
import Playlistall from '../Pages/Playlistall'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/'element={<Homes/>} />
        <Route path='/search'element={<Search/>} />
        <Route path='/login'element={<Login/>} />
        <Route path='/signup'element={<Signup/>} />
        <Route path='/playlist'element={<Playlistall/>} />
    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default Routing