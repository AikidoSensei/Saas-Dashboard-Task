import React, {useState} from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json'

const MapChart = () => {
  const [data, setData] = useState([])
  return (
    <div className='map'>
      <ComposableMap
        width={850}
        height={350}
        projection='geoEqualEarth'
        projectionConfig={{
          scale: [125],
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill='var(--unlock-tile)'
                stroke='var(--primary)'
                strokeWidth={0.1}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  )
}

export default MapChart
