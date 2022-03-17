import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return (
    <div>
      <h2>World Visiting Countries !!!</h2>
      <h3>Total Countries:{countries.length}</h3>
      {
        countries.map(country=><Country name={country.name.common} population={country.population} flags={country.flags.png}></Country>)
      }
    </div>
  )
}
function Country(props){
  return (
    <div className='country'>
      <img src={props.flags} alt="" />
      <h2>Name:{props.name}</h2>
      <p>Population:{props.population}</p>
    </div>
  )
}

export default App;
