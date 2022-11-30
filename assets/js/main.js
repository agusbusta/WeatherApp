const apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q={chicago}&appid={65f711eef5edeb59a95ececb552d08d5}"
const xhr = new XMLHttpRequest();

function api(){
    xhr.open("GET",`${apiUrl}`);
}
