import React from 'react'
import './Main.css'
import profile from '../../assets/profile.jpg'
const Main = () => {
  return (
    <div className='main-wrapper'>
      <div className='main-container'>
        <section className='main-search'>
          <div className='search-bar'>
            <i className='fa-solid fa-magnifying-glass'/>
            <input type='text' placeholder='search some data' />
          </div>
          <div className='control-center'>
            <i className='fa-regular fa-moon'/>
            <i className='fa-regular fa-bell'/>
            <img src={profile} alt='profile' />
          </div>
        </section>
        <section className='main-title'>
          <h1>
            Welcome back, <span>Jessica!</span>
          </h1>
          <div className='options'>
            <a href=''>
              <i className='fa-solid fa-plus add'></i>Add new widget
            </a>
            <a href=''>
              <i className='fa-solid fa-download export'/>Export reports
            </a>
          </div>
        </section>
        <section className='main-content'></section>
      </div>
    </div>
  )
}

export default Main
