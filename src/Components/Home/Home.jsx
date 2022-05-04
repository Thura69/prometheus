import React from 'react'
import Header from './../Header/Header'
import Sidebar from './../Sidebar/Sidebar'
import Categories from './../Categories/Categories'
import Slider from "../EditorChoice/Editorchoice";
import Authors from "../Authors/Authors";
import './Home.scss'

function Home() {
  return (
    <div className="home">
    <div className="sidebar"><Sidebar/></div>
    <div className="home__container">
    <Header/>
    <div className="accessory">
    <Categories/>
   <Slider/>
   <Authors/>
    </div>
    </div>
   </div>
  )
  }
export default Home