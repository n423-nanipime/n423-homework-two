var key = "dfa5b9eded8a46e4b86202256222908";
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
      //document.write()
      console.log(data);
    }
  ).fail(function (e) {
    alert("Sorry, your data cannot be loaded at this time.");
  });
}

export { getCurrentWeather };
