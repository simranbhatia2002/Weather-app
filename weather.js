const apikey="b608551e9d9039dae91cf5493e8164e0";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".Weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl+city+`&appid=${apikey}`); 

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
    var data=await response.json();
    
    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main.toLowerCase() === "clouds") {
        weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main.toLowerCase() === "rain") {
        weatherIcon.src = "rain.png";
    } else if (data.weather[0].main.toLowerCase() === "snow") {
        weatherIcon.src = "snow.png";
    } else if (data.weather[0].main.toLowerCase() === "clear") {
        weatherIcon.src = "clear.png";
    } else if (data.weather[0].main.toLowerCase() === "drizzle") {
        weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main.toLowerCase() === "mist") {
        weatherIcon.src = "mist.png";
   
    }
        document.querySelector(".weather").style.display ="block"   ;
        document.querySelector(".error").style.display ="none";
        
    }
}
searchBtn.addEventListener("click",()=>{

checkweather(searchBox.value);
});
