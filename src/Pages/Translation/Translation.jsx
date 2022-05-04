import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Translation.scss'
import arles from './../../Components/Categories/img/Van_Gogh_-_Terrasse_des_Cafés_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg'
import { translation } from '../../Components/Data/KindsOfBooks/KindofBooks'
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
      <img className='translation__wrapper__img' alt="Translation1" src={arles}></img>
      <h2 className='translation__wrapper__title'>Translation</h2>
      </div>
      <div className='translation__quote'>
      <p className='translation__quote__description'>
      "When did a dragon ever die from the poison of a snake"
      </p>
      <p className='translation__quote__author'>-Nietzsche</p>
      </div>

     </div>
     <div className='translation__books__container'>
    {
      translation.map((e)=>{
        return <div>
           <Link to={`/${e.id}`}>
        <div className='card' key={e.id}>
              <div className='translation__card__container'> <img className='translation__card__img' alt="Translation2" src={e.img}></img></div>
              <h4 className='translation__card__name'>{e.title}</h4>
              <span className='style'></span>
        </div>
           </Link>
        </div>
      })
    }
     </div>
    </div>
   
    </div>
    </div>
  )
}

export default Translation