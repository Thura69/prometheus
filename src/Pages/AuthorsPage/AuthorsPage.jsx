import React from 'react'
import './AuthorsPage.scss'
import Header from './../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Authors from '../../Components/Authors/Authors'

function AuthorsPage() {
  return (
    <div className='AuthorsPage' >
    <div className='sidebar'>
    <Sidebar/>
    </div>
     <div className='AuthorsPage__container'>
    <Header/>
   <div className='AuthorsPage__app'>
    <Authors/>
   </div>
     </div>
    </div>
  )
}

export default AuthorsPage