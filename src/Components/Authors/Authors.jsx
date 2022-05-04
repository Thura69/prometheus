import React from 'react'
import './Authors.scss'
import {Link} from 'react-router-dom'
function Authors() {
  return (
    <div className='authors container'>
    <h2>Authors</h2>
   <div className='authors__container'>
  
   <div className='item item1'>
   <Link to="/mgtunthu">
    <p>မောင်ထွန်းသူ</p>
    </Link>
    </div>
   
    
    <div className='item item2'>
    <Link to="/shweudaung">
    <p>ရွှေဥ‌ဒေါင်း</p>
    </Link>
    </div>
   
   
   <div className='item item3'>
   <Link to="/zawgyi">
    <p>‌ဇော်ဂျီ</p>
    </Link>
    </div>
  
    <div className='item item4'>
    <p>--</p>
    </div>
    <div className='item item5'>
    <p>--</p>
    </div>
    <div className='item item6'>
    <p>--</p>
    </div>
    <div className='item item7'>
    <p>--</p>
    </div>
    <div className='item item8'>
    <p>--</p>
    </div>
    <div className='item item9'>
    <p>--</p>
    </div>
    <div className='item item10'>
    <p>--</p>
    </div>
    <div className='item item11'>
    <p>--</p>
    </div>
    <div className='item item12'>
    <p>--</p>
    </div>
    <div className='item item13'>
    <p>--</p>
    </div>
    <div className='item item14'>
    <p>--</p>
    </div>
    <div className='item item15'>
    <p>--</p>
    </div>
   </div>
    </div>
  )
}

export default Authors