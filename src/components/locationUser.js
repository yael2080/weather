import React, { useEffect, useState } from'react';
import WeatherUser from './weatherUser';
import DateAndHour from './dateAndHour';
import { useDispatch,useSelector } from 'react-redux';
import actions from '../redux/actions';
import './locationUser.css'

export default function  LocationUser(props){
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const dispatch = useDispatch();
    //אם הגישה נדחתה
    if( navigator.geolocation ) {

        navigator.geolocation.getCurrentPosition( function( location ) {
            console.log( `User location - Latitude: ${location.coords.latitude} | Longitude: ${location.coords.longitude}` );
            setLatitude(location.coords.latitude)
            setLongitude(location.coords.longitude)
            dispatch(actions.addCoordinates({latitude: latitude, longitude: longitude}))         
            let GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + location.coords.latitude + '%2C' + location.coords.longitude + '&language=en';
            // console.log( GEOCODING );
          
          }, function( error ) {
          
            if( error.PERMISSION_DENIED === error.code ) {
          
              console.error( 'Access to user location was denied.' );
          
            } else {
          
              console.error( error.message );
          
            }
          
          }, {
            maximumAge: 3000,
            timeout: 10000,
            enableHighAccuracy: true
          }
           );
        
      } else {
       // אם הדפדפן אינו נתמך
        console.error( 'Geolocation is not supported.' );      
      }
    
    return(
        <>
        <div className="location-div-main">
          <div>
             <span className="location-span-th"> Current coordinates: </span>
             </div>
             <div>
             <span className="location-span"> latitude: {latitude}</span>
             </div>
             <div>
             <span className="location-span"> longitude: {longitude}</span>
             </div>
       
        <DateAndHour/>
        <WeatherUser lat={latitude} lon={longitude}/>
        </div>
        
      </>
    )
}
// import React, { useEffect, useState } from'react'
// import WeatherUser from './weatherUser';
// import DateAndHour from './dateAndHour';
// import { connect } from 'react-redux';
// import actions from '../redux/actions'

// function mapStateToProps(state) {
//     return {
//       coordinates: state.coordinates,
//     };
// }

// export default connect(mapStateToProps)(function LocationUser(props){
//   const {coordinates, dispatch } = props
//   const [latitude, setLatitude] = useState(0)
//   const [longitude, setLongitude] = useState(0)

//     //אם הגישה נדחתה
//     if( navigator.geolocation ) {

//         navigator.geolocation.getCurrentPosition( function( location ) {
//             console.log( `User location - Latitude: ${location.coords.latitude} | Longitude: ${location.coords.longitude}` );
//             setLatitude(location.coords.latitude)
//             setLongitude(location.coords.longitude)
//             dispatch( actions.addCoordinates({latitude: latitude, longitude: longitude}))         
          
//           }, function( error ) {
          
//             if( error.PERMISSION_DENIED === error.code ) {
          
//               console.error( 'Access to user location was denied.' );
          
//             } else {
          
//               console.error( error.message );
          
//             }
          
//           }, {
            
//             maximumAge: 3000,
//             timeout: 10000,
//             enableHighAccuracy: true
//           }
          
//            );
        
//       } else {
//        // אם הדפדפן אינו נתמך
//         console.error( 'Geolocation is not supported.' ); 
//       }
//     return (
//         <>
//          <h3>the latitude is: {latitude}</h3>
//          <h3>the longitude is: {longitude}</h3>
//         <DateAndHour/>
//         <WeatherUser lat={latitude} lon={longitude}/>
//         {/* <Link to='/history' >
//               <button>history</button>
//         </Link> */}
//         </>
//     )
// })

