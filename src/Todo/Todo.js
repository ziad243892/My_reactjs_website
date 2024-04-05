import React, {useState} from 'react';
import './Todo.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Weather() {

   const [data, setData] = useState({})
   const [location, setLocation] = useState('')


   function getMyLocation() {
      function getLocation() {
         if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(showPosition);
         } else { 
          alert('Geolocation is not supported by this browser.')
         }
       }
       
       function showPosition(position) {
          let latitude = position.coords.latitude;
          let longitude = position.coords.longitude;
          const urlLocation = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8a87aeae5ffe7d394f13a29cf5d05305`

          function getLocationUrl() {
            if(navigator.geolocation) {
               axios.get(urlLocation).then((res) => {
                  setData(res.data)
               })
            }
         }
         getLocationUrl();
       }
       getLocation();

   }

   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8a87aeae5ffe7d394f13a29cf5d05305`
  


   const searchLocation = (event) => {
      if(event.key === 'Enter') {
         axios.get(url).then((res) => {
            setData(res.data)
         })
         setLocation('')
      }

   }






   function onClickLocation(event) {
      getMyLocation();
   }


   const currentDate = new Date();
   const options = { weekday: 'long',year: 'numeric',month: 'short',day: 'numeric' };

   const today = new Date()
   let tomorrow =  new Date()
   tomorrow.setDate(today.getDate() + 1)

   let afterTomorrow = new Date()
   afterTomorrow.setDate(today.getDate() + 2)

   let afterafterTomorrow = new Date()
   afterafterTomorrow.setDate(today.getDate() + 3)

   

return(



<section className='todo'>
    <div className='left-part'>
    <div>
    <p className='left-part__logo fw-bold'>My Forecast</p>
    </div>
       <div className='left-part__location'>
          <FontAwesomeIcon icon={faLocationDot} />
          <div>
             <p className='mb-0'>Current Location</p>
             <p className='mb-0 fw-bold'>{data.name}, {data.main ? data.sys.country : null}</p>
          </div>
       </div>
       <div className='left-part__search'>
          <p className='text-center fw-bold'>The Only Weather Forecast You Need</p>
          <div className='sep'></div>
          <div className='position-relative w-75 mx-auto'>
             <input value={location}
                      onChange={event => setLocation(event.target.value)}
                      placeholder='Enter Location'
                      onKeyPress={searchLocation} />
             <FontAwesomeIcon title='Enter Location' icon={faMagnifyingGlass} />
             <FontAwesomeIcon onClick={onClickLocation} title='Search' icon={faLocationCrosshairs} />
          </div>
       </div>
    </div>


    <div className='right-part'>
       <p className='title'>Today</p>
       <div className='right-part__card'>
          <div>

            
             {data.main ? <p className='dgree fw-bold p-0 mb-0'>{((data.main.temp) -272.15).toFixed(0)}<sup>o</sup> <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} title={data.weather[0].main} alt={data.weather[0].main} width='100px' auto='auto' /></p>  : null}
               

               {data.weather ? <p className='status p-0 fw-normal mb-0'>{data.weather[0].main}</p> : null}
            
               {data.weather ?  <p className='date p-0 fw-normal mb-0'>{currentDate.toLocaleDateString('en-us', options)}</p> : null}
          </div>
          <div className='sep'></div>
          <div className='info'>
          {data.main ? <p>RealFeel: <span className='fw-bold'>{(data.main.feels_like - 272.15).toFixed(0)}<sup>o</sup></span></p> : null}
          {data.main ? <p>Max Temp: <span className='fw-bold'>{(data.main.temp_max - 272.15).toFixed(0)}<sup>o</sup></span></p> : null}
          {data.main ? <p>Min Temp: <span className='fw-bold'>{(data.main.temp_min - 272.15).toFixed(0)}<sup>o</sup></span></p> : null}
          {data.main ? <p>Humidity: <span className='fw-bold'>{data.main.humidity}%</span></p> : null}
          {data.wind ? <p>Wind Speed: <span className='fw-bold'>{(data.wind.speed * 1.60934).toFixed(0)} KM</span></p> : null}
          {data.visibility ? <p>Visibility: <span className='fw-bold'>{data.visibility / 1000} KM</span></p> : null}
          {data.main ? <p>Pressure: <span className='fw-bold'>{data.main.pressure} PA</span></p> : null}
          {data.clouds ? <p>Cloud Cover: <span className='fw-bold'>{data.clouds.all}%</span></p> : null}
          </div>
       </div>
       <p className='title'>Daily</p>
       <div className='d-flex justify-content-between position-relative'>
          <div className='right-part__sepcard'>
          {data.main ? <p className='dgree fw-bold p-0 mb-0'>{(data.main.feels_like - 272.15).toFixed(0)}<sup>o</sup></p> : null}
             {data.weather ? <p className='status p-0 fw-bold mb-0'>{data.weather[0].main} <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} title={data.weather[0].main} alt={data.weather[0].main} width='50px' auto='auto' /></p> : null}
             {data.weather ? <p className='date p-0 fw-normal mb-0'>{tomorrow.toLocaleDateString('en-us', options)}</p> : null}
          </div>
          <div className='right-part__sepcard'>
            
             {data.main ? <p className='dgree fw-bold p-0 mb-0'>{(data.main.temp_max - 272.15).toFixed(0)}<sup>o</sup></p> : null}
             {data.weather ? <p className='status p-0 fw-bold mb-0'>{data.weather[0].main} <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} title={data.weather[0].main} alt={data.weather[0].main} width='50px' auto='auto' /></p> : null}
             {data.weather ? <p className='date p-0 fw-normal mb-0'>{afterTomorrow.toLocaleDateString('en-us', options)}</p> : null}
          </div>
          <div className='right-part__sepcard'>
          {data.main ? <p className='dgree fw-bold p-0 mb-0'>{(data.main.temp_min - 272.15).toFixed(0)}<sup>o</sup></p> : null}
             {data.weather ? <p className='status p-0 fw-bold mb-0'>{data.weather[0].main} <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} title={data.weather[0].main} alt={data.weather[0].main} width='50px' auto='auto' /></p> : null}
             {data.weather ?  <p className='date p-0 fw-normal mb-0'>{afterafterTomorrow.toLocaleDateString('en-us', options)}</p> : null}
          </div>
       </div>
    </div>



