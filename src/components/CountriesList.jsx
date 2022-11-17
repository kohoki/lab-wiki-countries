import React from 'react'
import {Link} from 'react-router-dom'
function CountriesList({list}) {
    
  return (
    <div  className="col-5" style={{maxheight: '90vh'}}>
        <div className="list-group">
            {list.map((element, index) => {
                return (
                        <Link key= {index} to={`/${element.alpha3Code}`} className="list-group-item list-group-item-action">
                            <img
                                src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`}
                                alt={element.name.common}/>
                            <p>{element.name.common}</p>
                        </Link>
                )
            })}
        </div>
    </div>
  )
}
export default CountriesList