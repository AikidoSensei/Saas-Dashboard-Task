import React from 'react'
import './Sidebar.css'
import logo from '../../assets/logo.png'
import overview from '../../assets/overview.png'
import { useSelector } from 'react-redux'
const Sidebar = () => {
   const { showSidebar } = useSelector(
     (state) => state.ux
   )
  return (
    <div className={showSidebar ?'show sidebar-wrapper':'sidebar-wrapper'} onClick={
      (e)=>{
        e.stopPropagation()
      }
    }>
      <div className='sidebar-container'>
        <section className='header'>
          <img src={logo} className='logo' alt='logo' />
          <p>AnalyThis</p>
        </section>
        <section className='menu'>
          <a href=''>
            <span>
              <img src={overview} alt='overview' />
              Overview
            </span>
          </a>
          <a href=''>
            <span>
              <i className='fa-solid fa-chart-line'></i>
              Analytics
            </span>
          </a>
          <a href=''>
            <span>
              <i className='fa-solid fa-suitcase'></i>
              Campaign
            </span>
          </a>
          <a href=''>
            <span>
              <i className='fa-solid fa-box-archive'></i>
              Products
            </span>
          </a>
          <a href=''>
            <span>
              <i className='fa-solid fa-wallet'></i>
              Payout
            </span>
          </a>
          <a href=''>
            <span>
              <i className='fa-regular fa-calendar'></i>
              Schedules
            </span>
          </a>
          <a href=''>
            <span>
              <i className='fa-regular fa-file-lines'></i>
              Reports
            </span>
          </a>
        </section>
        <section className='new-features'>
          <h3>
            Unlock new <br /> features
          </h3>
          <button className='button'>Get pro now</button>
          <div className='unlock'>
            <i className='fa-solid fa-unlock fa-flip-horizontal'></i>
          </div>
        </section>
        <section className=' settings'>
          <a href=''>
            <span>
              <i className='fa-solid fa-gear'></i>
              Settings
            </span>
          </a>
          <a href=''>
            <span>
              <i className='fa-regular fa-comment-dots'></i>
              Support
            </span>
          </a>
        </section>
      </div>
    </div>
  )
}

export default Sidebar
