import React from 'react'

const Yaxis = ({mode}) => {
  return (
   <div className="yaxis-wrapper">
    <div className='yaxis-container'>
      <a>{mode === 'week' ? '5' : mode === 'year' ? '18' : mode === 'month' ? '10' : '18'}k</a>
      <a>{mode === 'week' ? '4' : mode === 'year' ? '15' : mode === 'month' ? '8': '15'}k</a>
      <a>{mode === 'week' ? '3' : mode === 'year' ? '12' : mode === 'month' ? '6' : '12'}k</a>
      <a>{mode === 'week' ? '2' : mode === 'year' ? '9' : mode === 'month' ? '4': '9'}k</a>
      <a>{mode === 'week' ? 1 : mode === 'year' ? '6' : mode === 'month' ? '2': '6'}k</a>
    
    </div>
   </div>
  )
}

export default Yaxis
