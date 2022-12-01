let historialArray = []

const obterUbicacion = async()=>{
    const ciudad = document.getElementById('searcher').value;
    historialArray.push(ciudad)
    document.getElementById('searcher').value = ""
    const res = await fetch(`https://api.weatherbit.io/v2.0/current?&city=${ciudad}&key=8ab2c715a00549b3a4360e399ec4b9e7`)
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
            backgroundImageContent.style.backgroundSize = "cover" 
            backgroundImageContent.style.backgroundImage = "url('https://previews.123rf.com/images/khatuna71/khatuna711802/khatuna71180200054/95056589-d%C3%ADa-lluvioso-en-la-ciudad-tr%C3%A1fico-y-coches-y-gotas-de-lluvia-silueta-de-autob%C3%BAs-borrosa.jpg')";
        }else if((codeClima > 599 && codeClima < 611) || (codeClima > 611 && codeClima < 623)){
            //Dia nieve
            backgroundImageContent.style.backgroundSize = "cover" 
            backgroundImageContent.style.backgroundImage = "url('https://www.inoutviajes.com/fotos/20/7974_1_Helsinki_1_credito_Flickr_Jukka.jpg')";
        }else if(codeClima == 800){
            //Dia Despejado
            backgroundImageContent.style.backgroundSize = "cover" 
            backgroundImageContent.style.backgroundImage = "url('https://img.freepik.com/fotos-premium/cielo-panoramico-nubes-dia-soleado_355067-1129.jpg')";
        }else if(codeClima > 800 && codeClima < 805){
            //Dia Nublado
            backgroundImageContent.style.backgroundSize = "cover" 
            backgroundImageContent.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2022/07/10/12/44/city-7312786_960_720.jpg')";
        }
 
    }else if (datos.data[0].pod == "n"){
        if(codeClima >199 && codeClima < 523){
            // noche lluvioso
            backgroundImageContent.style.backgroundSize = "cover" 
            backgroundImageContent.style.backgroundImage = "url('https://st2.depositphotos.com/1785433/5280/i/450/depositphotos_52802543-stock-photo-driving-in-the-rainy-night.jpg')";
        }else if((codeClima > 599 && codeClima < 611) || (codeClima > 611 && codeClima < 623)){
            //noche nieve
            backgroundImageContent.style.backgroundSize = "cover" 
            backgroundImageContent.style.backgroundImage = "url('https://w0.peakpx.com/wallpaper/509/689/HD-wallpaper-new-york-on-a-snowy-winter-night-brooklyn-snowy-winter-city-new-york-snowing-snow-bridge-night.jpg')";
        }else if(codeClima == 800){
            //noche Despejado
            backgroundImageContent.style.backgroundSize = "cover" 
            backgroundImageContent.style.backgroundImage = "url('https://www.meteorologiaenred.com/wp-content/uploads/2017/01/cielo.jpg')";
        }else if(codeClima > 800 && codeClima < 805){
            //noche Nublado
            backgroundImageContent.style.backgroundSize = "cover"
            backgroundImageContent.style.backgroundImage = "url('https://img.fotocommunity.com/noche-nublada-5773b154-2e7f-4d07-85c3-ee4a9501625a.jpg?height=1080')"; 
        }
    }
 
}