</section>

);

}



export default Weather;





















// class Todo extends React.Component {
//    constructor(props) {
//       super(props);
    

//       const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//       const weekNames = ["Sunday", "Monday", "Tuseday", "Wendnesday", "Thursday", "Friday", "Saturday"];
//       let today = new Date();
//       let date =  weekNames[today.getDay()] + ' '  + today.getDate() +  ', ' + monthNames[today.getMonth()] + ' ' + today.getFullYear()

//   this.state = {
//     persons: [],
//     weather: [],
//     sys: [],
//     main: [],
//     date: date,
//     value: 'amman,jo',
//     count: 0
//   }

 

//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }


// gitNote() {
//    axios
//    .get(
//      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=8a87aeae5ffe7d394f13a29cf5d05305`
//    )
//    .then((res) => {
//      const persons = res.data;
//      const weather = res.data.weather[0];
//      const wind = res.data.wind.speed;
//      const sys = res.data.sys;
//      const main = res.data.main;
//      const clouds = res.data.clouds.all;
//      this.setState({ persons, weather, sys, main, clouds, wind});
//    });
// }

//   handleChange(value) {
//    this.setState({value: value});
//  }

//  handleSubmit(event) {
//    alert('A name was submitted: ' + this.state.value);
//    event.preventDefault();
//  }

//  componentDidMount() {
//    this.gitNote();
//    this.handleChange();
// }


//   render() {
//     let statusWeather = this.state.persons;
//     let description = this.state.weather;
//     let wind = this.state.wind;
//     let main = this.state.main;
//     let clouds = this.state.clouds;

// return (
// <section className='todo'>
//    <div className='left-part'>

