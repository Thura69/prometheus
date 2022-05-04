import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { allBooks } from '../../Components/Data/KindsOfBooks/KindofBooks'
import Header from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Single.scss'

function Single() {
    const [array,setArry ] = useState([]);
    let params = useParams()

 console.log(params.userId)
  useEffect(()=>{
  const data = allBooks.filter((e)=>{
      return e.id === params.userId
  })
  setArry(data)
  },[ ])

  console.log(array)
  return (
    <div className='single'>
    <Sidebar/>
    <div className='single__container'>
    <Header/>
    <div className='single__body container'>
   {
       array.map((e)=>{
           return <div className='single__item'>
               <div className='single__img__container'>
            <img alt="single1" src={e.img}></img>
               </div>
               <div className='single__content'>
            <h2>{e.title}</h2>
            <h3>{e.author}</h3>
            <div className='single__categories'>
            <ul>
            {
                e.categories.map((a)=>{
                    return <li>{a}</li>
                })
            }
            </ul>
            </div>
            <h2>{e.size}</h2>
            <div className='single__button'>
            <a className='button' href={e.file} download>DownLoad</a>
            </div> 
           
               </div>
           </div>
       })
   }
    </div>
    </div>
    </div>
  )
}

export default Single