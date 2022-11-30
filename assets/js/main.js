const obterUbicacion = async()=>{
    const ciudad = document.getElementById('searcher').value;
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&appid=ff1b03229e0538b78aebdbe11a3be644`)
    .then(response => response.json())
    .then(data => obtenerClimaCiudad(JSON.stringify(data)));
}

const obtenerClimaCiudad = async (datos) =>{
    const data = JSON.parse(datos)
    const lat = data[0].lat
    const lon = data[0].lon

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ff1b03229e0538b78aebdbe11a3be644&units=metric`)
    .then(response => response.json())
    .then(data =>console.log(data));

    document.getElementById('temperatura').innerHTML = data.main;
}
