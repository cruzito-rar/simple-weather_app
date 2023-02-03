import {Fragment, useEffect, useState} from 'react';
import {Icons} from '../../components/Icons';
import '../styles/App.css';

function App() {
 const [search, setSearch] =  useState('San Salvador');
 const [values, setValues] =  useState('');
 const [icon, setIcon] =  useState('');

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=0ca7fb8919814e59836c2f5d2c86d168`;

 const dailyUrl = `api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}`;

 var today = new Date();
 var day = today.getDate();
 var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 var year = today.getFullYear();

 if(day <= 9) {
  day = '0'+day;
 }

 var date = day+'/'+month[today.getMonth()]+'/'+year;
 
 const getData = async () => {
  
  await fetch(url)
  .then(response => {return response.json()})
  .then(data => {

   if(data.cod >= 400) {
    setValues(false);
   }
   else {
    setValues(data);
    setIcon(data.weather[0].main);
   }
   console.log(data);
  })
  .catch(error => {
   console.log(error);
  });
 }

 const handlerSearch = (event) => {
  if(event.key === 'Enter') {
   setSearch(event.target.value);
  }
 }

 useEffect(() => {
  getData();
 }, [search]);

 return (
  <Fragment>
   <div className='container'>
    <h2> Weather City Visualizer </h2>
   </div>
   <div className='card'>
    {(values) ? (
      <div className='card-container'>
       <div className='row'>
        <input className='' type="text" onKeyDown={handlerSearch} autoFocus placeholder='Buscar'/>
       </div>
       <h1 className='card-city-name'> {values.name}, <span> {values.sys.country} </span> </h1>
       <p className='date'> {date} </p>
       <p className='card-temperature'> {values.main.temp.toFixed(2)}&deg; </p>
       <p className='card-weather'> {values.weather[0].description.charAt(0).toUpperCase()+values.weather[0].description.slice(1)} </p>
       <img className='card-icon' src={Icons(icon)}/>
       <div className='card-footer'>
        <p className='min-max-temperature'> <i className='fas fa-thermometer-empty'> </i> {values.main.temp_min.toFixed(2)}&deg; | <i className='fas fa-thermometer-full'> </i> {values.main.temp_max.toFixed(2)}&deg; </p>
        <span> - </span>
        <div className='card-footer-extra'>
         <p className='humidity-wind'> <i className='fas fa-tint'> </i> {values.main.humidity.toFixed()}% | <i className='fas fa-location-arrow'> </i> {values.wind.speed.toFixed(2)} m/s </p>
        </div>
       </div>
      </div>
     ) : (
      <h1> {'Ciudad no encontrada'} </h1>
     )
    }
   </div>
  </Fragment>
 );
}

export default App;