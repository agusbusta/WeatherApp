let historialArray = []
 
const obterUbicacion = async()=>{
    const ciudad = document.getElementById('searcher').value;
    historialArray.push(ciudad)
    document.getElementById('searcher').value = ""
    const res = await fetch(`https://api.weatherbit.io/v2.0/current?&city=${ciudad}&key=c522ccda026845a4804ab7bf140dd669`)
    .then(response => response.json())
    .then(data => armaDatos(JSON.stringify(data), JSON.stringify(historialArray) ));
}
 
const armaDatos = (data, history) =>{
    const datos = JSON.parse(data)
    const historial = JSON.parse(history)
    let myvar = "<ul>"
    for(i=0; i < historial.length; i++){
        myvar +=`
            <li style="font-size: 24px; color:#fff; list-style:none; margin-bottom:5px;">${historial[i]}</li>
        `
    }
    myvar +=`</ul>`
 
    document.getElementById("cityList").innerHTML = myvar
 
    document.getElementById("temperatura").innerHTML = datos.data[0].temp
    document.getElementById("cityName").innerHTML = datos.data[0].city_name
    document.getElementById("cityDate").innerHTML = datos.data[0].datetime
 
    document.getElementById("humityWeather").innerHTML = datos.data[0].rh
    document.getElementById("windWeather").innerHTML = datos.data[0].wind_spd
    document.getElementById("feelsLikeWeather").innerHTML = datos.data[0].app_temp
    document.getElementById("precepitationWeather").innerHTML = datos.data[0].precip
    document.getElementById("sunriseWeather").innerHTML = datos.data[0].sunrise
    document.getElementById("sunsetWeather").innerHTML = datos.data[0].sunset
 
    const codeClima = datos.data[0].weather.code
    var backgroundImageContent = document.getElementById("backgroundImageContent");
 
    if(datos.data[0].pod == "d"){
        if(codeClima >199 && codeClima < 523){
            // dia lluvioso
            backgroundImageContent.style.backgroundImage = "url('../assets/img/diaLluvia.jpg')";
        }else if((codeClima > 599 && codeClima < 611) || (codeClima > 611 && codeClima < 623)){
            //Dia nieve
            backgroundImageContent.style.backgroundImage = "url('tuUrl')";
        }else if(codeClima == 800){
            //Dia Despejado
            backgroundImageContent.style.backgroundImage = "url('../img/DiaDespejado.jpg')";
        }else if(codeClima > 800 && codeClima < 805){
            //Dia Nublado
            backgroundImageContent.style.backgroundImage = "url('tuUrl')";
        }
 
    }else{
 
        if(codeClima >199 && codeClima < 523){
            // dia lluvioso
        }else if((codeClima > 599 && codeClima < 611) || (codeClima > 611 && codeClima < 623)){
            //Dia nieve
        }else if(codeClima == 800){
            //Dia Despejado
        }else if(codeClima > 800 && codeClima < 805){
            //Dia Nublado
        }
    }
 
}