//    <div>
//    <p className='left-part__logo fw-bold'>My Forecast</p>
//    </div>
//       <div className='left-part__location'>
//          <FontAwesomeIcon icon={faLocationDot} />
//          <div>
//             <p className='mb-0'>Current Location</p>
//             <p className='mb-0 fw-bold' key={statusWeather.id}>{statusWeather.name}, {this.state.sys.country}</p>
//          </div>
//       </div>
//       <div className='left-part__search'>
//          <p className='text-center fw-bold'>The Only Weather Forecast You Need</p>
//          <div className='sep'></div>
//          <div className='position-relative w-75 mx-auto'>
//          <form onSubmit={this.handleSubmit}>
//             <input type='search' placeholder='Enter Location' value={this.state.value} onChange={e => this.handleChange(e.target.value)} />
//             {/* <input type="submit" value="Submit" /> */}
//             <FontAwesomeIcon title='Enter Location' icon={faMagnifyingGlass} />
//             <FontAwesomeIcon title='Search' icon={faLocationCrosshairs} />
//             </form>
//          </div>
//       </div>
//    </div>
//    <div className='right-part'>
//       <p className='title'>Today</p>
//       <div className='right-part__card'>
//          <div>
//             <p className='dgree fw-bold p-0 mb-0'>
//                {(main.temp - 273.15).toFixed(0)}<sup>o</sup> 
//                <img src={'http://openweathermap.org/img/wn/'+ description.icon + '.png'} title={description.description} alt={description.description} width='100px' auto='auto' />
//             </p>
//             <p className='status p-0 fw-normal mb-0'>{description.main}</p>
//             <p className='date p-0 fw-normal mb-0'>{this.state.date}</p>
//          </div>
//          <div className='sep'></div>
//          <div className='info'>
//             <p>RealFeel: <span className='fw-bold'>{(main.feels_like - 273.15).toFixed(0)}<sup>o</sup></span></p>
//             <p>Max Temp: <span className='fw-bold'>{(main.temp_max - 273.15).toFixed(0)}<sup>o</sup></span></p>
//             <p>Min Temp: <span className='fw-bold'>{(main.temp_min - 273.15).toFixed(0)}<sup>o</sup></span></p>
//             <p>Humidity: <span className='fw-bold'>{main.humidity}%</span></p>
//             <p>Visibility: <span className='fw-bold'>{statusWeather.visibility / 1000} KM</span></p>
//             <p>Cloud Cover: <span className='fw-bold'>{clouds}%</span></p>
//             <p>Pressure: <span className='fw-bold'>{main.pressure}PA</span></p>
//             <p>Wind Speed: <span className='fw-bold'>{wind} MS</span></p>



//          </div>
//       </div>
//       <p className='title'>Daily</p>
//       <div className='d-flex justify-content-between position-relative'>
//       <div className='slider slider-first'><FontAwesomeIcon title='Left' icon={faChevronLeft} /></div>
//       <div className='slider slider-second'><FontAwesomeIcon title='Right' icon={faChevronRight} /></div>
//          <div className='right-part__sepcard'>
//             <p className='dgree fw-bold p-0 mb-0'>32<sup>o</sup></p>
//             <p className='status p-0fw-bold mb-0'>
//                Sunny 
//                <FontAwesomeIcon title='Weather' icon={faSun} />
//             </p>
//             <p className='date p-0 fw-normal mb-0'>Monday 11, July 2022</p>
//          </div>
//          <div className='right-part__sepcard'>
//             <p className='dgree fw-bold p-0 mb-0'>32<sup>o</sup></p>
//             <p className='status p-0 fw-bold mb-0'>
//                Sunny 
//                <FontAwesomeIcon title='Weather' icon={faSun} />
//             </p>
//             <p className='date p-0 fw-normal mb-0'>Monday 11, July 2022</p>
//          </div>
//          <div className='right-part__sepcard'>
//             <p className='dgree fw-bold p-0 mb-0'>32<sup>o</sup></p>
//             <p className='status p-0 fw-bold  mb-0'>
//                Sunny 
//                <FontAwesomeIcon title='Weather' icon={faSun} />
//             </p>
//             <p className='date p-0 fw-normal mb-0'>Monday 11, July 2022</p>
//          </div>
//       </div>
//    </div>
// </section>
//         )
// }
// }

// export default Todo;