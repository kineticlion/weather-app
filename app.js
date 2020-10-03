const { geocode } = require("./api/mapbox");
const { forecast } = require("./api/weatherstack");

let location = process.env.LOCATION;
//picks cli arguments from [2] location and concatenates them
if (process.argv.length > 2) location = process.argv.slice(2).join(" ");

//gets latitude and longitude for fetching weather
geocode(location, (error, data) => {
  if (error) return console.log(error);
  //gets forecast at the latitude and longitude
  forecast(data.latitude, data.longitude, data.location, (error, data) => {
    if (error) return console.log("Error", error);
    console.log(data);
  });
});
