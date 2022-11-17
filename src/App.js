import countries from './countries.json';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import {Route, Routes} from 'react-router-dom'
import CountryDetails from './components/CountryDetails';

function App() {
  
  return (
    <div className="App">
        <Navbar/>
        <div className="container">  
          <div className="row">
            <CountriesList list = {countries}/>
            
            <Routes>
              <Route 
                path="/:id" 
                element={ <CountryDetails list={countries} /> } />
            </Routes>
            
          </div>
        </div>
    </div>
  );
}

export default App;
