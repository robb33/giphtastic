// Giphy Api api_key - The public beta key is "dc6zaTOxFJmzC"

// alert ("hello world");


var api = "http://api.giphy.com/v1/gifs/search?";
var q = "&q=";

var topics ="cthulu";
// var topics = ["octopus", "cthulu", "cthulu mythos", "edgar allan poe"];

var api_key = "&api_key=dc6zaTOxFJmzC";

// console.log(topic);

var queryURL = api + q + topics + api_key;

// console.log(queryURL);



$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);

      console.log(response.Runtime);
    });








// giphyButtons
// giphy-form
// giphy-input
// addGiphy
// giphy


// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC  


// GIPHY parameters q limit rating