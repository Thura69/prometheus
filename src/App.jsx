import React from 'react'
import Home from './Components/Home/Home'
import Translation from './Pages/Translation/Translation'
import Novels from './Pages/Novels/Novels'
import Detective from './Pages/Detective/Detective'
import Thriller from './Pages/Thriller/Thriller'
import Knowledge from './Pages/Knowledge/Knowledge'
import Mystery from './Pages/Mystery/Mystery'
import Single from './Pages/Single/Single'
import MgTunThu from './Pages/MgTunThu/MgTunThu'
import ShweUDaung from './Pages/ShweUDaung/ShweUDaung'
import ZawGyi from './Pages/ZawGyi/ZawGyi'
import AuthorsPage from './Pages/AuthorsPage/AuthorsPage'
import ContactUs from './Pages/ContactUs/ContactUs'

import './App.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/translation' element={<Translation/>} />
  <Route path='/novels' element={<Novels/>}/>
  <Route path='/detective' element={<Detective/>}/>
  <Route path='/thriller' element={<Thriller/>}/>
  <Route path='/knowledge' element={<Knowledge/>}/>
  <Route path='/mystery' element={<Mystery/>}/>
  <Route path='/:userId' element={<Single/>}/>
  <Route path='/mgtunthu' element={<MgTunThu/>}/>
  <Route path='/shweudaung' element={<ShweUDaung/>}/>
  <Route path='/zawgyi' element={<ZawGyi/>}/>
  <Route path='/authorsPage' element={<AuthorsPage/>}/>
  <Route path='/contactUs' element={<ContactUs/>}/>

  </Routes>
 </BrowserRouter>
  )
}

export default App