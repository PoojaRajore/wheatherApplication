// this a key and api link
const  apikey="13a7a9016306d677f9c4602ed2b5a088";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    //here we access search input and button classes
    const searchBox = document. querySelector(".searchbar input");
    const searchBtn = document. querySelector(".searchbar button");

    
    // here we access weather icon class
    const WeatherIcon=document.querySelector(".weather-icon");

    // this is a async function for sending a request on api
    async function checkWeather(city){
     const response=await fetch(apiurl+   city+ `&appid=${apikey}`);

    // for wrong city name induced an error 
       if(response.status==404){
    
   
  document.querySelector(".Errorgenerator").style.display="block";
      document.querySelector(".weather").style.display="none";  
      //alert("Please try another city name!");         
    }
    else{
      // json returns second promise in useable data
       let data=await response.json();
  console.log(data);
      //here we access other classses for updating the data
      document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°c";
document.querySelector(".humidity").innerHTML=(data.main.humidity)+"%";
document.querySelector(".wind").innerHTML=(data.wind.speed)+"km/h";

// here are some conditions for weather icons
          if(data.weather[0].main=="Clouds"){
  WeatherIcon.src="images/clouds.png";
 }
else if(data.weather[0].main=="Drizzle"){
  WeatherIcon.src="images/drizzle.png";
}
else if(data.weather[0].main=="Mist"){
  WeatherIcon.src="images/mist.png";

}else if(data.weather[0].main=="Rain"){
WeatherIcon.src="images/rain.png";
}

else if(data.weather[0].main=="Clear"){
WeatherIcon.src="images/clear.png";
}
else if(data.weather[0].main=="Snow"){
WeatherIcon.src="images/snow.png";
} 
else if(data.weather[0].main=="Haze"){
  WeatherIcon.src="images/haze1.png";
}
            // here we acceses our weather class to hide the block
    document.querySelector(".weather").style.display="block";
    document.querySelector(".Errorgenerator").style.display="none";      
     }
      
   }
   // it is a click event performing when any city  temperature is search 
      searchBtn.addEventListener("click",()=>{
        checkWeather( searchBox.value);
      });
      
      