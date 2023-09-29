import React, { useEffect, useState, useRef } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import './Main.css'
import profile from '../../assets/profile.jpg'

import SalesReport from './MicroComponents/SalesReport'
import AiAnalytics from './MicroComponents/AiAnalytics'
import SalesTime from './MicroComponents/SalesTime'
import SalesLocation from './MicroComponents/SalesLocation'
import PaymentHistory from './MicroComponents/PaymentHistory'
import AddWidget from '../AddWidget/AddWidget'
import { viewWidget, toggleWidget } from '../../features/UXSlice'
import { useSelector, useDispatch } from 'react-redux'
const Main = () => {
  const {showWidget, drag, mouseOut, toggle} = useSelector((state) => state.ux)

  const [smooth, setSmooth] =useState(true)
  const dispatch = useDispatch()
  const ref = useRef(null)
  



  window.addEventListener('click', ()=>{
    dispatch(viewWidget(false))
  })
  return (
    <div className='main-wrapper'>
      <div className='main-container'>
        {showWidget && <AddWidget />}
        <section className='main-search'>
          <div className='search-bar'>
            <i className='fa-solid fa-magnifying-glass' />
            <input type='text' placeholder='search some data' />
          </div>
          <div className='control-center'>
            <i className='fa-regular fa-moon' />
            <i className='fa-regular fa-bell' />
            <img src={profile} alt='profile' />
          </div>
        </section>
        <section className='main-title'>
          <h1>
            Welcome back, <span>Jessica!</span>
          </h1>
          <div className='options'>
            <a
              onClick={(e) => {
                e.stopPropagation()
                dispatch(viewWidget(true))
              }}
            >
              <i className='fa-solid fa-plus add'></i>Add new widget
            </a>
            <a>
              <i className='fa-solid fa-download export' />
              Export reports
            </a>
          </div>
        </section>
        <section className='main-content'>
          <div className='top-content'>
            {/* responsive chart */}
            <SalesReport />
            <AiAnalytics />
          </div>
          <div className='bottom-content'>
            <SalesTime />
            <motion.div
              className='drop-location roll'
              ref={ref}
              style={{
                transform:
                  drag &&
                  mouseOut &&
                  showWidget &&
                  smooth &&
                  'translateY(20px)',
                transition: '0.5s',
              }}
              onMouseEnter={() => setSmooth(true)}
              // onMouseLeave={() => setSmooth(false)}
            >
              {drag && mouseOut && showWidget && smooth && (
                <motion.div
                  className='purple-line'
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              )}
              {toggle ? <SalesLocation/> : <PaymentHistory />}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Main
