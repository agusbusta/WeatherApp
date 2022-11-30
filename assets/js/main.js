const obterUbicacion = async()=>{
    const ciudad = document.getElementById('searcher').value;
    console.log("CIUDAD",ciudad);
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&appid=ff1b03229e0538b78aebdbe11a3be644`)
    .then(response => response.json())
    .then(data => obtenerClimaCiudad(JSON.stringify(data)));
}

const obtenerClimaCiudad = async (datos) =>{
    const info = JSON.parse(datos)
    console.log("DATA2",info);
    const lat = info[0].lat
    const lon = info[0].lon
    console.log(lat, lon, info);
    const res = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=c522ccda026845a4804ab7bf140dd669`)
    .then(response => response.json())
    .then(data => armaDatos(JSON.stringify(data)));
}

const armaDatos = (data) =>{
    const datos = JSON.parse(data)
    console.log(datos);
    document.getElementById("temperatura").innerHTML = datos.data[0].app_temp
}