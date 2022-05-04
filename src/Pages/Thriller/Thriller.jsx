import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Thriller.scss'
import arles from './../../Components/Categories/img/Rembrendt-Ankur-F-v2.webp'
import { thriller } from '../../Components/Data/KindsOfBooks/KindofBooks'
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
      <img className='translation__wrapper__img' alt="thriller1" src={arles}></img>
      <h2 className='translation__wrapper__title'>Thriller</h2>
      </div>
      <div className='translation__quote'>
      <p className='translation__quote__description'>
      "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do, you have to keep moving forward."
      </p>
      <p className='translation__quote__author'>-Martin Luther King Jr.</p>
      </div>

     </div>
     <div className='translation__books__container'>
    {
      thriller.map((e)=>{
        return <Link to={`/${e.id}`}>
        <div className='card' key={e.id}>
              <div className='translation__card__container'> <img alt="thriller2" className='translation__card__img' src={e.img}></img></div>
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