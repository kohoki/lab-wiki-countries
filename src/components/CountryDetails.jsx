import React from 'react'
import { useParams, Link} from 'react-router-dom'


function CountryDetails({list}) {
    const { id } = useParams();
    const newList = [...list];
    // console.log('projectId -->', id);
    const foundElement = newList.filter((element)=>
        element.alpha3Code === id
    )
    const borders = foundElement[0].borders
    // console.log(borders)
  return (
    <div className="col-7">
        
        <h1>{foundElement[0].name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{foundElement[0].capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {foundElement[0].area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {borders.map((element, index)=>{
                            {newList.map((element2)=>{     
                                {if(element === element2.alpha3Code){
                                    {/* {console.log(element2.name.common)} */}
                                    return (       
                                        <Link to={`/${element2.alpha3Code}`}>
                                            <li>{element2.name.common}</li>
                                        </Link>
                                        ) 
                                }}
                            })}
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
    </div>
  )
}

export default CountryDetails