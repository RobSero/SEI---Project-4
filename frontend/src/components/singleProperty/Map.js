import React from 'react'
import MapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'
import RoomIcon from '@material-ui/icons/Room'


function Map(props) {

  return (
    <div style={{ width: '100%', height: '350px', backgroundColor: 'blue' }}>
      <MapGL 
        mapboxApiAccessToken='pk.eyJ1Ijoicm9ic2VybyIsImEiOiJja2E1NWhibDUxMGk4M2xvZ2Q4Z2dwOXp1In0.SQ2ynnVjGQa9f8gi1fN6LA'
        height={'100%'} // size
        width={'100%'} // size
        mapStyle={'mapbox://styles/mapbox/light-v10'} //check docs for other styles
        latitude={props.lat} //position
        longitude={props.lon} //position
        zoom={15} //higher number, higher the zoom
      >
      
        <Marker latitude={props.lat}  longitude={props.lon}>
          <RoomIcon />
        </Marker>
     
      </MapGL>
    </div>
    
  )
}


export default Map
