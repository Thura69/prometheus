import React from 'react'
import './ContactUs.scss'
import Header from './../../Components/Header/Header'
import Sidebar from './../../Components/Sidebar/Sidebar'

function ContactUs() {
  return (
    <div className='ContactUsbar' >
    <div className='sidebar'>
    <Sidebar/>
    </div>
     <div className='ContactUsbar__container'>
    <Header/>
   <div className='ContactUsbar__app'>
    <h2>spyking64@gmail.com</h2>
   </div>
     </div>
    </div>
  )
}

export default ContactUs