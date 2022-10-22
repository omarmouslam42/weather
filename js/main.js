
let countryName= document.querySelector(".getinput") ;
let weatherData;
let day;
let nextday;
let nextnextday;
let date;
let month;

function displayWeatherNow(){
  
    let weathernow =
    ` 
    <div class="card-header ">
        <div class="test d-flex justify-content-between align-items-center  p-2">
            <h6 class=" fw-light">${day}</h6>
            <h6 class=" fw-light">${date + month}</h6>
        </div>
        <div class="card-view news  news1 ps-3 py-4">
            <h5>${weatherData.location.name}</h5>
            <div class="d-flex justify-content-start align-items-center">
            <h1> ${weatherData.current.temp_c}</h1><sup class="fs-1 fw-bold">o</sup> <span class=" degree fw-bold">C</span>
            <img class="ms-3 w-25" src="https:${weatherData.current.condition.icon}" alt="good">
            </div>
            <p class="text-info fw-lighter">${weatherData.current.condition.text}</p>
            <div class=" d-flex justify-content-start align-items-center">
                <div class=" d-flex justify-content-center align-items-center">
                    <img class="m-1 mb-3" src="img/icon-umberella.png" alt="">
                    <p>20%</p>
                </div>
                <div  class=" d-flex justify-content-center align-items-center mx-3">
                    <img class="m-1 mb-3" src="img/icon-wind.png" alt="">
                    <p>18km/h</p>
                </div>
                <div class=" d-flex justify-content-center align-items-center">
                    <img class="m-1 mb-3" src="img/icon-compass.png" alt="">
                    <p>East</p>
                </div>
                <div></div>
            </div>
        </div>
    </div>`
document.querySelector(".head1").innerHTML=weathernow;
}
function tomorrow(){
    let weathernow =  `<div class="card-header ">
    <div class="test2 d-flex justify-content-center align-items-center  p-2">
        <h6 class=" fw-light">${nextday}</h6>
       
    </div>
    <div class="card-view about m-auto py-4">                               
        <div class="text-center">
            <img src="https:${weatherData.forecast.forecastday[1].day.condition.icon}"alt="good">
        <div class="d-flex justify-content-center align-items-center">
            <h3 >${weatherData.forecast.forecastday[1].day.maxtemp_c}<sup class="fs-5 fw-bold">o</sup>C</h3> 
        </div>
        <div class="d-flex justify-content-center align-items-start ">
            <p class="degreeColor fs-6">${weatherData.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></p>
        </div>
        <p class="text-info fw-lighter">${weatherData.forecast.forecastday[1].day.condition.text}</p>
        </div>
        
        
            <div></div>
        </div>
</div> `
document.querySelector(".head2").innerHTML=weathernow;
}
function nextTomorrow(){
    let weathernow =  `<div class="card-header ">
    <div class="test d-flex justify-content-center align-items-center  p-2">
        <h6 class=" fw-light">${nextnextday}</h6>
       
    </div>
    <div class="card-view news m-auto py-4">                               
        <div class="text-center">
            <img src="https:${weatherData.forecast.forecastday[2].day.condition.icon}" alt="good">
        <div class="d-flex justify-content-center align-items-center">
            <h3 >${weatherData.forecast.forecastday[2].day.maxtemp_c}<sup class="fs-5 fw-bold">o</sup> C</h3>
        </div>
        <div class="d-flex justify-content-center align-items-start ">
            <p class="degreeColor fs-6 ">${weatherData.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></p>
        </div>
        <p class="text-info fw-lighter">${weatherData.forecast.forecastday[2].day.condition.text}</p>
        </div>
            
        </div>
</div>`
 document.querySelector(".head3").innerHTML=weathernow;
}


async function getWeather() {
    let weatherRes =await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1c0806635d734ae6b04141719221610&q=${countryName.value}&days=3&aqi=yes&alerts=yes`);
    weatherData = await weatherRes.json()
    console.log(weatherData);
    displayWeatherNow();
    tomorrow();
    nextTomorrow();
    let date = new Date();
    displayDate(date) 
}
    
function displayDate(x) {
    let months =["January", "February","March","April","May","June","July","August","september","October","November","Desember"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    day = days[x.getDay()];
    nextday = days[checkIndexNextDay() ]
    nextnextday = days[checkIndexNextNextDay()]
    date = x.getDate();
    month =months[x.getMonth()]; 
   function checkIndexNextDay() {
    if (x.getDay() == 6) {
        return  0 ;
    }
    else{
       return x.getDay()+1 ;
    }
   }
   function checkIndexNextNextDay() {
    if (x.getDay() == 5) {
        return 0 ;
    }
    else if (x.getDay() == 6){
        return 1 ;
    }
    else {
        return x.getDay()+2 ;
    }
 }
}

document.querySelector(".local").addEventListener("click",getWeather)
document.querySelector(".getinput").addEventListener("keyup",getWeather)



