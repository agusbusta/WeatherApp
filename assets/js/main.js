const obterUbicacion = async()=>{
    const ciudad = document.getElementById('searcher').value;
    let historial = []
 
    historial.push(ciudad)
    sessionStorage.setItem(historial, "history")
    const res = await fetch(`https://api.weatherbit.io/v2.0/current?&city=${ciudad}&key=c522ccda026845a4804ab7bf140dd669`)
    .then(response => response.json())
    .then(data => armaDatos(JSON.stringify(data)));
}
 
const armaDatos = (data) =>{
    const datos = JSON.parse(data)
    const historial = sessionStorage.getItem("history")
    document.getElementById("temperatura").innerHTML = datos.data[0].temp
    document.getElementById("cityName").innerHTML = datos.data[0].city_name
    document.getElementById("cityDate").innerHTML = datos.data[0].datetime
 
    document.getElementById("humityWeather").innerHTML = datos.data[0].rh
    document.getElementById("windWeather").innerHTML = datos.data[0].wind_spd
    document.getElementById("feelsLikeWeather").innerHTML = datos.data[0].app_temp
    document.getElementById("precepitationWeather").innerHTML = datos.data[0].precip
    document.getElementById("sunriseWeather").innerHTML = datos.data[0].sunrise
    document.getElementById("sunsetWeather").innerHTML = datos.data[0].sunset
 
}
