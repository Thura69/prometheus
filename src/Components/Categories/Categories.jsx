import React from 'react'
import './Categories.scss'
import arles from "./img/Van_Gogh_-_Terrasse_des_Cafés_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg"
import flowers from "./img/van-gogh---irises-van-gogh-museum.10082613753953305911.jpg"
import detective from './img/GUSTAFSON_Sherlock_Holmes.jpg'
import thriller from './img/Rembrendt-Ankur-F-v2.webp'
import knowledge from './img/8259a6ab531656700b2650ef57c577f3df8a37b5.jpg'
import mystery from './img/improvised-road-with-cypress-and-star.jpg'
import {Link} from "react-router-dom"
function Categories() {
  return (
    <div className='categories container '>
    <div className='categories-pictures '>
   <Link to="/translation">
   <div className='picture'>
    <img className='image' alt="categories1" src={arles}></img>
    <p className='image__content'>Translation</p>
    </div>
   </Link>
  <Link to="/novels">
  <div className='picture'>
    <img className='image'  alt="categories2" src={flowers}></img>
    <p className='image__content'>Novels</p>
    </div>
  </Link>
  <Link to="/detective">
  <div className='picture'>
    <img className='image'  alt="categories3" src={detective}></img>
    <p className='image__content'>Detective</p>
    </div> 
  </Link>
  <Link to="/thriller">
  <div className='picture'>
    <img className='image'  alt="categories4" src={thriller}></img>
    <p className='image__content'>Thriller</p>
    </div>
  </Link>
  <Link to="/knowledge">
  <div className='picture'>
    <img className='image'  alt="categories5" src={knowledge}></img>
    <p className='image__content'>Knowledge</p>
    </div>
  </Link>
  <Link to="/mystery">
  <div className='picture'>
    <img className='image'  alt="categories6" src={mystery}></img>
    <p className='image__content'>Mystery</p>
    </div>
  </Link>
    </div>
    </div>
  )
}

export default Categories