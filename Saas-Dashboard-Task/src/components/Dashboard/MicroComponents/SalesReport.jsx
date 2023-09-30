import React from 'react'
import {
  ResponsiveContainer,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Brush,
} from 'recharts'
import { useState, useEffect } from 'react'
import { useAnimate, stagger, motion } from 'framer-motion'
import ScrollContainer from 'react-indiana-drag-scroll'
import { year, month, week } from '../../../assets/data.jsx'
import Yaxis from './Yaxis.jsx'

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 })

    animate(
      '.dropdown-slate',
      {
        clipPath: isOpen
          ? 'inset(0% 0% 0% 0% round 10px)'
          : 'inset(10% 50% 90% 50% round 10px)',
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.5,
      }
    )

    animate(
      'a',
      isOpen
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    )
  }, [isOpen])

  return scope
}

const SalesReport = () => {
  const [isOpen, setIsOpen] = useState(false)
  const scope = useMenuAnimation(isOpen)
  const [date, setDate] = useState('year')
  const [screen, setScreen] = useState(1300)
  const [screen2, setScreen2] = useState(700)
  useEffect(() => {
    if (window.innerWidth <= 500) {
      console.log(screen)
       setScreen(920)
       setScreen2(350)
       return
     }  
    if (window.innerWidth > 1366) {
      setScreen(1400)
      setScreen2(850);
      return;
    }
    else if (window.innerWidth <=820){
      setScreen(1200)
      setScreen2(550);
      return;
    }
 
    
    else {setScreen(1300); setScreen2(700)}
  }, [window.innerWidth])
  window.addEventListener('click', () => setIsOpen(false))
  return (
    <div className='sales-report'>
      <div className='sales-control'>
        <h2>Sales Report</h2>
        <div className='report-options'>
          <p>Earnings</p>
          <p>Marketing</p>
          <div
            className='dropdown'
            onClick={(e) => e.stopPropagation()}
            ref={scope}
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {date}
              <div className='arrow' style={{ transformOrigin: '50% 55%' }}>
                <i className='fa-solid fa-chevron-down' />
              </div>
            </motion.button>
            <div
              style={{
                pointerEvents: isOpen ? 'auto' : 'none',
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
              }}
              className='dropdown-slate'
            >
              <a
                onClick={() => {
                  setDate('week')
                  setIsOpen()
                }}
              >
                Week
              </a>
              <a
                onClick={() => {
                  setDate('month')
                  setIsOpen()
                }}
              >
                Month
              </a>
              <a
                onClick={() => {
                  setDate('year')
                  setIsOpen()
                }}
              >
                Year
              </a>
              <a
                onClick={() => {
                  setDate('all time')
                  setIsOpen()
                }}
              >
                All time
              </a>
            </div>
          </div>
        </div>
      </div>
      <Yaxis mode={date} />
      <ScrollContainer
        className='chart'
        vertical={false}
        onClick={() => setIsOpen(false)}
      >
        <ResponsiveContainer
          width={
            date === 'month'
              ? screen
              : screen2
          }
        >
          <LineChart
            width={700}
            height={150}
            data={
              date === 'year'
                ? year
                : date === 'month'
                ? month
                : date === 'week'
                ? week
                : year
            }
            margin={{ left: date === 'month' ? 310 : 40 }}
          >
            <CartesianGrid
              strokeDasharray='10'
              stroke='var(--chart-line)'
              vertical={false}
            />
            <Line
              type='monotone'
              dataKey='earnings'
              stroke='var(--light-purple)'
              strokeWidth={1}
              dot={false}
            />
            <Line
              type='monotone'
              dataKey='marketing'
              stroke='var(--light-aqua)'
              strokeWidth={1}
              dot={false}
            />
            <XAxis
              dataKey='name'
              axisLine={false}
              tickLine={false}
              // minTickGap={5}
              fontFamily='sora'
              fontSize='8pt'
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              fontFamily='sora'
              fontSize='8pt'
              hide={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </ScrollContainer>
    </div>
  )
}

export default SalesReport
