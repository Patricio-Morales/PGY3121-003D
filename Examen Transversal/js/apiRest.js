function consumoApi() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=dfc8e7f4f8a3ab6cff50640b6139fcc0").then(response => response.json())
    .then(data =>{console.log(data);})
}