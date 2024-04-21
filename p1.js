const apikey="70a30bf9a0bfae5806b8115e8ba2937b";
        const apilink=" https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchbox=document.querySelector(".card .searchbox input");
        const searchbtn=document.querySelector(".card .searchbox button");
        const weathericon=document.querySelector(".rain");
        async function check(city){
            const response =await fetch(apilink+city+`&appid=${apikey}`);
            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
                var data=await response.json();
            console.log(data);
           document.querySelector(".city").innerHTML=data.name; 
           document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
           document.querySelector(".hum").innerHTML=data.main.humidity +"%"; 
           document.querySelector(".win").innerHTML=data.wind.speed +"km/h";
           if(data.weather[0].main=="Clouds"){
            weathericon.src="clouds.png"
           }
           else if(data.weather[0].main=="Clear"){
            weathericon.src="clear.png"
           }
           else if(data.weather[0].main=="Rain"){
            weathericon.src="rain.png"
           }
           else if(data.weather[0].main=="Mist"){
            weathericon.src="mist.png"
           }
           else if(data.weather[0].main=="Drizzle"){
            weathericon.src="drizzle.png"
           }
           document.querySelector(".weather").style.display="block";
           document.querySelector(".error").style.display="none";
            }
            
        }
        searchbtn.addEventListener("click",()=>{
            check(searchbox.value);
        })
