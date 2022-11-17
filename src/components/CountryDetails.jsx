import React from 'react'
import { useParams, Link } from 'react-router-dom'

function CountryDetails({list}) {
    const { id } = useParams();
    // console.log('projectId -->', id);
    // console.log(list)
  return (
    <div className="col-7">
        <p>CountryDetails: {id}</p>
    </div>
    
  )
}

export default CountryDetails