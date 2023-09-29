import React from 'react'
import MapChart from './MiniMap'
import usa from '../../../assets/usa.png'
import australia from '../../../assets/australia.png'
import turkey from '../../../assets/turkey.png'
import ukraine from '../../../assets/ukraine.png'
const SalesLocation = () => {
  return (
    <div className='location-wrapper'>
      <div className='time-title'>
        <h2>Sales by Location</h2>
        <div className='time-options'>
          <button>
            Week
            <i className='fa-solid fa-chevron-down' />
          </button>
        </div>
      </div>
      <div className="country-data">
        <span>
          <img src={usa} alt="usa" />
          <p>United States <span> -712</span></p>          
        </span>
        <span>
          <img src={turkey} alt="turkey" />
          <p>Turkey <span> -452</span></p>          
        </span>
        <span>
          <img src={ukraine} alt="ukraine" />
          <p>Ukraine <span> -712</span></p>          
        </span>
        <span>
          <img src={australia} alt="australia" />
          <p>Australia <span> -712</span></p>          
        </span>
      </div>
      <div className='map-container'>
        <MapChart/>
      </div>
    </div>
  )
}

export default SalesLocation
