import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Novels.scss'
import flowers from "./../../Components/Categories/img/van-gogh---irises-van-gogh-museum.10082613753953305911.jpg"
import {Link} from 'react-router-dom'
import { novel } from '../../Components/Data/KindsOfBooks/KindofBooks'
function Translation() {
  return (
    <div className='translation'>
    <div className='sidebar'><Sidebar/></div>
    <div className='translation__container'>
    <Header/>
    <div className='translation__body container'>
     <div className='translation__wrapper'>
      <div className='translation__wrapper__container'>
      <img alt="novel1" className='translation__wrapper__img' src={flowers}></img>
      <h2 className='translation__wrapper__title'>Novels</h2>
      </div>
      <div className='translation__quote'>
      <p className='translation__quote__description'>
      "There is nothing either good or bad, but thinking makes it so."
      </p>
      <p className='translation__quote__author'>-William Shakespeare </p>
      </div>

     </div>
     <div className='translation__books__container'>
    {
      novel.map((e)=>{
        return <Link to={`/${e.id}`}>
        <div className='card' key={e.id}>
              <div className='translation__card__container'> <img alt="novel2" className='translation__card__img' src={e.img}></img></div>
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