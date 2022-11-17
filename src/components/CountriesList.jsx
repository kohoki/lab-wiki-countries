import React from 'react'
import {Link} from 'react-router-dom'
function CountriesList({list}) {
    console.log(list)
  return (
    <div>
        {list.map((element, index) => {
            return (
                <div key= {index} className="col-5" style={{maxheight: '90vh'}}>
                    <div className="list-group">
                        <Link to={`/${element.alpha3Code}`} className="list-group-item list-group-item-action">
                            <img
                                src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`}
                                alt={element.name.common}/>
                            <p>{element.name.common}</p>
                        </Link>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
export default CountriesList