import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux';
import { useDispatch,useSelector } from 'react-redux'
import actions from '../redux/actions'
// import {Table} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap'


// export default function  History(props){
//     const dispatch = useDispatch();
//     const {coordinates, dispatch } = props
//     // store.dispatch(actions.getCoordinates(response.data.allContacts.contacts))
//     console.log(coordinates.latitude)
//     return(
//         <>
//         <h2>this is the history </h2>
//           <h1>{coordinates}</h1>        
//         </>
//     )
// }
// import React from'react'



function mapStateToProps(state) {
    return {
        coordinates : state.coordinates,
        temperature : state.temperature
    };
}

export default connect(mapStateToProps)(function History(props){
    const {coordinates, temperature, dispatch } = props
    return (
        <>
          <Table hover size="sm">
      <thead>
        <tr>
          <th>latitude</th>
          <th>longitude</th>
          <th>temperature</th>         
          <th>name place</th>                          
        </tr>
      </thead>
      <tbody>
          { coordinates.coordinates.map((item, index)=> (
              <tr key={index}>          
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
              <td>{temperature.temperature}</td>
              <td>{}</td>                           
            </tr>  
         ))}    
      </tbody>
    </Table>
        </>
    )
})

