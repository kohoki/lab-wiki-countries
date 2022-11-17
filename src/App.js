import countries from './countries.json';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <div className="row">
        <CountriesList list = {countries}/>
      </div>
    </div>
  );
}

export default App;
