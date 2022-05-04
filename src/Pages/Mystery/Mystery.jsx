import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Mystery.scss'
import arles from './../../Components/Categories/img/improvised-road-with-cypress-and-star.jpg'
import { mystery } from '../../Components/Data/KindsOfBooks/KindofBooks'
import {Link} from 'react-router-dom'
function Mystery() {
  return (
    <div className='translation'>
    <div className='sidebar'><Sidebar/></div>
    <div className='translation__container'>
    <Header/>
    <div className='translation__body container'>
     <div className='translation__wrapper'>
      <div className='translation__wrapper__container'>
      <img className='translation__wrapper__img' alt="mystery1" src={arles}></img>
      <h2 className='translation__wrapper__title'>Mystery</h2>
      </div>
      <div className='translation__quote'>
      <p className='translation__quote__description'>
      "Wonder is the beginning of wisdom."
      </p>
      <p className='translation__quote__author'>-Socrates</p>
      </div>

     </div>
     <div className='translation__books__container'>
    {
      mystery.map((e)=>{
        return <Link to={`/${e.id}`}>
        <div className='card' key={e.id}>
              <div className='translation__card__container'> <img alt="mystery1" className='translation__card__img' src={e.img}></img></div>
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

export default Mystery