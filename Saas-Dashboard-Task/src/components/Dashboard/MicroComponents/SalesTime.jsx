import React from 'react'

const SalesTime = () => {
  let grid = []
   for (let i = 0; i < 49; i++) {
    const rand = Math.floor(Math.random() * 49)
    grid.push({index:i+1, rand: rand})
   }
  return (
    <div className='time-wrapper'>
      <div className='time-title'>
        <h2>Sales by Time</h2>
      <div className="time-axis">
       <p>0 am</p>
       <p>4 am</p>
       <p>8 am</p>
       <p>12 am</p>
       <p>4 am</p>
       <p>8 am</p>
       <p>12 am</p>
      </div>
      <div className="day-axis">
       <p>sun</p>
       <p>mon</p>
       <p>tue</p>
       <p>wed</p>
       <p>thu</p>
       <p>fri</p>
       <p>sat</p>
      </div>
        <div className='time-options'>
          <button>
            GMT-8
              <i className='fa-solid fa-chevron-down' />
          </button>
        </div>
      </div>
      <div className='time-grid'>
       {grid.map((n, index)=>{
        return (
         <div className="box" 
         style={{backgroundColor:n.rand % 3 === 1 ? 'var(--dark-aqua)': n.rand % 2 === 0 ? 'var(--mid-aqua)' : 'var(--light-aqua)'}}
         key={index}
         >

         </div>
        )
       })}
      </div>
    </div>
  )
}

export default SalesTime
