import React, {useRef } from 'react'
import './Header.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CategoryIcon from '@mui/icons-material/Category';
import {Link} from 'react-router-dom'

function Header() {
  const headerRef = useRef('');
  const menuRef = useRef('');

  

  const clickHandler = ()=>{
 menuRef.current.classList.toggle('active')
 
  }
  
  

  
  return (
    <header className='header ' ref={headerRef}>
    <div className='header__logo'>
    <Link to="/">
    <h2>Prometheus</h2>
    </Link>
    </div>
   <MenuIcon className='menu__icon' onClick={clickHandler}/>
    <div className='menu-container ' ref={menuRef}>
    <div className='nav'>
    <div className='info__nav'>
    <ul>
    <Link to="/">
    <li > Home</li>
    </Link>
    
    <Link to="/contactUs">
    <li>Contact Us</li>
    </Link>
   
    <Link to="/authorsPage">
    <li>Authors</li>
    </Link>
   
    </ul>
    </div>
    <div className='categories__part'>
    <h2><CategoryIcon className='categories__icon'/> Categories  </h2>
    <div className='categories__nav'>
    <ul className='categories__nav__item'>
    <Link to="/translation">
    <li >Translation</li>
    </Link>
    <Link to="/novels">
    <li>Novels</li>
    </Link>
    <Link to="/detective">
    <li>Detective</li>
    </Link>
    <Link to="/thriller">
    <li>Thriller</li>
    </Link>
    <Link to="/knowledge">
    <li>Knowledge</li>
    </Link>
    <Link to="/mystery">
    <li>Mystery</li> 
    </Link>
   
   
    
   
   
   




    </ul>
    </div>
    
    </div>
    </div>
    
        </div>
    </header>
  )
}

export default Header