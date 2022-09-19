var key = "53599ec288054906a0a203018222908";
var baseURL = "http://api.weatherapi.com/v1/";

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  // getMonth returns integer from 0(January)
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const fullDate = `${year}-${month}-${day}`;
  console.log(fullDate);
  return fullDate;
}

function getCurrentWeather(location) {
  const currentDate = getCurrentDate();

  // // THIS is for getting and looping through the local data.json
  // $.getJSON("data/data.json", (data) => {
  //     for (let i = 0; i < data.length; i++) {
  //         const element = data[i];
  //         console.log(element.name);
  //         $("#app").append(`<p>${element.name}</p>`);
  //     }

  // }).fail(function(e) {
  //     alert("Sorry, your data cannot be loaded at this time.");
  // });

  // THIS is for retreiving api

  // &days=10&aqi=no&alerts=no
  $.get(
    `${baseURL}forecast.json?key=${key}&q=${location}&dt=${currentDate}&aqi=no&alerts=no`,
    (data) => {
      console.log(data);
      $("#app-results").html(
        "Location: " +
          data.location.name +
          "<br>" +
          "Current Local Date: " +
          data.location.localtime +
          "<br>" +
          "Weather Condition: " +
          data.current.condition.text +
          "<br>" +
          "Current Temperature: " +
          data.current.temp_f +
          "°F" +
          "<br>"
      );
      $("#app-results").append(
        "Forecast: " + JSON.stringify(data.forecast.forecastday)
      );
      //$("#app").show();
    }
  ).fail(function (e) {
    alert("Sorry, your data cannot be loaded at this time.");
  });
}

export { getCurrentWeather };
