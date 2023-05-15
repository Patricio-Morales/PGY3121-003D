let latitud;
let longitud;


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;
    console.log("Latitud1: " + latitud + ", Longitud2: " + longitud);

  });
} else {
  console.log("Geolocalización no soportada por este navegador.");
}


document.getElementById("imagen").style.display="none";
function consumoApi() {

document.getElementById("imagen").style.display="inline"

  fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitud+'&lon='+longitud+'&appid=ba9624ec040ad2c2d6e71cbed1728927&lang=es&units=metric')
    .then(response => response.json())
    .then(data => {
      console.log("Latitud: " + latitud + ", Longitud: " + longitud);
      console.log(data);
      let parametro = data.weather[0].icon;
      let url = "https://openweathermap.org/img/wn/"+parametro+"@2x.png"

      let name = document.getElementById("cuidad");
      let weather = document.getElementById("clima");
      let main = document.getElementById("temperatura");
      
      
      
      
      weather.innerHTML += data.weather[0].description;
      main.innerHTML += Math.round(data.main.temp)+"°C";


      let imagen = document.getElementById("imagen");
      imagen.src = url;
      name.innerHTML += data.name;    

    })
    //.catch(error => console.error(error));//
}

