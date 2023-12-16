const apikey="a73dce1fe0f40bc3a9e28e54e56a6d57";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputtext=document.querySelector(".first input");
const searchbtn=document.querySelector(".first button");
const weatherimage=document.querySelector(".weatherimage");
document.querySelector(".information").style.display="none";
// checkWeather(bengaluru);
searchbtn.addEventListener("click",()=>{checkWeather(inputtext.value)});

async function checkWeather(city){
    const response=await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".information").style.display="none";
    }
     
    else {
    let data=await response.json();
    
    console.log(data);
    document.querySelector(".error").style.display="none";
        document.querySelector(".information").style.display="block";
    
  
    document.querySelector(".temps").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humids").innerHTML=data.main.humidity+"%";
    // document.querySelector(".value").innerHTML=data.weather[0].main;
    document.querySelector(".speeds").innerHTML=data.wind.speed+"km/h";

    if (data.weather[0].main==="Clear"){
        weatherimage.src="images/clear.png";
    }
    else if (data.weather.main==="Clouds"){
        weatherimage.src="clouds.png";
    }
    else if (data.weather[0].main==="Mist"){
        weatherimage.src="images/mist.png";
    }
    else if (data.weather[0].main==="Snow"){
        weatherimage.src="images/snow.png";
    }
    else if (data.weather[0].main==="Rain"){
        weatherimage.src="images/rain.png";
    }
    else if (data.weather[0].main==="Drizzle"){
        weatherimage.src="images/drizzle.png";
    }
    
}

    

}


