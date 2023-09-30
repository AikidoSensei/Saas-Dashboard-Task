import React, { useEffect, useState } from 'react'
import './AddWidget.css'
import curve from '../../assets/Curves.png'
import lines from '../../assets/Lines.png'
import pentagon from '../../assets/Pentagon.png'
import circle from '../../assets/Circles.png'
import squares from '../../assets/Squares.png'
import bars from '../../assets/Bars.png'
import map from '../../assets/Map.png'
import {
  dragging,
  mouseout,
  viewWidget,
  close,
  toggleWidget,
} from '../../features/UXSlice'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
const AddWidget = () => {
  const {drag, mouseOut, showWidget, close, toggle } = useSelector((state) => state.ux)
  
 const dispatch = useDispatch()
 
  return (
    <AnimatePresence key='mykey'>
      <motion.div
        className='widget-wrapper'
        key='widget'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          backgroundColor:
            mouseOut === true && drag === true ? 'transparent' : 'var(--slate)',
          transition: '0.3s',
          border: 'none',
        }}
      >
        <motion.div
          className='widget-container'
          onClick={(e) => {
            e.stopPropagation()
            // console.log(e)
          }}
          onMouseLeave={() => {
            console.log(drag, mouseOut)
            if (drag === true) {
              dispatch(mouseout(true))
            } else {
              dispatch(mouseout(false))
            }
          }}
          animate={{
            scale: mouseOut === true && drag === true ? [0.5, 1] : '1',
          }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor:
              mouseOut === true && drag === true
                ? 'transparent'
                : 'var(--primary)',
            transition: '0.3s',
            border: 'none',
          }}
        >
          <motion.div
            className='cancel-btn'
            animate={{
              opacity: mouseOut === true && drag === true ? '0' : '1',
            }}
            onClick={() => {
              dispatch(viewWidget(false))
            }}
          >
            <i className='fa-solid fa-xmark' />
          </motion.div>
          <div className='widget-content'>
            <motion.div
              className='widget-title'
              animate={{
                opacity: mouseOut === true && drag === true ? '0' : '1',
              }}
            >
              <h1>Drag new widget</h1>
              <p>
                Boost your data awareness with widgets. <br />
                Just hold and drag!
              </p>
            </motion.div>
            <div className='widget-collection'>
              <motion.div
                className='widget check'
                drag
                whileDrag={{ scale: 0.9 }}
                dragSnapToOrigin={true}
                dragConstraints={{ left: 100, right: 100 }}
                animate={{
                  opacity: mouseOut === true && drag === true ? '0' : '1',
                }}
              >
                <div className='checked'>
                  <i class='fa-solid fa-check'></i>
                </div>
                <div className='widget-image'>
                  <img src={curve} alt='curve' />
                  <p>Sales Report</p>
                </div>
              </motion.div>
              <motion.div
                className='widget'
                drag
                whileDrag={{ scale: 0.9 }}
                dragSnapToOrigin={true}
                dragConstraints={{ left: 100, right: 100 }}
                animate={{
                  opacity: mouseOut === true && drag === true ? '0' : '1',
                }}
              >
                <div className='widget-image'>
                  <img src={bars} alt='bars' />
                  <p>Customer Growth</p>
                </div>
              </motion.div>

              <motion.div
                className='widget'
                drag
                whileDrag={{ scale: 0.9 }}
                dragSnapToOrigin={true}
                dragConstraints={{ left: 100, right: 100 }}
                animate={{
                  opacity: mouseOut === true && drag === true ? '0' : '1',
                }}
              >
                <div className='widget-image'>
                  <img src={pentagon} alt='pentagon' />
                  <p>Traffic source</p>
                </div>
              </motion.div>
              <motion.div
                className='widget'
                drag
                whileDrag={{ scale: 0.9 }}
                dragSnapToOrigin={true}
                dragConstraints={{ left: 100, right: 100 }}
                animate={{
                  opacity: mouseOut === true && drag === true ? '0' : '1',
                }}
              >
                <div className='widget-image'>
                  <img src={circle} alt='circle' />
                  <p>Visitors</p>
                </div>
              </motion.div>
              <motion.div
                className='widget check'
                drag
                whileDrag={{ scale: 0.9 }}
                dragSnapToOrigin={true}
                dragConstraints={{ left: 100, right: 100 }}
                animate={{
                  opacity: mouseOut === true && drag === true ? '0' : '1',
                }}
              >
                <div className='checked'>
                  <i class='fa-solid fa-check'></i>
                </div>
                <div className='widget-image'>
                  <img src={squares} alt='squares' />
                  <p>Sales by Time</p>
                </div>
              </motion.div>
              <motion.div
                className='widget'
                drag
                whileDrag={{ scale: 0.9 }}
                dragConstraints={{ left: 200, right: 200 }}
                onMouseDown={() => {
                  dispatch(dragging(true))
                }}
                onMouseUp={() => {
                  dispatch(viewWidget(false))
                  dispatch(dragging(false))
                  dispatch(mouseout(false))
                  dispatch(toggleWidget())
                }}
                animate={{
                  opacity: mouseOut === true && drag === true ? '1000' : '10',
                }}
              >
                <div className='widget-image'>
                  <img src={toggle ? lines : map} alt='lines' />
                  <p>{toggle ? 'Payment History' : 'Sales by Location'}</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              className='show-more'
              animate={{
                opacity: mouseOut === true && drag === true ? '0' : '1',
              }}
            >
              <div className='more-content'>
                <i className='fa-solid fa-chevron-down' />
                <p>Show more</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AddWidget
