import React from 'react'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './MgTunThu.scss'
import arles from './338px-Tunthu.gif'
import mgTunThuArray from '../../Components/Data/authors/mgTunThu'
import {Link} from 'react-router-dom'
function MgTunThu() {
  return (
    <div className='translation'>
    <div className='sidebar'><Sidebar/></div>
    <div className='translation__container'>
    <Header/>
    <div className='translation__body container'>
     <div className='translation__wrapper'>
      <div className='translation__wrapper__container'>
      <img alt="mgtunthu1" className='translation__wrapper__img' src={arles}></img>
      <h2 className='translation__wrapper__title'>Mg Tun Thu</h2>
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
      mgTunThuArray.map((e)=>{
        return <Link to={`/${e.id}`}>
        <div className='card' key={e.id}>
              <div className='translation__card__container'> <img alt="mgtunthu2" className='translation__card__img' src={e.img}></img></div>
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

export default MgTunThu