import * as MODEL from "./model.js";

function initListeners() {
    //MODEL.getAllNames();

    $("#gw").click((e) => {
        const location = $("#gwInput").val();
        if(location != "") {
            getWeather(location);
        } else {
            alert("You need to put a location in first!");
        }
    });
}

function getWeather(location) {
    console.log("weather " + location);
    MODEL.getCurrentWeather(location);
    $("#gwInput").val("");
}

$(document).ready(function () {
    initListeners();
});