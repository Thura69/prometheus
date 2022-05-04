import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Detective.scss'
import detectiveImg from './../../Components/Categories/img/GUSTAFSON_Sherlock_Holmes.jpg'
import { detective } from '../../Components/Data/KindsOfBooks/KindofBooks'
import {Link} from 'react-router-dom'
function Translation() {
  return (
    <div className='translation'>
    <div className='sidebar'><Sidebar/></div>
    <div className='translation__container'>
    <Header/>
    <div className='translation__body container'>
     <div className='translation__wrapper'>
      <div className='translation__wrapper__container'>
      <img className='translation__wrapper__img' alt="detective1" src={detectiveImg}></img>
      <h2 className='translation__wrapper__title'>Detective</h2>
      </div>
      <div className='translation__quote'>
      <p className='translation__quote__description'>
      "To a great mind, nothing is little"
      </p>
      <p className='translation__quote__author'>-Sherlock Holems</p>
      </div>

     </div>
     <div className='translation__books__container'>
    {
      detective.map((e)=>{
        return <Link to={`/${e.id}`}>
        <div className='card' key={e.id}>
              <div className='translation__card__container'> <img alt="detective2" className='translation__card__img' src={e.img}></img></div>
              <h4 className='translation__card__name'>{e.title}</h4>
              <span className='style'></span>
        </div>
           </Link>
      })
    }
     </div>
    </div>
   
    </div>
    </div>
  )
}

export default Translation