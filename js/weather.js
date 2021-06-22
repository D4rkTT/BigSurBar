var GlobalWeather;
api.weather.observeData(function (newData) {
    var city = newData.metadata.address.city;
    var temp = newData.now.temperature.current + "&deg;C";
    GlobalWeather = city + " " + temp;
  });